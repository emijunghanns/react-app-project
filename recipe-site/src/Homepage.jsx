import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import RecipeCard from "./components/RecipeCard";

export default function Homepage({ recipeList }) {
  // console.log(recipeList);

  return (
    <div className="homepage">
      <RecipeCard
        name={recipeList[5].name}
        image={recipeList[5].image}
        calories={recipeList[5].calories}
        servings={recipeList[5].servings}
      />
    </div>
  );
}
