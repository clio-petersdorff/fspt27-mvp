import { useEffect, useState } from 'react'
import { Link , Outlet} from "react-router-dom";

import './Schedule.css'

export default function Schedule({data, deleteFromScheduleCb}) {
  
  let [recipeSchedule, setRecipeSchedule] = useState(data)
  
  useEffect(() => {
    getRecipes();
  }, [data]);
  
  async function getRecipes(){
    try {
      const response = await fetch('/api/schedule', { method: "GET" })
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
      <h3>Schedule</h3> 
      <ul>
        {
          recipeSchedule.map((r) =>(
            <li key = {r.id}>
              <span className = "recipe-title">{r.title}</span>: {r.ingredients}
              <button onClick={()=>deleteFromScheduleCb(r.id)}>x</button>
            </li>
          ))
        }
      </ul>        
      <Outlet/>

    </div>
  )
}