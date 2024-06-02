import { useEffect, useState } from 'react'
import { Link , Outlet, useNavigate} from "react-router-dom";

import './GroceryList.css'

export default function GroceryList({deleteAllGroceryItems}) {

    const [groceries, setGroceries] = useState([])

    useEffect(() => {
        getGroceries()
      }, []);


    // Get grocery list
    async function getGroceries() {
        console.log("getting groceries")
        try {
          const response = await fetch('/api/Groceries', { method: "GET" })
          // console.log(response.ok)
          if (response.ok){ 
            const data = await response.json()
            console.log(data)
            setGroceries(data)
          } else {
            console.log(`Server Error: ${response.status}, ${response.statusText}`)
            const errorData = await response.json()
            console.log(errorData.error)
          }
        } catch (e){
          console.log(`Network Error: ${e.message}`)
        }
    }

  // DELETE current grocery list
  async function deleteAllGroceryItems(){
    try {
        const response = await fetch('/api/Groceries', {  method: "DELETE" })
        // console.log(response.ok)
        if (response.ok){ 
            const data = await response.json()
            console.log("Grocery list cleared")
            setGroceries(data)

        } else {
            console.log(`Server Error: ${response.status}, ${response.statusText}`)
            const errorData = await response.json()
            console.log(errorData.error)
        }
        } catch (e){
        console.log(`Network Error: ${e.message}`)
        }
  }

    
    let navigate = useNavigate(); 

    const changeSelection = () =>{
        navigate(`/`)
      }

    return (
        
        <div>
            <h2>Grocery list</h2>
            <button type="button" 
                    className = "btn btn-lg" 
                    data-bs-toggle="modal" 
                    data-bs-target="#staticBackdrop"> Clear grocery list </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            Are you sure you want to clear all items in your grocery list?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oops, nevermind</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick = {()=>deleteAllGroceryItems()}>Yes, delete it all</button>
                        </div>
                    </div>
                </div>
            </div>

            <button className = "btn btn-lg" onClick = {()=>changeSelection()}> Change Recipe selection </button>

            {
            groceries.map((r)=>( 
                <ul>
                    <li key = {r.groceryID}>
                    {r.ingredientAmount} {r.ingredientMeasure==='na'?null:r.ingredientMeasure} {r.ingredientName}
                    </li>
                </ul>
            ))
            }
        </div>
        
    )
}
