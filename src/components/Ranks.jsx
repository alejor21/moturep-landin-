import React from 'react';

const Ranks = () => {
  const ranksData = [
    { emoji: '🏍', name: 'Motero Novato', pts: '0 pts' },
    { emoji: '🔰', name: 'Aprendiz Vial', pts: '500 pts' },
    { emoji: '⚡', name: 'Rodador Urbano', pts: '1,000 pts', active: true },
    { emoji: '🛡️', name: 'Guardián Vial', pts: '2,500 pts' },
    { emoji: '🏆', name: 'Maestro del Asfalto', pts: '5,000 pts' },
    { emoji: '💎', name: 'Élite Motociclista', pts: '10,000 pts' },
    { emoji: '👑', name: 'Leyenda del Asfalto', pts: '20,000 pts' },
  ];

  return (
    <section className="ranks" id="ranks">
      <div className="ranks-hd">
        <h2 className="ranks-title">SUBE DE NIVEL</h2>
        <p className="ranks-sub">7 rangos que premian tu conducción responsable</p>
      </div>
      <div className="ranks-scroll">
        {ranksData.map((rank, index) => (
          <div key={index} className={`rank-card ${rank.active ? 'active' : ''}`}>
            <span className="rank-emoji">{rank.emoji}</span>
            <div className="rank-name">{rank.name}</div>
            <div className="rank-pts">{rank.pts}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ranks;


