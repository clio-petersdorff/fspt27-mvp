import { useEffect, useState } from 'react'
import { Link , Outlet, useNavigate} from "react-router-dom";

import './Library.css'

export default function Library({data, deleteRecipeCb, deleteFromScheduleCb, addMealCb, deleteAllGroceryItemsCb, generateGroceryListCb}) {

  // let [popUpRecipe, setPopUpRecipe] = useState({})
  let arr = []
  data.map(r=>(r.selected===1?arr.push(r.selected):null))
  let s = arr.length >0 ? true : false
  let [selected, setSelected] = useState(s)

  let [showDetails, setShowDetails] = useState('')

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

  const showRecipe = async (ID) => {
    if (showDetails === ID){
      setShowDetails("")
    } else {
      setShowDetails(ID)
    }
  }

  return (
    <div>
      <div>
        {
          <h2 className = 'mt-3 mb-3'> This weeks recipes: </h2>
        }

        
        
        <div className = "row">
          {data.map((r) => (
            r.selected ? (
              <div className = "col-md-3" key={r.id}>
                <span className = "labels">
                  {r.title}
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => deleteFromScheduleCb(r.id)}></button>
                </span>
              </div>
            ) : null
          ))}
        </div>

        <button className = "btn btn-lg" onClick={() => generateList()}>Generate grocery list</button>
        </div>  
        
      <h2 className="mt-3">Your recipe library</h2> 
      <div>
        {
          data.map(r => (
            <div className = {r.id===showDetails&&r.selected?"show-details selected"
                              :r.id===showDetails&&!r.selected?"show-details"
                              :r.id!==showDetails&&r.selected?'gallery-selected':
                              'gallery'} key={r.id} >
              <div onClick = {()=>showRecipe(r.id)}> 
                <p className= "dish-name"> {r.title}</p>
                {/* <button type="button" className="btn-close" aria-label="Close" onClick={() => deleteRecipeCb(r.id)}></button> */}
                <img src = {r.img}/>
                <p>{r.id===showDetails?r.method:null}</p>
              </div>
              <button className= {r.selected ? 'btn btn-secondary' : 'btn btn-primary'} onClick={()=> addMealCb(r.id)}>{r.selected ? 'Remove' : 'Add to plan'}
</button>
          </div>
          ))
        }
      </div>
      <button className="btn btn-lg" onClick={createNew}>Create New Recipe</button>
      <button className = "btn btn-lg" onClick={() => generateList()}>Generate grocery list</button>


      <div>
        <Outlet/>
      </div>
    </div>
  )
}
