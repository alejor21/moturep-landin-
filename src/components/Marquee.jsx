import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marquee = ({ text = "MOTUREP · MOVILIDAD SEGURA · PASTO · 2025 ·" }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    
    gsap.to(el, {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });
  }, []);

  return (
    <div className="marquee-wrap">
      <div ref={marqueeRef} className="marquee-text">
        {text} {text} {text}
      </div>
    </div>
  );
};

export default Marquee;
