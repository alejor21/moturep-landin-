import React from 'react';

const whatsappUrl = 'https://wa.me/573162578851?text=Hola%2C%20quiero%20solicitar%20la%20versi%C3%B3n%20de%20prueba%20de%20Moturep';

const Download = () => {
  return (
    <section className="download" id="download">
      <img src="/uploads/fondo.jpeg" alt="" className="dl-bg" />
      <div className="dl-glow"></div>
      <div className="dl-left">
        <h2 className="dl-title">SOLICITA TU<br />VERSIÓN<br />DE PRUEBA</h2>
        <p className="dl-sub">Gratis, seguro y diseñado para las calles de Nariño.</p>
      </div>
      <div className="dl-right">
        <a href={whatsappUrl} className="store-btn" target="_blank" rel="noreferrer">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.522 5.847L0 24l6.324-1.501A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.366l-.36-.213-3.727.884.916-3.618-.235-.372A9.818 9.818 0 1112 21.818z"/></svg>
          <div className="store-btn-text">
            <div className="store-btn-small">Escríbenos por</div>
            <div className="store-btn-big">WhatsApp</div>
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


