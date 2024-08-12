import { useEffect, useState } from 'react'
import {Link, Route, Routes, useNavigate} from 'react-router-dom'

import './App.css'
import Library from './components/Library.jsx'
import CreateRecipe from './components/CreateRecipe.jsx'
import GroceryList from './components/GroceryList.jsx'


export default function App() {

  let navigate = useNavigate(); 
  
  const [recipeList, setRecipeList] = useState([])
  // const [groceryList, setGroceryList] = useState([])

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

// POST ingredients to groceryList based on recipe ids
  async function generateGroceryList(recipeList){
      
      // // Clear current list
      // deleteAllGroceryItems()

      // Get current selection of ids
      let selectedIDs = []
      recipeList.map(r => (r.selected?selectedIDs.push(r.id):null))
      console.log(selectedIDs)

      // re-populate grocery list table based on current selection of ids
      try {
      const response = await fetch('/api/Groceries', { 
          method: "POST" ,
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(selectedIDs)
      })
      if (response.ok){ 
        console.log("grocery list updated")
        navigate('/grocery-list')

        } else{
        console.log(`Server Error: ${response.status}, ${response.statusText}`)
        const errorData = await response.json()
        console.log(errorData.error)
      }
      } catch (e){
      console.log(`Network Error: ${e.message}`)
      }
  }

  // DELETE current grocery list
  async function deleteAllGroceryItems(){
    try {
        const response = await fetch('/api/Groceries', {  method: "DELETE" })
        // console.log(response.ok)
        if (response.ok){ 
            const data = await response.json()
            console.log("Grocery list cleared")
            setGroceries(data)

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
      <nav className="navbar navbar-expand-m bg-body-tertiary">
        <div className = "container-fluid">
          <a className="navbar-brand" href="#">Grocery Planner</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className = "collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className = "nav-item">
              <Link className="nav-link" to="/">My Recipes</Link>
            </li>
            {/* <li className = "nav-item">
              <Link to="/schedule">Schedule</Link>
            </li> */}
            <li className = "nav-item">
              <Link className="nav-link" to="/new-recipe">Create new recipe</Link>
            </li>
            {/* <li className = "nav-item">
              <Link className="nav-link" to="/single-recipe">Single Recipe</Link>
            </li> */}
            <li className = "nav-item">
              <Link className="nav-link" to="/grocery-list">My grocery list</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <Routes>
        <Route path = "/" element = {<Library  data = {recipeList} 
                                              deleteRecipeCb = {deleteRecipe}
                                              addMealCb = {addMeal}
                                              deleteFromScheduleCb = {deleteFromSchedule}
                                              deleteAllGroceryItemsCb = {deleteAllGroceryItems}
                                              generateGroceryListCb = {generateGroceryList}/>}/>

        <Route path = "/new-recipe" element = {<CreateRecipe addRecipeCb = {addNewRecipe}/>}/>
        <Route path = "/grocery-list" element = {<GroceryList deleteAllGroceryItemsCb = {deleteAllGroceryItems}/>}/>
      </Routes>


      {/* <h1>Grocery planner</h1> */}

    </div>
  )
}

