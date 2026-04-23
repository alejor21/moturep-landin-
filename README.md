# Moturep — Movilidad Segura y Conectada 🏍️

![Moturep Hero](/public/uploads/fondo.jpeg)

**Moturep** es la primera plataforma tecnológica diseñada específicamente para la comunidad de motociclistas en Pasto, Nariño. Esta landing page representa una experiencia digital de alto rendimiento, centrada en la seguridad vial, la geolocalización en tiempo real y la cohesión de la comunidad motera.

## ✨ Características Principales

- **Experiencia de Scroll Inmersiva**: Implementación de un efecto de scroll avanzado que sincroniza una secuencia de video de alta fidelidad con el desplazamiento del usuario para resaltar la página.
- **Rendimiento de Grado A**: Optimización de carga asíncrona de frames para garantizar 60 FPS constantes, eliminando el stuttering típico de videos pesados en web.
- **Interfaz Premium**: Diseño visual de vanguardia con estética de "Cristal Líquido", tipografías modernas (Bebas Neue, Inter) y micro-animaciones fluidas.
- **Arquitectura React**: Construido con componentes modulares y escalables para una fácil evolución del producto.
- **SEO & Accesibilidad**: Estructura semántica optimizada para motores de búsqueda y compatible con estándares modernos.

## 🚀 Tecnologías Utilizadas

- **Core**: [React.js](https://reactjs.org/) & [Vite](https://vitejs.dev/)
- **Animaciones**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger)
- **Scroll Suave**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Renderizado**: HTML5 Canvas para secuencias de video GPU-accelerated.
- **Estilos**: Vanilla CSS con arquitectura de variables personalizadas.

## 🛠️ Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/alejor21/moturep-landin-.git
   ```

2. **Instalar dependencias**:
   ```bash
   cd moturep-landin-
   npm install
   ```

3. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

4. **Construir para producción**:
   ```bash
   npm run build
   ```

## 📐 Detalles Técnicos
El sitio utiliza una técnica avanzada de renderizado de frames en un elemento `<canvas>` para lograr una fluidez total. En lugar de reproducir un archivo de video tradicional, se cargan frames optimizados que se dibujan dinámicamente según la posición del scroll, permitiendo una interacción inmediata y sin tiempos de carga durante el desplazamiento.


## 📍 Localización
Proyecto desarrollado para la ciudad de **Pasto, Nariño, Colombia**, con el objetivo de mejorar la cultura vial y la seguridad de los motociclistas locales.

---

Desarrollado con ❤️ por la comunidad de Moturep.
