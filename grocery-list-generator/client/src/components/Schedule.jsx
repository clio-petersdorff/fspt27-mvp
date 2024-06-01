import { useEffect, useState } from 'react'
import { Link , Outlet} from "react-router-dom";

import './Schedule.css'
import GroceryList from './GroceryList.jsx'


export default function Schedule({recipeList, deleteFromScheduleCb}) {
  
  // const [showList, setShowList] = useState(false)

  useEffect(() => {
  
  });

  
  async function generateList(){
    // setShowList(!showList)
  }

  return (
    <div>
      {
        // !showList &&      
        <>
        <h3>This weeks recipes: </h3>
        <ul>
          {recipeList.map((r) => (
            r.selected &&
            <li key={r.id}>
              <span className="recipe-title">{r.title}</span>
              <button onClick={() => deleteFromScheduleCb(r.id)}>x</button>
            </li>
          ))}
        </ul>
        <button className = "btn" onClick={() => generateList()}>Generate grocery list</button>
        </>   
      }
{/* 
      {
        showList && <GroceryList data = {recipeList}/>
      } */}
     
      <Outlet/>

    </div>
  )
}