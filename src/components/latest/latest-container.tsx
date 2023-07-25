import "./latest-container.css"
import LatestRecipe from "./latest-recipe"
import { data } from "../data"

function RecipeContainer(){
    return (
        
        <div className="latest-recipe-container">
            <h1 className="latest-title-upper"> Latests Posts</h1>
            {data.map( (item) => item.latest ? (
                <LatestRecipe title={item.title} image={item.image}></LatestRecipe>
            ) : <></>)}
            
        
        </div>
    )
}

export default RecipeContainer