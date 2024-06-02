import { useEffect, useState } from 'react'
import { Link , Outlet, useNavigate} from "react-router-dom";

import './Library.css'

export default function Library({data, deleteRecipeCb, deleteFromScheduleCb, addMealCb}) {

  let navigate = useNavigate(); 

  const createNew = () =>{ 
    let path = `/new-recipe`; 
    navigate(path);
  }

  const generateList = () =>{
    navigate(`/grocery-list`)
  }


  return (
    <div>
      <h3 className="mt-3">Your recipe library</h3> 
      <button className="btn" onClick={createNew}>Create New Recipe</button>
      <div >
        {
          data.map(r => (
            <div className = {r.selected?'gallery-selected':'gallery'} key={r.id} >
              <span className= "dish-name"> {r.title}</span>
              <button onClick={() => deleteRecipeCb(r.id)}>x</button>
              <img src = {r.img}/>
              <button className= "btn" onClick={()=> addMealCb(r.id)}>Add to plan</button>
          </div>
          ))
        }
      </div>
      <div>
        <h3>This weeks recipes: </h3>
        <ul>
          {data.map((r) => (
            r.selected ? (
              <li key={r.id}>
                <span className="recipe-title">{r.title}</span>
                <button onClick={() => deleteFromScheduleCb(r.id)}>x</button>
              </li>
            ) : null
          ))}
        </ul>
        <button className = "btn" onClick={() => generateList()}>Generate grocery list</button>
        </div>  
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
