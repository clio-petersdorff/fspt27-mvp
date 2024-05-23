import { useState } from 'react'
import { Link , Outlet} from "react-router-dom";

// import './Schedule.css'

export default function Schedule() {


  return (
    <div>
        <h3>Schedule</h3> 
        <div>Monday <button>+</button></div>
        <div>Tuesday <button>+</button></div>
        <div>Wednesday <button>+</button></div>
        <div>Thursday <button>+</button></div>
        <div>Friday <button>+</button></div>
        <div>Saturday <button>+</button></div>
        <div>Sunday <button>+</button></div>
        <div>
        <Outlet/>
      </div>
    </div>
  )
}