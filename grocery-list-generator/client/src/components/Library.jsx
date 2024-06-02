import { useEffect, useState } from 'react'
import { Link , Outlet, useNavigate} from "react-router-dom";

import './Library.css'

export default function Library({data, deleteRecipeCb, deleteFromScheduleCb, addMealCb, deleteAllGroceryItemsCb, generateGroceryListCb}) {

  let navigate = useNavigate(); 

  const createNew = () =>{ 
    let path = `/new-recipe`; 
    navigate(path);
  }

  const generateList = () =>{
    deleteAllGroceryItemsCb()
    generateGroceryListCb(data)
    navigate('/grocery-list')
  }



  return (
    <div>
      <div>
        <h2>This weeks recipes: </h2>
        <ul>
          {data.map((r) => (
            r.selected ? (
              <li key={r.id}>
                <span >{r.title}</span>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => deleteFromScheduleCb(r.id)}></button>
              </li>
            ) : null
          ))}
        </ul>
        <button className = "btn" onClick={() => generateList()}>Generate grocery list</button>
        </div>  
        
      <h2 className="mt-3">Your recipe library</h2> 
      <button className="btn" onClick={createNew}>Create New Recipe</button>
      <div >
        {
          data.map(r => (
            <div className = {r.selected?'gallery-selected':'gallery'} key={r.id} >
              <span className= "dish-name"> {r.title}</span>
              <button type="button" className="btn-close" aria-label="Close" onClick={() => deleteRecipeCb(r.id)}></button>
              <img src = {r.img}/>
              <button className= "btn" onClick={()=> addMealCb(r.id)}>Add to plan</button>
          </div>
          ))
        }
        
      </div>

      <div>
        <Outlet/>
      </div>
    </div>
  )
}
