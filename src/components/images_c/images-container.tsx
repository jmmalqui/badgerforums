import "./images-container.css"
import curryRecipe from "../assets/recipe-images/curry.jpg"
import badgerPost from "../assets/recipe-images/badger.jpg"
import { data } from "../data"
function ImagesContainer(){
    return (
        
            <div className="image-master">
                <div className="image-grid">
                    {data.map((item) => (
                        <div className="image-container">
                            <img src={item.image} alt="" className="image-image" />
                        </div>
              
                    ))}
                </div>
            </div>
      
    )
}

export default ImagesContainer