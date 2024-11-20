import "./App.css";
import { Route, Routes } from "react-router-dom";
import recipesData from "./assets/recipes.json";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import RecipeCard from "./components/RecipeCard";
import AboutPage from "./pages/AboutPage";
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from "./pages/AddRecipe";
import NotFound from "./pages/NotFound";
import UpdateRecipePage from "./pages/UpdateRecipePage";

function App() {
  const [recipeList, setRecipeList] = useState(recipesData);

  function addRecipe(recipe) {
    setRecipeList([...recipeList, recipe]);
  }

  function updateRecipe(recipe) {
    const newArray = recipeList.map(recipeElement => recipeElement.id === recipe.id ? recipe : recipeElement);
    console.log('update called')
    setRecipeList(newArray);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage recipeList={recipeList} />} />
          <Route
            path="/details/:recipeId"
            element={<RecipeDetails recipeList={recipeList} />}
          />
          <Route
            path="/update/:recipeId"
            element={<UpdateRecipePage recipeList={recipeList} updateRecipe={updateRecipe} />}
          />
          <Route
            path="/addrecipe"
            element={<AddRecipe addRecipe={addRecipe} />}
          />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
