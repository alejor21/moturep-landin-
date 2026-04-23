import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const apkPath = '/apk/app-release.apk';
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
      <a className="nav-cta" href={apkPath} download>Descargar APK</a>
    </nav>
  );
};

export default Navbar;
