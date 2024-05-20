import { useEffect, useState } from 'react'

import './App.css'
import Library from './components/Library.jsx'
import CreateRecipe from './components/CreateRecipe.jsx'
import Schedule from './components/Schedule.jsx'


export default function App() {
  
  const [nav, setNav] = useState('')
  const [recipeList, setRecipeList] = useState([])

  useEffect(() => {
    getRecipes();
  }, []);
  
  async function getRecipes(){
    try {
      const response = await fetch('/api/library', { method: "GET" })
      console.log(response.ok)
      if (response.ok){ 
        const data = await response.json()
        console.log(data)
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
  
  return (
    <div>
        <div className = 'nav-bar'>
          <button onClick={()=>setNav('library')}>Recipe Library</button>
          <button onClick={()=>setNav('create_new')}>New recipe</button>
          <button onClick ={()=>setNav('schedule')}>Schedule meals</button>
        </div>

        <h1>Grocery planner</h1>

        {nav === 'library' && < Library data = {recipeList}/>}
        {nav === 'create_new' && <CreateRecipe addRecipeCb = {addNewRecipe}/>}
        {nav === 'schedule' && <Schedule/>}

    </div>
  )
}

