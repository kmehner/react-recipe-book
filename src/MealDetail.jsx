import React from 'react'
import "./MealDetail.css"

const MealDetail = ({ meal }) => {

  if (!meal) return null; 

  return (
    <div className='meal-detail-card'>
      <h2>{meal.strMeal}</h2>
      <p className='meal-category'>Category: {meal.strCategory}</p>
      <img src={meal.strMealThumb} alt={meal.strMeal} className='meal-image' />

      <h3>Instructions:</h3>
      <p className='meal-instructions'>{meal.strInstructions}</p>

    </div>
  )
}

export default MealDetail