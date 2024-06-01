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

    const emptyIngredient = {
        ingredientName: "",
        ingredientMeasure: "",
        ingredientAmount: ""
    }

    const [ingredients, setIngredients] = useState(emptyIngredient)
    const [ingredientsList, setIngredientsList] = useState([])


    function handleChange(e){
        const value = e.target.value;
        setRecipe({
          ...recipe,
          [e.target.name]: value
        });
        setIngredients({
            ...ingredients,
            [e.target.name]: value
          });
        //   console.log(ingredients)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        
        // const recipeInput = { title: recipe.title, img: recipe.img, method: recipe.method };
        // console.log("Recipe input: ", recipeInput)

        const ingredientInput = ingredientsList.map(i => (
            {
                ingredientName: i.ingredientName, 
                ingredientAmount: +i.ingredientAmount, 
                ingredientMeasure: i.ingredientMeasure}
            ))
        // console.log("Ingredients: ", ingredientInput)

        const input = {
            title: recipe.title, 
            img: recipe.img, 
            method: recipe.method, 
            ingredients: ingredientInput
        }
        
        console.log(input)

        addRecipeCb(input);

        setRecipe(emptyRecipe);
    }

    // Drop down for measurement (cups, ml, etc)
    const [selectedValue, setSelectedValue] = useState(''); 
    
    function handleSelect(e) { 
        setSelectedValue(e.target.value);
        setIngredients({
            ...ingredients,
            ingredientMeasure: e.target.value // Update ingredientMeasure with selected value
        });
         
    }; 
    
    // Add ingredient button
    function addIngredient(e){
        e.preventDefault()
        setIngredientsList([
            ... ingredientsList, ingredients
        ])
        setIngredients(emptyIngredient)
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
                    <div>
                        {
                            ingredientsList && ingredientsList.map((i, index) => (
                                <ul>
                                    <li key={index}>
                                        {i.ingredientAmount} {i.ingredientMeasure !== 'na'?i.ingredientMeasure:null} {i.ingredientName}
                                    </li>
                                </ul>
                            ))
                        }                        
                    </div>

                    <div className="ingredient-inputs">
                    <input type = "number"
                        onChange = {handleChange}
                        name = "ingredientAmount"
                        value = {ingredients.ingredientAmount} 
                        />
                    <select value={selectedValue} onChange={handleSelect}> 
                        <option value = "na">NA</option> 
                        <option value = "cup">Cup/s</option> 
                        <option value="g">Grams</option> 
                        <option value="tbls">Table spoon/s</option> 
                        <option value="tsp">Teaspoon/s</option> 
                        <option value="ml">Millilitres</option>                     

                    </select> 
                    <input type = "text"
                        onChange = {handleChange}
                        name = "ingredientName"
                        value = {ingredients.ingredientName} 
                        />
                    <button onClick ={addIngredient}>+</button>
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

