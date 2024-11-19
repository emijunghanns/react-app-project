import React from "react";
import { Link } from "react-router-dom";

export default function RecipeDetails({ recipeList }) {
  let { recipeId } = useParams();
  const recipeDetails = recipeList.find((recipe) => recipe.id === recipeId);
  console.log(recipeId);
  console.log(recipeDetails);

  return (
    <div>
      <h1>{}</h1>
      <Link to="/">
        <button className="backButton">Back</button>
      </Link>
    </div>
  );
}
