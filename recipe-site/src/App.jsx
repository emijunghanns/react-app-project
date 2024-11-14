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

function App() {
  const [recipeList, setRecipeList] = useState(recipesData);

  // function addRecipe(recipe) {
  //   const newRecipeList = [...recipeList];
  //   newRecipeList.push(recipe);
  //   setRecipeList(newRecipeList);
  // }

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage recipeList={recipeList} />} />
          <Route path="/details" element={<RecipeDetails />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
