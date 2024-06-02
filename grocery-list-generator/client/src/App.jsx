import { useEffect, useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'

import './App.css'
import Library from './components/Library.jsx'
import CreateRecipe from './components/CreateRecipe.jsx'
import Schedule from './components/Schedule.jsx'
import SingleRecipe from './components/SingleRecipe.jsx'
import GroceryList from './components/GroceryList.jsx'


export default function App() {
  
  const [recipeList, setRecipeList] = useState([])

  useEffect(() => {
    getRecipes();
  }, []);
  
  // Get recipes from recipe library
  async function getRecipes(){
    try {
      const response = await fetch('/api/Recipes', { method: "GET" })
      // console.log(response.ok)
      if (response.ok){ 
        const data = await response.json()
        // console.log(data)
        setRecipeList(data)
      } else {
        console.log(`Server Error: ${response.status}, ${response.statusText}`)
        const errorData = await response.json()
        console.log(errorData.error)
      }
    } catch (e){
      console.log(`Network Error: ${e.message}`)
    }
  }

  // Add new recipe (from form) to recipe library
  async function addNewRecipe(input){
    try{
      const response = await fetch('/api/Recipes', { 
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    })
    if (response.ok){
      const data = await response.json()
      console.log(data)
      setRecipeList(data)
    }else{
      console.log(`Server Error: ${response.status}, ${response.statusText}`)
      const errorData = await response.json()
      console.log(errorData.error)
    }
    }catch(e){
      console.log(`Network Error: ${e.message}`)
    }
    // try{
    //   const response = await fetch('/api/Ingredients', { 
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(ingredientInput)
    //   })
    // }catch(e){
    //   console.log(`Network Error: ${e.message}`)
    // }
  }

  // Delete recipe from recipe library
  async function deleteRecipe(ID){
    try {
      const response = await fetch(`/api/Recipes/${ID}`, { method: "DELETE" })
      console.log(response.ok)
      if (response.ok){ 
        const data = await response.json()
        // console.log(data)
        setRecipeList(data)
      } else {
        console.log(`Server Error: ${response.status}, ${response.statusText}`)
        const errorData = await response.json()
        console.log(errorData.error)
      }
    } catch (e){
      console.log(`Network Error: ${e.message}`)
    }
  }
  
  // Add meal to schedule
  async function addMeal(ID) {
    try {
      const response = await fetch(`/api/Recipes/${ID}`, { method: "PUT" })
      console.log(response.ok)
      if (response.ok){ 
        const data = await response.json()
        setRecipeList(data)
      } else {
        console.log(`Server Error: ${response.status}, ${response.statusText}`)
        const errorData = await response.json()
        console.log(errorData.error)
      }
    } catch (e){
      console.log(`Network Error: ${e.message}`)
    }
  }

  // Delete meal from schedule
  async function deleteFromSchedule(ID) {
    try {
      const response = await fetch(`/api/Recipes/${ID}`, { method: "PUT" })
      console.log(response.ok)
      if (response.ok){ 
        const data = await response.json()
        // console.log('Response Data:', data); // Log the response data
        setRecipeList(data)
        console.log('Recipe List State:', recipeList); // Log the state before rendering

      } else {
        console.log(`Server Error: ${response.status}, ${response.statusText}`)
        const errorData = await response.json()
        console.log(errorData.error)
      }
    } catch (e){
      console.log(`Network Error: ${e.message}`)
    }
  }


  
  return (
    <div>
      {/* Nav Bar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className = "container-fluid">
          <a className="navbar-brand" href="#">Grocery Planner</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className = "collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className = "nav-item">
              <Link to="/">My Recipes</Link>
            </li>
            <li className = "nav-item">
              <Link to="/schedule">Schedule</Link>
            </li>
            <li className = "nav-item">
              <Link to="/new-recipe">Create new recipe</Link>
            </li>
            <li className = "nav-item">
              <Link to="/single-recipe">Single Recipe</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <Routes>
        <Route path = "/" element = {<Library  data = {recipeList} 
                                              deleteRecipeCb = {deleteRecipe}
                                              addMealCb = {addMeal}
                                              deleteFromScheduleCb = {deleteFromSchedule}/>}/>
        <Route path = "/schedule" element = {<Schedule recipeList = {recipeList}
                                                        deleteFromScheduleCb = {deleteFromSchedule}/>}/>

        <Route path = "/new-recipe" element = {<CreateRecipe addRecipeCb = {addNewRecipe}/>}/>
        <Route path = "/single-recipe" element = {<SingleRecipe/>}/>
        <Route path = "/grocery-list" element = {<GroceryList data = {recipeList}/>}/>
      </Routes>


      {/* <h1>Grocery planner</h1> */}

    </div>
  )
}

