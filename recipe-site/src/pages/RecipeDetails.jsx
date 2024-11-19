import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function RecipeDetails({ recipeList }) {
  let { recipeId } = useParams();
  const recipeDetails = recipeList.find((recipe) => recipe.id === recipeId);
  console.log(recipeId);
  console.log(recipeDetails);

  return (
    <div>
      <h1>{recipeDetails.name}</h1>
      <img src={recipeDetails.image}></img>
      <div>{recipeDetails.calories}</div>
      <div>{recipeDetails.servings}</div>
      <p>{recipeDetails.ingredients}</p>
      <p>{recipeDetails.preparation_steps}</p>
      <div>{recipeDetails.vegan}</div>
      <Link to="/">
        <button className="backButton">Back</button>
      </Link>
    </div>
  );
}
