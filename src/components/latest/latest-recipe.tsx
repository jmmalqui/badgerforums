import "./latest-recipe.css"
interface LatestProps{
    title: string;
    image: string;
}


function LatestRecipe(props: LatestProps){
    return (
        <div className="latest-master-container">
            <div className="latest">
                <div className="latest-title">{props.title}</div>
            </div>
            <div className="latest-image-container">
                <img src={props.image} alt="" className="latest-image"/>
            </div>
            
        </div>
    )
}

export default LatestRecipe;