import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const nums = containerRef.current.querySelectorAll('.stat-num');
    
    nums.forEach(num => {
      const target = parseFloat(num.getAttribute('data-target'));
      const suffix = num.getAttribute('data-suffix') || '';
      
      const obj = { value: 0 };
      gsap.to(obj, {
        value: target,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: num,
          start: "top 85%",
        },
        onUpdate: () => {
          num.innerText = Math.floor(obj.value) + suffix;
        }
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="stats-overlay">
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-num" data-target="50" data-suffix="%">0%</div>
          <div className="stat-lbl">Del transporte en Pasto es en moto</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-num" data-target="20" data-suffix="">0</div>
          <div className="stat-lbl">Niveles de gamificación</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-num" data-target="7" data-suffix="+">0</div>
          <div className="stat-lbl">Logros desbloqueables</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;


