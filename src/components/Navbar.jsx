import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <a className="logo" href="#">
        <span className="logo-dot"></span>
        MOTUREP
      </a>
      <ul className="nav-links">
        <li><a href="#features">Funcionalidades</a></li>
        <li><a href="#how">Cómo funciona</a></li>
        <li><a href="#ranks">Rangos</a></li>
        <li><a href="#download">Descargar</a></li>
      </ul>
      <button className="nav-cta">Descargar APK</button>
    </nav>
  );
};

export default Navbar;
