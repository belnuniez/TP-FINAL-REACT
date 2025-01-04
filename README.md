Proyecto final de la UTN del módulo de Front End de la Diplomatura Full Stack Developer.

## 🥗 Descripción del Proyecto
"Recipe App" es una aplicación interactiva que facilita a los usuarios la creación de recetas personalizadas mediante una interfaz intuitiva. Las recetas creadas se pueden guardar en un historial para revisarlas más tarde.

## ✨ Características
- **Página Principal**: Introducción con un botón para "Crear receta".
- **Panel de Creación**: Selección de ingredientes, ajuste de cantidades, y visualización del puntaje nutricional.
- **Historial de Recetas**: Guarda y lista las recetas creadas, con almacenamiento en `localStorage`.

## 🛠️ Dependencias
- React
- CSS (para estilizado)
- Fetch API (para integración de datos)

## 🌐 API Utilizada
La aplicación realiza peticiones a la API de [TheMealDB](https://www.themealdb.com/), permitiendo buscar recetas basadas en términos de búsqueda.

## 🎨 Funcionalidades
- **Interfaz interactiva**: Manejo de estado y efectos secundarios con `useState` y `useEffect`.
- **Persistencia de datos**: Almacenamiento de recetas en `localStorage`.
- **Navegación interna**: Cambios de vistas gestionados mediante estados locales.

## 🏗️ Estructura de la Aplicación
- `App.jsx`: Componente raíz que maneja la vista actual y la lista de recetas guardadas.
- `Home.jsx`: Introducción y navegación.
- `CreateRecipe.jsx`: Creación de recetas y gestión de ingredientes.
- `RecipeHistory.jsx`: Visualización del historial de recetas.
