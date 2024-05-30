import { useState } from 'react'
import { Link , Outlet} from "react-router-dom";

import './CreateRecipe.css'

export default function CreateRecipe({addRecipeCb}) {
    const emptyRecipe = {
        title: "",
        img: "",
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
        const newInput = { title: recipe.title, img: recipe.img, method: recipe.method };
        // console.log(newInput)
        addRecipeCb(newInput);
        setRecipe(emptyRecipe);
    }

    const [selectedValue, setSelectedValue] = useState(''); 
    
    function handleSelect(e) { 
        setSelectedValue(e.target.value); 
    }; 
    
    function newIngredient(e){
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
                        name = "img"
                        value = {recipe.img} />
                </label>
                <label >
                    Ingredients:
                    <div class="ingredient-inputs">
                    <input type = "number"
                        onChange = {handleChange}
                        name = "ingredients"
                        // value = "ingredients" 
                        />
                    <select value={selectedValue} onChange={handleSelect}> 
                        <option value="cups">Cup/s</option> 
                        <option value="g">Grams</option> 
                        <option value="Tbls">Table spoon/s</option> 
                        <option value="tsps">Teaspoon/s</option> 
                        <option value="ml">Millilitres</option> 
                    </select> 
                    <input type = "text"
                        onChange = {handleChange}
                        name = "ingredients"
                        // value = "ingredients" 
                        />
                    <button onClick ={newIngredient}>+</button>
                    </div>
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
        <div>
        <Outlet/>
      </div>
    </div>
  )
}

