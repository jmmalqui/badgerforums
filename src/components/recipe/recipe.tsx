import "./recipe.css";

interface RecipeProps {
  title: string;
  text: string;
  image: string;
}

function Recipe(props: RecipeProps) {
  return (
    <div className="recipe-master-container">
      <div className="recipe">
        <div className="recipe-title">{props.title}</div>
        <div className="recipe-text">{props.text}</div>
      </div>
      <div className="recipe-image-container">
        <img src={props.image} alt="" className="recipe-image" />
      </div>
    </div>
  );
}

export default Recipe;
