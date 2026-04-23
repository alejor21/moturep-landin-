import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how" id="how">
      <span className="sec-label" style={{display:'block', textAlign:'center'}}>Proceso</span>
      <h2 className="sec-title" style={{textAlign:'center', marginBottom:0}}>3 PASOS PARA EMPEZAR</h2>
      <div className="steps">
        <div className="step">
          <div className="step-num">01</div>
          <div className="step-title">Descarga el APK</div>
          <p className="step-body">Gratis. Sin suscripción.</p>
        </div>
        <div className="step">
          <div className="step-num">02</div>
          <div className="step-title">Crea tu Perfil</div>
          <p className="step-body">Registra tu moto, placa y contactos.</p>
        </div>
        <div className="step">
          <div className="step-num">03</div>
          <div className="step-title">Maneja Seguro</div>
          <p className="step-body">Activa la geo y gana puntos.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


