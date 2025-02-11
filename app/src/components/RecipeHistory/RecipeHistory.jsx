import React from 'react';
import './RecipeHistory.css'

const History = ({ recipes, onDeleteRecipe }) => {
  return (
    <div className='contenedora-history'id='history'>
        <h2 className='title'>Recipe History</h2>

      <div className="recipe-section">
  
        {recipes.length === 0 ? (
          <p className="no-recipes">It looks like there are no recipes yet. Add a new one!</p>
        ) : (
          recipes.map((recipe, index) => (

            <div className="recipe-card" key={index}>
                <div className="recipe-main-info">
                  <h3 className="recipe-title">{recipe.name}</h3>
                  <p>{recipe.description}</p>
                </div>

                <div className="recipe-text info">

                    <div className="recipe-text-left">
                      <strong>Prep time:</strong>
                      <p>{recipe.prepTime} Min.</p>
                    </div>

                    <div className="recipe-text-right">
                      <strong>Ingredients:</strong>
                      <ol>
                        {recipe.ingredients.map((ingredient, idx) => (
                          <li key={idx}>{ingredient}</li>
                        ))}
                      </ol>
                    </div>
              </div>

              <div className="recipe-main-info info">
                <strong>Steps:</strong>
                <ol className="pasos">
                  {recipe.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="delete-btn">
                <button onClick={() => onDeleteRecipe(index)}> Delete recipe</button>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;

