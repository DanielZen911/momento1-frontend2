# Sa-zón Digital — Catálogo de Productos (Momento 1)

Aplicación web desarrollada en **React + Vite** para la gestión y visualización del catálogo digital de productos de **Sa-zón**[cite: 1, 14]. Este entregable traslada el diseño estático a una arquitectura modular de componentes reutilizables, manejo de estados locales y consumo asíncrono de datos estáticos.

---

## Historia de Usuario Implementada

* **Desarrollador:** Daniel Acevedo Yepes (Estudiante 2)
* **Modelo asignado:** Maestro de Categorías de Productos
* **Historia de Usuario 2.1:** Visualización del listado de categorías
* **Rama de desarrollo:** `feature/catalogo/G1-CAT-F01-listado`

### Criterios de Aceptación Cumplidos
1. **Consumo asíncrono:** Obtención de categorías mediante el servicio `productoServicio.listarCategorias()` simulando latencia asíncrona con datos estáticos.
2. **Estructura HTML semántica:** Uso de contenedores semánticos (`<section>`, `<ul>`, `<li>`) y tarjetas identificadas con el prefijo `.catalogo-categoria-card`.
3. **Soporte UTF-8:** Codificación estricta en `index.html` y scripts para soportar caracteres especiales del español (tildes y eñes como *Cárnicos*, *Café*, *Aliños*).
4. **Diseño adaptable (Responsive):** Distribución en cuadrícula adaptable a escritorio, tablet y dispositivos móviles mediante CSS Grid y Media Queries, aplicando las variables del **Kit de Marca Sa-zón**[cite: 1, 14].

---

## Estructura del Proyecto

```text
src/
├── assets/                  # Recursos gráficos del proyecto
├── components/
│   └── catalogo/
│       ├── CategoriaCard.jsx       # Tarjeta individual (.catalogo-categoria-card)
│       ├── CategoriaCard.css       # Estilos aislados (CSS Component)
│       ├── ListaCategorias.jsx     # Listado con estados locales (useState, useEffect)
│       └── ListaCategorias.css     # Estilos del grid responsive
├── services/
│   └── productoServicio.js         # Servicio asíncrono con datos estáticos de categorías[cite: 1]
├── styles/
│   └── variables.css               # Variables corporativas (Kit de marca Sa-zón)[cite: 1, 14]
├── views/
│   └── CatalogoView.jsx            # Vista principal del módulo de catálogo
├── App.jsx
└── main.jsx