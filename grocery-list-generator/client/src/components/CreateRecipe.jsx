import { useState } from 'react'

import './CreateRecipe.css'

export default function CreateRecipe() {
    const emptyRecipe = {
        title: "",
        img: "",
        ingredients: "",
        method: ""
    }

    const [recipe, setRecipe] = useState(emptyRecipe)

    function handleChange(){

    }

    function handleSubmit(e){
        e.preventDefault()

    }

  return (
    <div>
        <h3>Create a new recipe</h3>
        <form onSubmit = {handleSubmit}>
            <div className = "form-input">
                <label>
                    Title:
                    <input type = "text"
                        onChange = {handleChange}
                        name = "title"
                        value = {recipe.title} />
                </label>
                <label>
                    Image:
                    <input type = "text"
                        onChange = {handleChange}
                        name = "image"
                        value = {recipe.img} />
                </label>
                <label>
                    Ingredients:
                    <textarea type = "text"
                        onChange = {handleChange}
                        name = "ingredients"
                        value = {recipe.ingredients} />
                </label>
                <label>
                    Title:
                    <textarea type = "text"
                        onChange = {handleChange}
                        name = "method"
                        value = {recipe.method} />
                </label>                
            </div>
            <button type = "submit">Submit</button>
        </form>
    </div>
  )
}
