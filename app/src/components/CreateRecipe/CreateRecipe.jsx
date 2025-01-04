import React, { useState } from 'react';
import './CreateRecipe.css'

const Create = ({ onAddRecipe }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [prepTime, setPrepTime] = useState('');
  
    const isFormValid = () => {
      return name.trim() !== '' && 
             description.trim() !== '' && 
             ingredients.trim() !== '' && 
             steps.trim() !== '' && 
             prepTime.trim() !== '';
    };
  
    const submit = (e) => {
      e.preventDefault();
      if (!isFormValid()) {
        alert('Por favor, completa todos los campos');
        return;
      }
      const ingredientsArray = ingredients.split('\n').map(item => item.trim()).filter(Boolean);
      const stepsArray = steps.split('\n').map(item => item.trim()).filter(Boolean);
      const newRecipe = { 
        name, 
        description, 
        ingredients: ingredientsArray, 
        steps: stepsArray, 
        prepTime 
      };
      onAddRecipe(newRecipe);
      setName('');
      setDescription('');
      setIngredients('');
      setSteps('');
      setPrepTime('');
    };
  
    return (

      <>

      <div className='contenedora-create' id='create'>

        <h2><span className='span'>Create</span> Recipe</h2>

        <div className="form-wrapper">
          <div className="container">
            <div className="container2">
              <form className="form-box"> 
                <div className="form-content">
                  <div className="form-left">
                    <input
                      type="text"
                      placeholder="Recipe name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <textarea
                      placeholder="Brief description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                    <textarea
                      placeholder="Steps to follow"
                      value={steps}
                      onChange={(e) => setSteps(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="form-right">
                    <input
                      type="number"
                      placeholder="Preparation time"
                      value={prepTime}
                      onChange={(e) => setPrepTime(e.target.value)}
                      required
                    />
                    <textarea
                      placeholder="Write the ingredients one below the other"
                      value={ingredients}
                      onChange={(e) => setIngredients(e.target.value)}
                      required
                    />
                    
                  </div>
                  
                </div>
                <button 
                  type="button" 
                  className="submit-btn" 
                  onClick={submit}
                  disabled={!isFormValid()}
                >
                  Add Recipe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


      </>
    );
  };
  
  export default Create;
