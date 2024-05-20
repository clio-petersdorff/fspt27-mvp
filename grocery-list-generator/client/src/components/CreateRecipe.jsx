import { useState } from 'react'

import './CreateRecipe.css'

export default function CreateRecipe({addRecipeCb}) {
    const emptyRecipe = {
        title: "",
        img: "",
        ingredients: "",
        method: ""
    }

    const [recipe, setRecipe] = useState(emptyRecipe)

    function handleChange(e){
        const value = e.target.value;
        setRecipe({
          ...recipe,
          [e.target.name]: value
        });
    }

    function handleSubmit(e){
        e.preventDefault()
        const newInput = { title: recipe.title, img: recipe.img, ingredients: recipe.ingredients, method: recipe.method };
        // console.log(newInput)
        addRecipeCb(newInput);
        setRecipe(emptyRecipe);
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
                        name = "img"
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
                    Method:
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
