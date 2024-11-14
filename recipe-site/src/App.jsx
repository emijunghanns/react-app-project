import "./App.css";
import recipesData from "./assets/recipes.json";
import { useState } from "react";
import Homepage from "./Homepage";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [recipeList, setRecipeList] = useState(recipesData);

  // function addRecipe(recipe) {
  //   const newRecipeList = [...recipeList];
  //   newRecipeList.push(recipe);
  //   setRecipeList(newRecipeList);
  // }

  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        <Homepage recipeList={recipeList} />
        {/* <AddRecipePage addRecipe={addRecipe} /> */}
      </div>

      <Footer />
    </>
  );
}

export default App;
