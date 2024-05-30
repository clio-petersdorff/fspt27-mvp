import { useEffect, useState } from 'react'
import { Link , Outlet} from "react-router-dom";

import './Schedule.css'
import GroceryList from './GroceryList.jsx'


export default function Schedule({data}) {
  
  const [recipeList, setRecipeList] = useState(data)
  const [showList, setShowList] = useState(false)

  useEffect(() => {
  
  });

  async function deleteFromSchedule(ID) {
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
  
  async function generateList(){
    // setShowList(!showList)
  }

  return (
    <div>
      {
        !showList &&      
        <>
        <h3>This weeks recipes: </h3><ul>
          {recipeList.map((r) => (
            r.selected &&
            <li key={r.id}>
              <span className="recipe-title">{r.title}</span>
              <button onClick={() => deleteFromSchedule(r.id)}>x</button>
            </li>
          ))}
        </ul><button onClick={() => generateList()}>Generate grocery list</button>
        </>   
      }

      {
        showList && <GroceryList data = {recipeList}/>
      }
     
      <Outlet/>

    </div>
  )
}