import React from 'react';

const Features = () => {
  return (
    <section className="features" id="features">
      <span className="sec-label">Funcionalidades</span>
      <h2 className="sec-title">TODO LO QUE NECESITAS</h2>
      <div className="bento">
        <div className="card">
          <div className="card-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div className="card-title">Geolocalización en Tiempo Real</div>
          <p className="card-body">Actualización cada 2 segundos. Comparte tu ubicación y recibe alertas automáticas al llegar a tu destino.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/><path d="M4 22h16"/></svg>
          </div>
          <div className="card-title">Gamificación Vial</div>
          <p className="card-body">Sube de Novato a Leyenda del Asfalto. Gana puntos por conducción responsable.</p>
        </div>
        <div className="bento-bottom">
          <div className="card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="card-title">Alertas Pico y Placa</div>
            <p className="card-body">Recordatorio 30 minutos antes. Nunca más te sorprende.</p>
          </div>
          <div className="card" id="community">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <div className="card-title">Comunidad</div>
            <p className="card-body">Organiza rodadas y descubre rutas validadas por la comunidad.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <div className="card-title">Botón SOS</div>
            <p className="card-body">Acceso inmediato a emergencias desde cualquier pantalla.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


