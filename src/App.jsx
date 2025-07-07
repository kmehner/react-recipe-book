import { useEffect, useState } from 'react'
import './App.css'
import MealDetail from './MealDetail'

function App() {
  const [meals, setMeals] = useState([])
  const [selectedMeal, setSelectedMeal] = useState(null)

  useEffect(() => {
    // fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
    //   .then((res) => res.json())
    //   .then((data) => setMeals(data.meals || []))

    const fetchMeals = async () => {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
        const data = await res.json()
        setMeals(data.meals || [])
        console.log("Meal data", data.meals)

      } catch (error) {
        console.error("Error fetching meals", error)
      }
    }

    fetchMeals();

  }, [])


  // Meal list 
  return (
    <div className='app-container'>
      <div className='meal-list'>
        <h2>🧑‍🍳 Recipes</h2>

        <ul>
          {meals.map(meal => (
            <li
              key={meal.idMeal}
              className='meal-item'
              onClick={() => setSelectedMeal(meal)}
            >
              <div>
                {meal.strMeal}
                {/* <MealDetail meal={meal}/> */}
              </div>
            </li>
          ))}
        </ul>

      </div>

      <div className='meal-detail'>
        { selectedMeal ? (
          <MealDetail meal={selectedMeal}/>
        ) : (
          <p className='fallback-message'>Click a recipe to see details</p>
        ) }

      </div>

    </div>
  )
}

export default App
