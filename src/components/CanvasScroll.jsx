import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CanvasScroll = ({ frameCount = 192, imagePath = '/frames/frame_' }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const currentFrame = (index) => 
    `${imagePath}${index.toString().padStart(4, '0')}.webp`;

  useEffect(() => {
    let isCancelled = false;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const images = [];
    imagesRef.current = images;

    // Phase 1: Load first 10 frames immediately
    // Phase 2: Load the rest in batches (Skill Rule 255-257)
    const loadFrames = async () => {
      const firstBatch = 10;
      const batchSize = 20;

      // First batch
      for (let i = 1; i <= Math.min(firstBatch, frameCount); i++) {
        await loadImage(i);
        if (i === 1) drawFrame(1);
      }

      // Remaining batches
      for (let i = firstBatch + 1; i <= frameCount; i += batchSize) {
        const promises = [];
        for (let j = i; j < i + batchSize && j <= frameCount; j++) {
          promises.push(loadImage(j));
        }
        await Promise.all(promises);
        setLoadProgress(Math.round((Math.min(i + batchSize, frameCount) / frameCount) * 100));
      }
      
      if (!isCancelled) {
        setIsLoaded(true);
        // Dispatch custom event for App.jsx to know we are ready
        window.dispatchEvent(new CustomEvent('frames-loaded'));
      }
    };

    const loadImage = (index) => {
      return new Promise((resolve) => {
        if (images[index]) return resolve();
        const img = new Image();
        img.src = currentFrame(index);
        img.onload = () => {
          images[index] = img;
          resolve();
        };
        img.onerror = resolve;
      });
    };

    const drawFrame = (index) => {
      if (!ctx || !images[index]) return;
      const img = images[index];
      
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Aumentamos el scale a 1.22 para ocultar totalmente la marca de agua "Veo"
      const IMAGE_SCALE = 1.22;

      const scale = Math.max(canvas.width / img.width, canvas.height / img.height) * IMAGE_SCALE;
      
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };


    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Initial draw or redraw current frame
      if (imagesRef.current.length > 0) {
         // We'll let the renderLoop handle the drawing to keep it in sync
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let targetFrame = 1;
    let currentFrameIndex = 1;

    const renderLoop = () => {
      if (isCancelled) return;
      
      const parent = containerRef.current?.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          const distance = rect.height - window.innerHeight;
          let progress = distance > 0 ? -rect.top / distance : 0;
          progress = Math.max(0, Math.min(1, progress));
          
          // El video ahora se reproduce durante todo el scroll de la sección (1.0)
          const adjustedProgress = Math.min(1, progress);
          targetFrame = Math.round(1 + adjustedProgress * (frameCount - 1));

        }

        if (targetFrame !== currentFrameIndex) {
           currentFrameIndex = targetFrame;
           drawFrame(currentFrameIndex);
        }
      }
      
      requestAnimationFrame(renderLoop);
    };

    loadFrames();
    renderLoop();

    return () => {
      isCancelled = true;
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [frameCount, imagePath]);

  return (
    <div ref={containerRef} className="canvas-wrap">
      {!isLoaded && (
        <div style={{ 
          position: 'fixed', inset: 0, zIndex: 1000, 
          background: '#0D0D14', display: 'flex', 
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center' 
        }}>
          <div className="text-huge" style={{ fontSize: '4rem', color: 'var(--purple)' }}>{loadProgress}%</div>
          <div style={{ fontSize: '12px', letterSpacing: '4px', marginTop: '20px', color: 'var(--muted)' }}>CARGANDO EXPERIENCIA</div>
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,20,0.4)', pointerEvents: 'none' }}></div>
    </div>
  );
};

export default CanvasScroll;

