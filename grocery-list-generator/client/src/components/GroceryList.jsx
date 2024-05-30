import { useEffect, useState } from 'react'

export default function GroceryList({data}) {
    
    return (
        <div>
            {
            data.map((r)=>
            // <p>{r.title}</p>
            r.ingredients.map((i)=>(<p>{i}</p>))
            )
            }
        </div>
        
    )
}
