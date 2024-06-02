import { useEffect, useState } from 'react'

export default function GroceryList({data, deleteAllGroceryItems}) {

    useEffect(() => {
        console.log(data)
        // deleteAllGroceryItems()
        getSelectedRecipes(data);
      }, []);

    const [groceryList, setGroceryList] = useState([])

    // Get ids of all recipes that are selected
    function getSelectedRecipes(data){
        let selectedIDs = []
        data.map(r => (r.selected?selectedIDs.push(r.id):null))

        console.log(selectedIDs)
        generateGroceryList(selectedIDs)
    }

    // GET ingredients based on recipe ids
    async function generateGroceryList(selectedRecipes){
        try {
        const response = await fetch('/api/Groceries/', { 
            method: "POST" ,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedRecipes)
        })
        // console.log(response.ok)
        if (response.ok){ 
            const data = await response.json()
            // console.log(data)
            setGroceryList(data)
        } else {
            console.log(`Server Error: ${response.status}, ${response.statusText}`)
            const errorData = await response.json()
            console.log(errorData.error)
        }
        } catch (e){
        console.log(`Network Error: ${e.message}`)
        }
    }

    // Clear current grocery list
    async function deleteAllGroceryItems(){
        try {
            const response = await fetch('/api/Groceries/', {  method: "DELETE" })
            // console.log(response.ok)
            if (response.ok){ 
                const data = await response.json()
                // console.log(data)
                setGroceryList(data)
            } else {
                console.log(`Server Error: ${response.status}, ${response.statusText}`)
                const errorData = await response.json()
                console.log(errorData.error)
            }
            } catch (e){
            console.log(`Network Error: ${e.message}`)
            }
    }

    return (
        
        <div>
            <h2>Grocery list</h2>

            {
            groceryList.map((r)=>(
                <ul>
                    <li key = {r.groceryID}>
                    {r.ingredientAmount} {r.ingredientMeasure==='na'?null:r.ingredientMeasure} {r.ingredientName}
                    </li>
                </ul>
            ))
            }
            <button onClick = {()=>deleteAllGroceryItems()}> Clear grocery list </button>
            <button onClick = {()=>changeSelection()}> Change Recipe selection </button>
        </div>
        
    )
}
