# Tastes 🍳

Aplicación web de recetas internacionales clasificadas por tipo de clima. Proyecto frontend puro desarrollado como trabajo práctico.

---

## Estructura de archivos

```
SaborCerca/
├── index.html        → Única página HTML (login + app en la misma vista)
├── README.md         → Este archivo
├── css/
│   └── styles.css    → Todos los estilos (tokens, componentes, responsive)
└── js/
    ├── data.js       → Datos simulados: 50 recetas y 2 usuarios de prueba
    └── app.js        → Toda la lógica de la aplicación
```

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 / CSS3 / JavaScript ES6 | Base del proyecto |
| Bootstrap 5.3 (solo CSS) | Grid y utilidades (`d-none`, `row`, `g-3`, etc.) |
| Bootstrap Icons 1.11 | Íconos |
| Google Fonts | Playfair Display (títulos) + Nunito (cuerpo) |
| localStorage | Sesión y favoritos persistentes entre recargas |

> No hay backend, base de datos, Node.js ni frameworks JS.

---

## Cómo usar

Abrir `index.html` directamente en el navegador. No requiere servidor.

**Credenciales de prueba:**

| Email | Contraseña |
|---|---|
| ana@gmail.com | demo123 |
| carlos@gmail.com | admin123 |

---

## Funcionalidades

### Login
- Validación de formato Gmail (`@gmail.com`) por campo, solo al intentar ingresar
- Validación de contraseña mínima de 6 caracteres
- Spinner de carga simulado (900 ms)
- Botón para mostrar / ocultar contraseña
- Sesión guardada en `localStorage` — al recargar la página se mantiene logueado

### Grilla de recetas
- 50 recetas internacionales con foto, ingredientes y preparación
- **Filtro por clima** (chips): Todas / ❄️ Frío / ☀️ Cálido / 🌤️ Templado / 🏜️ Árido / 🌧️ Húmedo
- **Filtro por tiempo**: hasta 15 / 30 / 45 / 60 minutos
- **Buscador** por nombre en tiempo real
- Todos los filtros se combinan entre sí
- Estado vacío con botón para limpiar filtros
- Spinner de carga simulado entre cambios de filtro

### Detalle de receta
- Click en cualquier tarjeta → se oculta la grilla y aparece la vista de detalle (misma página, sin modal)
- Muestra: foto del plato, clima + país de origen, tiempo, porciones, dificultad, descripción, ingredientes y pasos de preparación
- Botón **Volver a recetas** para regresar a la grilla
- El logo "Tastes" en el navbar también funciona como botón de volver desde el detalle

### Favoritos
- Corazón en cada tarjeta (en la grilla) y botón en la vista de detalle
- Los favoritos se guardan en `localStorage` y persisten al recargar
- Filtro **Mis favoritos** en el navbar para ver solo las recetas guardadas
- Quitar un favorito desde "Mis favoritos" lo elimina de la lista en tiempo real

### Logout
- Borra la sesión de `localStorage` y redirige al login
- Resetea todos los filtros y búsqueda

---

## Recetas por clima

| Clima | Ejemplos |
|---|---|
| ❄️ Frío (10) | Borscht, Ramen Tonkotsu, Fondue de queso, Goulash, Cassoulet |
| ☀️ Cálido (10) | Ceviche peruano, Som Tam, Jerk Chicken, Mango Sticky Rice, Poke Bowl |
| 🌤️ Templado (10) | Paella Valenciana, Moussaka, Shakshuka, Risotto ai Funghi, Ratatouille |
| 🏜️ Árido (10) | Biryani de cordero, Mandi, Harira, Kibbeh horneado, Ful Medames |
| 🌧️ Húmedo (10) | Rendang de res, Adobo de pollo, Nasi Lemak, Sinigang, Injera con Wot |

---

## Estructura de una receta (`data.js`)

```javascript
{
  id:          1,
  nombre:      "Borscht",
  origen:      "Rusia / Ucrania",
  clima:       "frio",            // frio | calido | templado | arido | humedo
  tiempo:      75,                // minutos
  porciones:   6,
  dificultad:  "Media",           // Fácil | Media | Difícil
  emoji:       "🍲",
  imagen:      "https://...",     // URL directa, sin API key
  descripcion: "...",
  ingredientes: ["...", "..."],
  pasos:        ["...", "..."]
}
```

---

## Paleta de colores

| Variable CSS | Valor |
|---|---|
| `--crema` | `#FDF6EC` |
| `--verde-salvia` | `#A8C5A0` |
| `--rosa-durazno` | `#F2B5A0` |
| `--amarillo-manteca` | `#F5E6C8` |
| `--marron-cacao` | `#6B4C3B` |
| `--gris-lino` | `#D9CFC4` |
| `--blanco-leche` | `#FEFCF8` |
