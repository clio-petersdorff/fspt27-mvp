import { useEffect, useState } from 'react'
import { Link , Outlet, useNavigate} from "react-router-dom";

export default function GroceryList({deleteAllGroceryItemsCb}) {

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

    // // POST ingredients to groceryList based on recipe ids
    // async function generateGroceryList(data){
        
    //     // // Clear current list
    //     // deleteAllGroceryItems()

    //     // Get current selection of ids
    //     let selectedIDs = []
    //     data.map(r => (r.selected?selectedIDs.push(r.id):null))
    //     console.log(selectedIDs)

    //     // re-populate grocery list table based on current selection of ids
    //     try {
    //     const response = await fetch('/api/Groceries/', { 
    //         method: "POST" ,
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(selectedIDs)
    //     })
    //     if (response.ok){ 
    //         const data = await response.json()
    //         // console.log(data)
    //         setGroceryList(data)
    //     } 
    //     } catch (e){
    //     console.log(`Network Error: ${e.message}`)
    //     }
    // }

    
    let navigate = useNavigate(); 

    const changeSelection = () =>{
        navigate(`/`)
      }

    return (
        
        <div>
            <h2>Grocery list</h2>
            <button className = "btn" onClick = {()=>deleteAllGroceryItemsCb()}> Clear grocery list </button>
            <button className = "btn" onClick = {()=>changeSelection()}> Change Recipe selection </button>

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
