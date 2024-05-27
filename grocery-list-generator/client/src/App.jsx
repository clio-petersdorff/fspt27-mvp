import { useEffect, useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'

import './App.css'
import Library from './components/Library.jsx'
import CreateRecipe from './components/CreateRecipe.jsx'
import Schedule from './components/Schedule.jsx'


export default function App() {
  
  const [recipeList, setRecipeList] = useState([])
  const [recipeSchedule, setRecipeSchedule] = useState([])

  useEffect(() => {
    getRecipes();
  }, []);
  
  async function getRecipes(){
    try {
      const response = await fetch('/api/library', { method: "GET" })
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

  async function addNewRecipe(input){
    try{
      const response = await fetch('/api/library', { 
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    })
    if (response.ok){
      const data = await response.json()
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

  async function deleteRecipe(ID){
    try {
      const response = await fetch(`/api/library/${ID}`, { method: "DELETE" })
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

  async function addMeal(ID){
    // get recipe from library
    try {
      console.log("meal added to schedule")
      const response = await fetch(`/api/library/${ID}`, { method: "GET" })
      console.log(response.ok)
      if (response.ok){ 
        const data = await response.json()
        
        // post recipe to schedule
        try{
          const response = await fetch('/api/schedule', { 
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        if (response.ok){
          const data = await response.json()
          setRecipeSchedule(data)
        }else{
          console.log(`Server Error: ${response.status}, ${response.statusText}`)
          const errorData = await response.json()
          console.log(errorData.error)
        }
        }catch(e){
          console.log(`Network Error: ${e.message}`)
        }

      } else {
        console.log(`Server Error: ${response.status}, ${response.statusText}`)
        const errorData = await response.json()
        console.log(errorData.error)
      }

    } catch (e){
      console.log(`Network Error: ${e.message}`)
    }

  }

  async function deleteFromSchedule(ID){
    try {
      const response = await fetch(`/api/schedule/${ID}`, { method: "DELETE" })
      console.log(response.ok)
      if (response.ok){ 
        const data = await response.json()
        // console.log(data)
        setRecipeSchedule(data)
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
      <nav>
        <ul>
          <li>
            <Link to="/library">My Recipes</Link>
          </li>
          <li>
            <Link to="/new-recipe">Create new recipe</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul>
      </nav>
      <h1>Grocery planner</h1>
      <Routes>
        <Route path = "/schedule" element = {<Schedule data = {recipeSchedule}
                                                        deleteFromScheduleCb = {deleteFromSchedule}/>}/>
        <Route path = "/library" element = {<Library  data = {recipeList} 
                                                      deleteRecipeCb = {deleteRecipe}
                                                      addMealCb = {addMeal}/>}/>
        <Route path = "/new-recipe" element = {<CreateRecipe addRecipeCb = {addNewRecipe}/>}/>
      </Routes>

    </div>
  )
}

