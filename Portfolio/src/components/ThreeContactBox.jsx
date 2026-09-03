import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function createBoxMaterial(color = '#fb087d') {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.52, metalness: 0.05 })
}

function createBoxBase() {
  const base = new THREE.Group()
  const material = createBoxMaterial()
  const addPanel = (geometry, position) => {
    const panel = new THREE.Mesh(geometry, material)
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
      createBoxMaterial('#ff9f1c'),
    )
    lid.position.set(0, 0, 1.67)
    lid.castShadow = true
    lidPivot.add(lid)

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
      // Reveal the contact information while the box is opening, so it is
      // reachable without having to scroll to the very end of the section.
      const detailProgress = clamp((progress - 0.45) / 0.3)

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
      contactDetails.style.opacity = detailProgress
      contactDetails.style.transform = `translateY(${interpolate(32, 0, detailProgress)}px) scale(${interpolate(0.8, 1, detailProgress)})`
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
