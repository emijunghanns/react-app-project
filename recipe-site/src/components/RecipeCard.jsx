import React from "react";

export default function RecipeCard({ name, calories, image, servings }) {
  return (
    <div className="RecipeCard">
      <img src={image} alt="" />
      <h1>{name}</h1>
      <div className="recipeInfo">
        <b>{calories} calories</b>
        <b>{servings} servings</b>
      </div>
    </div>
  );
}
