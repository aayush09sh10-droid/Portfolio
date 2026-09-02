import { useEffect, useRef } from 'react'
import * as THREE from 'three'

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

function createBoxBase() {
  const base = new THREE.Group()
  const materials = createBoxMaterialSet()
  const addPanel = (geometry, position) => {
    const panel = new THREE.Mesh(geometry, materials)
    panel.position.set(...position)
    panel.castShadow = true
    panel.receiveShadow = true
    base.add(panel)
  }

  // Separate panels leave a real, visible cavity instead of a solid cube.
  addPanel(new THREE.BoxGeometry(4.8, 0.24, 3.2), [0, -1.24, 0])
  addPanel(new THREE.BoxGeometry(0.24, 2, 3.2), [-2.28, -0.24, 0])
  addPanel(new THREE.BoxGeometry(0.24, 2, 3.2), [2.28, -0.24, 0])
  addPanel(new THREE.BoxGeometry(4.32, 2, 0.24), [0, -0.24, -1.48])
  // A lower front edge keeps the contents and the empty interior visible.
  addPanel(new THREE.BoxGeometry(4.32, 1.48, 0.24), [0, -0.5, 1.48])

  return base
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
  const cardMaterial = new THREE.MeshStandardMaterial({
    color: '#fffdf7',
    roughness: 0.72,
    metalness: 0.08,
    transparent: true,
    opacity: 0.2,
  })
  const accentMaterial = new THREE.MeshStandardMaterial({
    color: '#ffd34e',
    roughness: 0.52,
    metalness: 0.08,
    transparent: true,
    opacity: 0.2,
  })

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

    const cameraTarget = new THREE.Vector3(0, 0.25, 0)
    camera.position.set(-0.8, 4.8, 11.5)
    camera.lookAt(cameraTarget)

    const ambientLight = new THREE.HemisphereLight('#fff7d9', '#1f3d41', 2.6)
    const keyLight = new THREE.DirectionalLight('#ffffff', 3)
    keyLight.position.set(4, 7, 5)
    keyLight.castShadow = true
    scene.add(ambientLight, keyLight)

    const boxGroup = new THREE.Group()
    boxGroup.position.set(0, -1.25, -2.2)
    boxGroup.rotation.set(-0.23, -0.6, -0.12)
    boxGroup.scale.setScalar(0.42)
    scene.add(boxGroup)

    const base = createBoxBase()
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

    const cardMaterials = []
    contactCards.traverse((object) => {
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material]
        materials.forEach((material) => {
          material.transparent = true
          cardMaterials.push(material)
        })
      }
    })

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

    const render = () => {
      camera.lookAt(cameraTarget)
      renderer.render(scene, camera)
    }
    resizeRenderer()
    render()

    const resizeObserver = new ResizeObserver(() => {
      resizeRenderer()
      render()
    })
    resizeObserver.observe(canvas.parentElement)

    const sceneElement = canvas.parentElement
    const contactDetails = canvas.parentElement.querySelector('.contact-box-content')
    let animationFrame

    const clamp = (value) => Math.min(Math.max(value, 0), 1)
    const interpolate = (start, end, progress) => start + (end - start) * progress

    const updateSceneFromScroll = () => {
      const { top, height } = sceneElement.getBoundingClientRect()
      const completionDistance = (window.innerHeight + height) / 2
      const progress = clamp((window.innerHeight - top) / completionDistance)
      const easedProgress = progress * progress * (3 - 2 * progress)
      const lidProgress = clamp((progress - 0.2) / 0.58)
      const cardProgress = clamp((progress - 0.55) / 0.35)
      const detailProgress = clamp((progress - 0.82) / 0.18)

      boxGroup.position.set(
        0,
        interpolate(-1.25, 0.15, easedProgress),
        interpolate(-2.2, 0.8, easedProgress),
      )
      boxGroup.scale.setScalar(interpolate(0.42, 1.3, easedProgress))
      boxGroup.rotation.set(
        interpolate(-0.23, 0, easedProgress),
        interpolate(-0.6, 0.18, easedProgress),
        interpolate(-0.12, 0, easedProgress),
      )
      camera.position.set(
        interpolate(-0.8, 0, easedProgress),
        interpolate(4.8, 2.75, easedProgress),
        interpolate(11.5, 5.4, easedProgress),
      )
      lidPivot.rotation.x = interpolate(0, -2.15, lidProgress)
      contactCards.position.set(
        0,
        interpolate(-0.78, 0.48, cardProgress),
        interpolate(0.1, 1.4, cardProgress),
      )
      contactCards.rotation.y = interpolate(0, 0.22, cardProgress)
      contactCards.rotation.x = interpolate(0.12, 0, cardProgress)
      cardMaterials.forEach((material) => {
        material.opacity = interpolate(0.14, 1, cardProgress)
      })
      contactDetails.style.opacity = detailProgress
      contactDetails.style.transform = `translateX(-50%) translateY(${interpolate(32, 0, detailProgress)}px) scale(${interpolate(0.8, 1, detailProgress)})`
      contactDetails.style.visibility = detailProgress > 0 ? 'visible' : 'hidden'

      render()
    }

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(updateSceneFromScroll)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateSceneFromScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrame)
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

  return <canvas ref={canvasRef} className="three-contact-box block size-full" aria-hidden="true" />
}
