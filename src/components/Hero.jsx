import React from 'react';

const Hero = () => {
  const apkPath = '/apk/app-release.apk';

  return (
    <section className="hero">
      <img src="/uploads/fondo.jpeg" alt="" className="hero-bg" />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-eyebrow">Pasto, Nariño · 2025</span>
        <h1 className="hero-h1">
          CONDUCE<br />
          SEGURO Y<br />
          <em>CONECTADO.</em>
        </h1>
        <p className="hero-tagline">La primera app para motociclistas de Pasto. Geolocalización, comunidad y seguridad vial en tu bolsillo.</p>
        <div className="hero-actions">
          <a href={apkPath} className="btn-red" download>DESCARGAR APK</a>
          <a href="#features" className="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4m0 4h.01" />
            </svg>
            Ver funcionalidades
          </a>
        </div>
        <div className="social-row">
          <span>Síguenos</span>
          <a href="https://x.com/alejorzz?s=21" aria-label="X" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.264 5.633L18.244 2.25z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/alejor0?igsh=MTVsYzR6bmhrMnhkbw%3D%3D&utm_source=qr" aria-label="Instagram" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.facebook.com/share/1HpD1HtZzw/?mibextid=wwXIfr" aria-label="Facebook" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


