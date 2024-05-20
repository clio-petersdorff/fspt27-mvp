import { useState } from 'react'

import './App.css'
import Library from './components/Library.jsx'
import CreateRecipe from './components/CreateRecipe.jsx'
import Schedule from './components/Schedule.jsx'


export default function App() {
  const [nav, setNav] = useState('')

  return (
    <div>
        <div className = 'nav-bar'>
          <button onClick={()=>setNav('library')}>Recipe Library</button>
          <button onClick={()=>setNav('create_new')}>New recipe</button>
          <button onClick ={()=>setNav('schedule')}>Schedule meals</button>
        </div>

        <h1>Grocery planner</h1>

        {nav === 'library' && < Library />}
        {nav === 'create_new' && <CreateRecipe/>}
        {nav === 'schedule' && <Schedule/>}

    </div>
  )
}

