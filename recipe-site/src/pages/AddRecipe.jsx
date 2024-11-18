import React, { useState } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import "./AddRecipe.css";

export default function AddRecipe({ addRecipe }) {
  const [recipes, setRecipe] = useState([]);
  const [recipeTitle, setRecipeTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation_steps, setPreparationSteps] = useState("");
  const [vegan, setVegan] = useState("");

  const handleRecipeTitleInput = (event) => setRecipeTitle(event.target.value);
  const handleCaloriesInput = (event) => setCalories(event.target.value);
  const handleServingsInput = (event) => setServings(event.target.value);
  const handleIngredientsInput = (event) => setIngredients(event.target.value);
  const handlePreparationStepsInput = (event) =>
    setPreparationSteps(event.target.value);
  const handleVenganInput = (event) => setPreparationSteps(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      name: recipeTitle,
      calories,
      servings,
      preparation_steps,
      ingredients,
      vegan,
    };
    addRecipe(newRecipe);

    setRecipeTitle("");
    setCalories("");
    setServings("");
    setPreparationSteps("");
    setIngredients("");
    setVegan("");
  };

  return (
    <div className="formBox">
      <form onSubmit={handleFormSubmit}>
        <div className="addRecipe">Add a Recipe</div>
        <div>
          <label className="placeholder">
            <input
              name="recipeTitle"
              type="text"
              placeholder="What are we cooking today?"
              value={recipeTitle}
              onChange={handleRecipeTitleInput}
            />
          </label>
        </div>
        <div>
          <label className="placeholder">
            <input
              name="servings"
              type="number"
              placeholder="How many servings is this recipe?"
              min={0}
              value={servings}
              onChange={handleServingsInput}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              name="calories"
              type="number"
              placeholder="Add the calories of each serving!"
              min={0}
              value={calories}
              onChange={handleCaloriesInput}
            />
          </label>
        </div>

        <div>
          <label>
            <input
              name="preparation_steps"
              type="text"
              placeholder="Add your instructions here!"
              value={preparation_steps}
              onChange={handlePreparationStepsInput}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              name="ingredients"
              type="text"
              placeholder="Help us with our grocery, include the ingredients!"
              value={ingredients}
              onChange={handleIngredientsInput}
            />
          </label>
        </div>
        <div>
          <label>
            Is it vengan?
            <input
              name="vegan"
              type="checkbox"
              value={vegan}
              onChange={handleVenganInput}
            />
          </label>
        </div>

        <div>
          <button className="addRecipeButton" type="submit">
            Add Recipe
          </button>
        </div>
      </form>

      {recipes &&
        recipes.map((recipe) => {
          return <RecipeCard key={recipe} {...recipe} />;
        })}

      <div>
        <Link to="/">
          <button className="backButton">Back</button>
        </Link>
      </div>
    </div>
  );
}
