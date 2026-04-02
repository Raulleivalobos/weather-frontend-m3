# 🌤️ ClimaCL - App de Pronóstico del Tiempo

> Aplicación web responsiva para consultar el clima actual y el pronóstico semanal de las principales ciudades de Chile. Proyecto desarrollado para el Módulo 3 del Bootcamp.

## 🚀 Características y Temática
La aplicación muestra un listado de 10 localidades de Chile (como Santiago, Valparaíso, Punta Arenas, etc.) utilizando tarjetas informativas. Al seleccionar una localidad, se despliega una vista de detalle con información ampliada como humedad, viento y pronóstico extendido.

## 🛠️ Tecnologías y Metodologías Aplicadas

* **HTML5 & JavaScript (ES6):** Estructura y lógica de renderizado dinámico del DOM.
* **Bootstrap 5:** Utilizado para el sistema de grillas responsivo (`col-12`, `col-md-6`, `col-lg-4`) y componentes base (Navbar, botones).
* **SASS (SCSS):** Preprocesador CSS utilizado para modularizar los estilos.
* **Metodología BEM:** Arquitectura de nombres de clases (Block, Element, Modifier) aplicada estrictamente (ej. `.place-card`, `.place-card__image`, `.detail-view__temp`) para garantizar un código CSS escalable y mantenible.

## 📁 Estructura SASS (Patrón 7-1 simplificado)
El proyecto compila un único archivo `styles.css` a partir de la siguiente estructura modular de parciales:
* `/base`: Contiene `_variables.scss` (paleta de colores, tipografía) y `_mixins.scss` (efectos de hover reutilizables).
* `/components`: Aísla los bloques BEM específicos como `_place-card.scss` y `_detail-view.scss`.
* `/layout`: Estilos estructurales para el `_header.scss` y `_footer.scss`.
* `main.scss`: Archivo centralizador que importa todos los parciales.

## 🔗 Enlace al Repositorio
[Inserta aquí el enlace a tu repositorio público de GitHub]