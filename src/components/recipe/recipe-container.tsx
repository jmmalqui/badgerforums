import "./recipe-container.css";
import Recipe from "./recipe";
import curryRecipe from "../assets/recipe-images/curry.jpg";
import badgerPost from "../assets/recipe-images/badger.jpg";
import { data } from "../data";
function RecipeContainer() {
  return (
    <div className="recipe-container">
      <h1 className="landing-title"> Posts of the week</h1>
      {data.map((item) =>
        item.top ? (
          <Recipe
            title={item.title}
            text={item.text}
            image={item.image}
          ></Recipe>
        ) : (
          <></>
        )
      )}
    </div>
  );
}

export default RecipeContainer;
