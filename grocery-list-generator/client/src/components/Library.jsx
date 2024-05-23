import { useEffect, useState } from 'react'
import { Link , Outlet} from "react-router-dom";

import './Library.css'

export default function Library({data, deleteRecipeCb}) {

  return (
    <div>
      <h3>Your saved recipes</h3> 
      <div>
        {
          data.map(r => (
            <div className = "gallery" key={r.id}>
              <span className= "dish-name"> {r.title}</span>
              <button onClick={() => deleteRecipeCb(r.id)}>x</button>
              <img src = {r.img}/>
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
