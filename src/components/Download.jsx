import React, { useState } from 'react';

const Download = () => {
  const apkPath = '/apk/app-release.apk';
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const betaStorageKey = 'moturep_beta_interest_emails';

  const handleBetaSubmit = (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      setFeedback({ type: 'error', message: 'Ingresa un correo valido para solicitar acceso.' });
      return;
    }

    try {
      const existingValue = localStorage.getItem(betaStorageKey);
      const existingEntries = existingValue ? JSON.parse(existingValue) : [];
      const alreadyExists = existingEntries.some((entry) => {
        if (typeof entry === 'string') {
          return entry === normalizedEmail;
        }

        return entry?.email === normalizedEmail;
      });

      if (alreadyExists) {
        setFeedback({ type: 'info', message: 'Este correo ya fue registrado para la beta cerrada.' });
        return;
      }

      const nextEntries = [
        ...existingEntries,
        {
          email: normalizedEmail,
          createdAt: new Date().toISOString(),
        },
      ];

      localStorage.setItem(betaStorageKey, JSON.stringify(nextEntries));
      setFeedback({ type: 'success', message: 'Registro enviado. Te contactaremos para validar acceso.' });
      setEmail('');
    } catch {
      setFeedback({ type: 'error', message: 'No se pudo guardar el correo en este dispositivo.' });
    }
  };

  return (
    <section className="download" id="download">
      <img src="/uploads/fondo.jpeg" alt="" className="dl-bg" />
      <div className="dl-glow"></div>
      <div className="dl-left">
        <h2 className="dl-title">DESCARGA<br />MOTUREP<br />HOY</h2>
        <p className="dl-sub">Gratis, seguro y diseñado para las calles de Nariño.</p>
      </div>
      <div className="dl-right">
        <a href={apkPath} className="store-btn" download>
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
        <div className="beta-signup">
          <p className="beta-caption">Si quieres ayudarnos a verificar la app en Google Play, deja tu correo para darte acceso a la beta cerrada.</p>
          <form className="beta-form" onSubmit={handleBetaSubmit}>
            <input
              id="beta-email"
              className="beta-input"
              type="email"
              placeholder="tu-correo@ejemplo.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
            />
            <button type="submit" className="beta-submit">Enviar</button>
          </form>
          {feedback.message ? (
            <p className={`beta-feedback ${feedback.type}`}>{feedback.message}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Download;


