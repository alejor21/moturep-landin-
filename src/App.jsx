import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CanvasScroll from './components/CanvasScroll';
import Stats from './components/Stats';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Ranks from './components/Ranks';
import Download from './components/Download';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Lenis Config (Skill Rule 31 & Immediate Scroll)
    const shouldUseLenis = !isMobile && !prefersReducedMotion;
    const lenis = shouldUseLenis
      ? new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: 0.18,
          wheelMultiplier: 1.1,
          smoothWheel: true,
        })
      : null;

    function raf(time) {
      if (!lenis) return;
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    if (lenis) {
      requestAnimationFrame(raf);
    }

    // Integrate with ScrollTrigger
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
      });
    }

    // 2. Circular Reveal Transition (Skill Rule 74-76)
    // The canvas should reveal when the hero scrolls up
    const canvasWrap = document.querySelector('.canvas-wrap');
    if (canvasWrap && !isMobile && !prefersReducedMotion) {
      gsap.set(canvasWrap, { 
        clipPath: 'circle(0% at 50% 50%)',
        opacity: 0 
      });

      ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(canvasWrap, { 
            clipPath: `circle(${p * 150}% at 50% 50%)`,
            opacity: p > 0 ? 1 : 0
          });
        }
      });
    }

    // 3. Staggered Reveals for Sections (Skill Rule 37)
    const revealItems = document.querySelectorAll('.reveal-item');
    if (isMobile || prefersReducedMotion) {
      gsap.set(revealItems, { opacity: 1, y: 0 });
    } else {
      revealItems.forEach((item) => {
        gsap.fromTo(item, 
          { opacity: 0, y: 60 },
          { 
            opacity: 1, y: 0, duration: 1.2, ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }

    // 4. Hide Canvas on Exit (Transition to Stats)
    const statsSection = document.querySelector('.stats-overlay');
    if (statsSection && canvasWrap && !isMobile && !prefersReducedMotion) {
      ScrollTrigger.create({
        trigger: statsSection,
        start: "top 90%",
        onEnter: () => gsap.to(canvasWrap, { opacity: 0, duration: 0.5 }),
        onLeaveBack: () => gsap.to(canvasWrap, { opacity: 1, duration: 0.5 }),
      });
    }


    return () => {
      if (lenis) {
        lenis.destroy();
      }
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Navbar />
      
      {/* HERO SECTION */}
      <Hero />

      {/* CANVAS VIDEO SECTION (Sticky logic handled in component/css) */}
      <div id="video-sequence" className="video-sequence">
        <CanvasScroll frameCount={192} imagePath="/frames/frame_" />
        
        {/* TEXT OVER VIDEO */}
        <section className="scroll-section align-right">
          <div className="reveal-item">
            <span className="hero-eyebrow">Tecnología</span>
            <h2 className="hero-h1">Sincronización <br/> en tiempo real</h2>
            <p className="hero-tagline">Reportes instantáneos de la comunidad para evitar trancones y peligros en la vía.</p>
          </div>
        </section>

        <section className="scroll-section align-left">
          <div className="reveal-item">
            <span className="hero-eyebrow">Comunidad</span>
            <h2 className="hero-h1">La red de <br/> moteros más grande</h2>
            <p className="hero-tagline">Únete a miles de conductores en Pasto que ya están mejorando su seguridad vial.</p>
          </div>
        </section>

        <Marquee />

        <section className="scroll-section align-right">
          <div className="reveal-item">
            <span className="hero-eyebrow">Gamificación</span>
            <h2 className="hero-h1">Supera tus <br/> propios límites</h2>
            <p className="hero-tagline">Gana puntos por conducción responsable y desbloquea beneficios exclusivos.</p>
          </div>
        </section>
      </div>


      <Stats />
      
      <div id="post-video" className="post-video">
        <Features />
        <HowItWorks />
        <Ranks />
        <Download />
        <Footer />
      </div>
    </div>
  );
}

export default App;

