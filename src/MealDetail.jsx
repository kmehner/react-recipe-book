import React from 'react'
import "./MealDetail.css"
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

function getIngredients(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(`${measure} ${ingredient}`.trim());
    }
  }

  return ingredients;
} 

const MealDetail = ({ meal, saved, savedIds }) => {
  if (!meal) return null; 
  const ingredients = getIngredients(meal);

  return (
    <div className='meal-detail-card'>
      <h2>{meal.strMeal}</h2>
      <button 
        onClick={() => console.log('Save meal functionality not implemented yet')} 
        style={{ 
          background: 'none', 
          border: 'none', 
          fontSize: '1.5rem', 
          cursor: 'pointer',
          float: 'right',
          marginTop: '-2.5rem'
        }}
        title="Save Recipe"
      >
        {/* Filled bookmark if saved includes meal, unfilled bookmark otherwise */}
        {savedIds.includes(meal.idMeal) ? (
          <FaBookmark style={{ color: 'black' }} />
        ) : (
          <FaRegBookmark style={{ color: 'black' }} />
        )}
      </button>
      <p className='meal-category'>Category: {meal.strCategory}</p>
      <img src={meal.strMealThumb} alt={meal.strMeal} className='meal-image' />

      <h3>Ingredients:</h3>
      <ul className='meal-ingredients'>
        {ingredients.map((ingredient, index) => (
          <li key={index} className='ingredient-item'>{ingredient}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <p className='meal-instructions'>{meal.strInstructions}</p>

    </div>
  )
}

export default MealDetail