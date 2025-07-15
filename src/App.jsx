import { useEffect, useState } from 'react'
import './App.css'
import MealDetail from './MealDetail'

// TODO list
// Add the save meal button to the detail component 
// Add a saved meals section
// Add a saved meals section to the app component 
// Function to save meals 

function App() {
  const [meals, setMeals] = useState([])
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [saved, setSaved] = useState([])

  // const handleSaveMeal = () => {
  //   console.log('Starting save meal functionality');
  //   if (isSaved) {
  //     saved = saved.filter(savedMeal => savedMeal.idMeal !== meal.idMeal);
  //     isSaved = false; // Update isSaved to false after removing
  //     console.log('Meal removed from saved meals');
  //   } else { 
  //     saved = [...saved, meal];
  //     isSaved = true; // Update isSaved to true after adding
  //     console.log('Meal added to saved meals');
  //     // saved.push(meal); // 
  //   }

  //   console.log('Current saved meals:', saved);
  //   console.log(isSaved)
  // }

    // toggle handler in parent
    // meal is passed down to MealDetail
    // in MealDetail, we call the handleSaveMeal function
    // and pass the meal to it


  const handleSaveMeal = meal => {
    // setSaved function (saved, setSaved) State hook
    // If meal is already saved, remove it from saved meals
    setSaved(prev =>
      prev.some(m => m.idMeal === meal.idMeal)
        ? prev.filter(m => m.idMeal !== meal.idMeal)
        : [...prev, meal]
    )

    // Some is a include method that works with objects 
  }

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
              </div>
            </li>
          ))}
        </ul>

      </div>

      <div className='meal-detail'>
        { selectedMeal ? (
          <>
            <MealDetail meal={selectedMeal} saved={saved} onToggleSave={handleSaveMeal}/>
          </>
        ) : (
          <p className='fallback-message'>Click a recipe to see details</p>
        ) }
      </div>

      <div className='saved-meals'>
        <h2>💾 Saved Recipes</h2>

      </div>

    </div>
  )
}

export default App
