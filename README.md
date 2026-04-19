# App de Clima - Módulo 4 (Lógica, Estadísticas y Seguridad)

## Descripción del Proyecto

Esta aplicación web interactiva muestra el pronóstico del clima actual y extendido para diversas localidades de Chile. En esta iteración (Módulo 4), el proyecto ha evolucionado de una maqueta estática a una aplicación dinámica robusta, centrada en el uso de **JavaScript moderno (ES6+)** y la manipulación segura del DOM.

## Enlaces

- **Repositorio:** https://github.com/Raulleivalobos/weather-frontend-m4

## Características Principales (Módulo 4)

### 1. Modelado de Datos Avanzado

Se utiliza un arreglo de objetos (`localidades`) que permite una gestión centralizada de la información. Cada ciudad cuenta con un sub-arreglo de pronóstico semanal, facilitando la escalabilidad y el procesamiento de datos complejos.

### 2. Lógica de Estadísticas con ES6

Se implementó una función modular que procesa la información climática mediante:

- **`flatMap`**: Para unificar temperaturas mínimas y máximas en un solo flujo de datos.
- **`Reduce`**: Para calcular promedios semanales y determinar el clima predominante a través de un diccionario de frecuencias.
- **Spread Operator (`...`)**: Para cálculos rápidos de valores extremos (Math.min/max).

### 3. Interfaz Dinámica e Iconografía Inteligente

La vista de detalle genera el pronóstico extendido en tiempo real. Se desarrolló una lógica de mapeo que asigna automáticamente iconos de **FontAwesome** y clases de color según el estado del clima (ej. Sol para "Despejado", Nubes para "Nublado"), manteniendo la coherencia visual en toda la app.

### 4. Seguridad y Prevención de XSS

Siguiendo los estándares de seguridad de 2026, se evitó el uso de `innerHTML` para la inserción de datos sensibles. En su lugar, se utiliza la creación de nodos mediante `document.createElement` y la propiedad `textContent`, asegurando que cualquier entrada de datos sea tratada como texto plano y no como código ejecutable.

## Tecnologías Utilizadas

- HTML5 Semántico
- CSS3 (BEM & SASS)
- Bootstrap 5
- JavaScript (ES6+, DOM Manipulation, XSS Protection)

---

**Desarrollado por:** Raúl Leiva Lobos
**Año:** 2026
