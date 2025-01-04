import React, { useState } from 'react'
import '../Inspo-section/Inspo-section.css'

// Importar imagenes
import Foto1 from '../assets/popular1.png';
import Foto2 from '../assets/popular2.png';
import Foto3 from '../assets/popular3.png';
import Foto4 from '../assets/popular4.png';

const Inspo = () => {
  const [searchTerm, setSearchTerm] = useState('') // almacena el texto que se escribe en el input
  const [searchResults, setSearchResults] = useState([]) // almacena los resultados de la búsqueda
  const [isLoading, setIsLoading] = useState(false) // cuando este en estado de carga/loading
  const [error, setError] = useState(null)

  const images = [
    { src: Foto1, titulo: 'Spicy Vermicelli Noodles Salad', descripcion: 'Is a refreshing dish featuring soft rice noodles tossed in a zesty dressing, packed with fresh vegetables, aromatic herbs, and a hint of heat.' },
    { src: Foto2, titulo: 'Classic Italian Beef Maltagliati', descripcion: 'Is a hearty and comforting dish made with hand-cut, irregular pasta and tender beef simmered in a rich tomato-based sauce.' },
    { src: Foto3, titulo: 'Sour & Spicy Korean Kimchi', descripcion: 'Kimchi is a traditional fermented dish made with napa cabbage and radishes, seasoned with bold flavors of garlic, ginger, chili flakes, and fish sauce.' },
    { src: Foto4, titulo: 'Bibimpab Mixed Rice & Vegetables', descripcion: 'Is a vibrant Korean dish featuring steamed rice topped with an array of colorful vegetables, a fried egg, and savory gochujang sauce.'},
  ]

  const searchRecipes = async (term) => {
    if (!term.trim()) {
      setSearchResults([])
      return
    }

    setIsLoading(true)
    setError(null)

    try {

      //petición a la API
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      const data = await response.json()

      //guarda los resultados
      setSearchResults(data.meals || [])
      }catch (err) {
        setError('Error searching for recipes')
        setSearchResults([])
      } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (e) => { 
    const value = e.target.value // obtiene el texto escrito en el input
    setSearchTerm(value) // almacena el texto en el Estado
    searchRecipes(value) // ejecuta busqueda con nuevo término, realiza el pedido a la API
  }

  return (
    <div className="gallery-container" id='search'>
      <h2>This Week's Popular <span className='span'>Recipes</span></h2>
      <div className="gallery">
        
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <div className='card-estilo'>
              <h3>{image.titulo}</h3>
              <img src={image.src} alt={`Foto ${index + 1}`} />
            </div>

            <div className="gallery-description">
              <p className='parrafo'>{image.descripcion}</p>

              {/* Animación estrellas */}
              <div className="rating">
                <input value="5" name="rating" id="star5" type="radio"/>
                <label for="star5"></label>
                <input value="4" name="rating" id="star4" type="radio"/>
                <label for="star4"></label>
                <input value="3" name="rating" id="star3" type="radio"/>
                <label for="star3"></label>
                <input value="2" name="rating" id="star2" type="radio"/>
                <label for="star2"></label>
                <input value="1" name="rating" id="star1" type="radio"/>
                <label for="star1"></label>
              </div>

              {/* Botón ver receta completa */}
              <button className="read-more-btn">See Complete Recipe</button>

            </div>

          </div>
        ))}
      </div>

      { /*Agrego un buscador con API de recetas*/ }
      <div className="search-container">
        
        <h2>Discover <span className='span'>Culinary</span> Delights</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="🔎 Search recipe or ingredient..."
          className="search-input"
        />
        
        {isLoading && <p>Looking for recipes...</p>}
        {error && <p className="error-message">{error}</p>}
        
        <div className="search-results">
          {searchResults.length === 0 && searchTerm && !isLoading ? (
            // Si no se encuentra la receta sale esto:
            <p>No recipes found</p>
          ) : (
            <div className="gallery">
              { /* Si encuentra la receta/ingrediente sale esto: */ }
              {searchResults.map((meal) => (
                <div className="gallery-item" key={meal.idMeal}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <div className="gallery-description">
                    <h4>{meal.strMeal}</h4>
                    <button className="read-more-btn">See Recipe</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Inspo
