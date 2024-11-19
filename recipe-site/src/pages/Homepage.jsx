import React from "react";
import RecipeCard from "../components/RecipeCard";

export default function Homepage({ recipeList }) {
  console.log(recipeList);

  return (
    <div className="homepage">
      {recipeList.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          name={recipe.name}
          image={recipe.image}
          calories={recipe.calories}
          servings={recipe.servings}
          vegan={recipe.vegan}
        />
      ))}
    </div>
  );
}
