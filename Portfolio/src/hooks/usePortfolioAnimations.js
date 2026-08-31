import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function usePortfolioAnimations(rootRef, activeProject) {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from('.site-header', {
        y: -25,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })

      gsap.from('.hero h1 span, .hero h1 em', {
        yPercent: 120,
        rotate: 2,
        duration: 1,
        stagger: 0.1,
        delay: 0.15,
        ease: 'power4.out',
      })

      gsap.from('.hero-intro, .hero-footer, .hero-kicker', {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        delay: 0.7,
        duration: 0.6,
      })

      gsap.utils.toArray('.section, .site-footer').forEach((section) => {
        gsap.from(section, {
          y: 80,
          scale: 0.94,
          opacity: 0,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 86%',
          },
        })
      })

      gsap.utils.toArray('.scroll-pop').forEach((sentence) => {
        gsap.from(sentence, {
          y: 34,
          opacity: 0,
          rotate: 1,
          duration: 0.8,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: sentence,
            start: 'top 90%',
          },
        })
      })

      gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
          y: 80,
          rotate: 0,
          opacity: 0,
          duration: 0.75,
          delay: index * 0.12,
          scrollTrigger: {
            trigger: '.project-grid',
            start: 'top 80%',
          },
        })
      })

    }, rootRef)

    return () => context.revert()
  }, [rootRef])

  useLayoutEffect(() => {
    if (!activeProject) return undefined

    const context = gsap.context(() => {
      gsap.fromTo(
        '.spotlight-card',
        { y: 90, rotate: -4, scale: 0.88, opacity: 0 },
        { y: 0, rotate: 0, scale: 1, opacity: 1, duration: 0.6, ease: 'power4.out' },
      )
    }, rootRef)

    return () => context.revert()
  }, [activeProject, rootRef])
}
