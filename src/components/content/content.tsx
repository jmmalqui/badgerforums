import "./content.css"
import Menu from "../menu/menu";
import RecipeContainer from "../recipe/recipe-container";
function Content(){
    return(
        <>
            <div className="content-container">
                <div className="container-child">
                    <Menu></Menu>
                    <RecipeContainer></RecipeContainer>
                </div>
            </div>
        </>
        
    )
}

export default Content;