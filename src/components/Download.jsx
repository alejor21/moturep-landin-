import React from 'react';

const Download = () => {
  return (
    <section className="download" id="download">
      <img src="/uploads/fondo.jpeg" alt="" className="dl-bg" />
      <div className="dl-glow"></div>
      <div className="dl-left">
        <h2 className="dl-title">DESCARGA<br />MOTUREP<br />HOY</h2>
        <p className="dl-sub">Gratis, seguro y diseñado para las calles de Nariño.</p>
      </div>
      <div className="dl-right">
        <a href="#" className="store-btn">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
          <div className="store-btn-text">
            <div className="store-btn-small">Descarga el</div>
            <div className="store-btn-big">APK Directo</div>
          </div>
        </a>
        <a href="#" className="store-btn coming">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" opacity="0.5"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
          <div className="store-btn-text">
            <div className="store-btn-small">Próximamente en</div>
            <div className="store-btn-big">Google Play</div>
          </div>
          <span className="badge-soon">Pronto</span>
        </a>
      </div>
    </section>
  );
};

export default Download;


