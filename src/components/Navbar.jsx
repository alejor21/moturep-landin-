import React, { useEffect, useRef, useState } from 'react';

const whatsappUrl = 'https://wa.me/573162578851?text=Hola%2C%20quiero%20solicitar%20la%20versi%C3%B3n%20de%20prueba%20de%20Moturep';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 24) {
        setIsHidden(false);
      } else if (delta > 6) {
        setIsHidden(true);
      } else if (delta < -6) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav className={isHidden ? 'nav-hidden' : ''}>
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
      <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar prueba</a>
    </nav>
  );
};

export default Navbar;
