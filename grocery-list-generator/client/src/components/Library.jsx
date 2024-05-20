import { useEffect, useState } from 'react'

import './Library.css'

export default function Library({data}) {

  return (
    <div>
        <h3>Your saved recipes</h3> 
        <ul>
          {
            data.map(r => (
              <li key={r.id}>
                <img src = {r.img}/>
                <span className= "recipe"> {r.title}</span>
                <button onClick={() => deleteStudentCb(r.id)}>x</button>
            </li>
            ))
          }
        </ul>
    </div>
  )
}
