import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

function createBoxMaterialSet() {
  return [
    new THREE.MeshStandardMaterial({ color: '#fb087d' }),
    new THREE.MeshStandardMaterial({ color: '#700041' }),
    new THREE.MeshStandardMaterial({ color: '#ffd34e' }),
    new THREE.MeshStandardMaterial({ color: '#315f0b' }),
    new THREE.MeshStandardMaterial({ color: '#50b388' }),
    new THREE.MeshStandardMaterial({ color: '#ff9f1c' }),
  ]
}

function addLidPattern(lidPivot) {
  const pattern = new THREE.Group()
  const pinkMaterial = new THREE.MeshStandardMaterial({ color: '#fb087d', roughness: 0.55 })
  const paleMaterial = new THREE.MeshStandardMaterial({ color: '#fff0a0', roughness: 0.55 })
  const darkMaterial = new THREE.MeshStandardMaterial({ color: '#281047', roughness: 0.55 })

  const createArc = (radius, tube, material, position, rotation) => {
    const arc = new THREE.Mesh(
      new THREE.TorusGeometry(radius, tube, 10, 42, Math.PI * 1.1),
      material,
    )
    arc.position.set(...position)
    arc.rotation.set(Math.PI / 2, 0, rotation)
    pattern.add(arc)
  }

  createArc(1.1, 0.18, pinkMaterial, [-1.3, 0.2, 0.7], 0.35)
  createArc(0.9, 0.2, paleMaterial, [0.9, 0.2, 0.1], 2.4)
  createArc(0.72, 0.15, darkMaterial, [0.2, 0.2, 1.25], -0.8)

  lidPivot.add(pattern)
}

function createContactCards() {
  const cards = new THREE.Group()
  const cardMaterial = new THREE.MeshStandardMaterial({ color: '#fffdf7', roughness: 0.7 })
  const accentMaterial = new THREE.MeshStandardMaterial({ color: '#ffd34e', roughness: 0.55 })

  ;[
    [-0.9, 0.25, 0.05, -0.2],
    [0.05, 0.52, 0.24, 0.1],
    [0.95, 0.2, -0.08, 0.27],
  ].forEach(([x, y, z, rotation], index) => {
    const card = new THREE.Mesh(
      new THREE.BoxGeometry(1.1, 0.12, 0.72),
      index === 1 ? accentMaterial : cardMaterial,
    )
    card.position.set(x, y, z)
    card.rotation.set(0.2, rotation, rotation)
    cards.add(card)
  })

  return cards
}

export default function ThreeContactBox() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.shadowMap.enabled = true

    camera.position.set(0, 3.9, 9)
    camera.lookAt(0, 0.4, 0)

    const ambientLight = new THREE.HemisphereLight('#fff7d9', '#1f3d41', 2.6)
    const keyLight = new THREE.DirectionalLight('#ffffff', 3)
    keyLight.position.set(4, 7, 5)
    keyLight.castShadow = true
    scene.add(ambientLight, keyLight)

    const boxGroup = new THREE.Group()
    boxGroup.rotation.set(-0.08, -0.35, -0.08)
    scene.add(boxGroup)

    const base = new THREE.Mesh(
      new THREE.BoxGeometry(4.8, 2.2, 3.2),
      createBoxMaterialSet(),
    )
    base.position.y = -0.25
    base.castShadow = true
    base.receiveShadow = true
    boxGroup.add(base)

    const lidPivot = new THREE.Group()
    lidPivot.position.set(0, 0.88, -1.62)
    boxGroup.add(lidPivot)

    const lid = new THREE.Mesh(
      new THREE.BoxGeometry(4.96, 0.28, 3.34),
      createBoxMaterialSet(),
    )
    lid.position.set(0, 0, 1.67)
    lid.castShadow = true
    lidPivot.add(lid)
    addLidPattern(lidPivot)

    const contactCards = createContactCards()
    contactCards.position.set(0, -0.78, 0.1)
    contactCards.scale.setScalar(0.75)
    boxGroup.add(contactCards)

    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(4.1, 64),
      new THREE.ShadowMaterial({ color: '#356467', opacity: 0.25 }),
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -1.42
    ground.receiveShadow = true
    scene.add(ground)

    const resizeRenderer = () => {
      const { width, height } = canvas.parentElement.getBoundingClientRect()
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const render = () => renderer.render(scene, camera)
    resizeRenderer()
    render()

    const resizeObserver = new ResizeObserver(() => {
      resizeRenderer()
      render()
    })
    resizeObserver.observe(canvas.parentElement)

    const context = gsap.context(() => {
      const contactDetails = canvas.parentElement.querySelector('.contact-box-content')
      gsap.set(contactDetails, { autoAlpha: 0, y: 30 })

      gsap.timeline({
        scrollTrigger: {
          trigger: '.contact-box-scene',
          start: 'top 85%',
          end: 'top 25%',
          scrub: 1,
          onUpdate: render,
        },
      })
        .fromTo(
          boxGroup.scale,
          { x: 0.56, y: 0.56, z: 0.56 },
          { x: 1, y: 1, z: 1, ease: 'none' },
          0,
        )
        .to(boxGroup.rotation, { x: 0, y: 0.08, z: 0, ease: 'none' }, 0)
        .to(lidPivot.rotation, { x: -1.95, ease: 'none' }, 0.42)
        .to(contactCards.position, { y: 0.25, ease: 'none' }, 0.58)
        .to(contactCards.rotation, { y: 0.18, ease: 'none' }, 0.58)
        .to(contactDetails, { autoAlpha: 1, y: 0, ease: 'none' }, 0.65)
    }, canvas.parentElement)

    return () => {
      context.revert()
      resizeObserver.disconnect()
      renderer.dispose()
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose()
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material]
          materials.forEach((material) => material.dispose())
        }
      })
    }
  }, [])

  return <canvas ref={canvasRef} className="three-contact-box" aria-hidden="true" />
}
