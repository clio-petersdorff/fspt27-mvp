import { useEffect, useState } from 'react'
import { Link , Outlet} from "react-router-dom";

import './SingleRecipe.css'

export default function SingleRecipe({data}) {


  return (
    <div className = "col offset-md-4">
        <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="recipe"/>
            <div className="card-body">
                <h5 className="card-title">Recipe title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        {/* <div className="container">
            <h3>Recipe title</h3>
            <div className = "row">
                <div className = "col">
                    <img/>
                </div>
                <div className = "col">
                    <h4>Description</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div> */}
        <div>
        <Outlet/>
      </div>
    </div>


  )
}