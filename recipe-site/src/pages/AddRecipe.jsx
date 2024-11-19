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

  const pasrseDashedList = (inputToParse) => {
    const unparsedArray = inputToParse.split('-').slice(1);
    const parsedArray = unparsedArray.map(element => {
      if(element[0] === ' ') element = element.slice(1);
      if(element.at(-1) === '\n') element = element.slice(0, -1);
      return element;
    })
    return parsedArray
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      name: recipeTitle,
      calories,
      servings,
      preparation_steps: pasrseDashedList(preparation_steps),
      ingredients: pasrseDashedList(ingredients),
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
            <input
              name="recipeTitle"
              type="text"
              placeholder="What are we cooking today?"
              value={recipeTitle}
              onChange={handleRecipeTitleInput}
            />
            <input
              name="servings"
              type="number"
              placeholder="How many servings is this recipe?"
              min={0}
              value={servings}
              onChange={handleServingsInput}
            />
            <input
              name="calories"
              type="number"
              placeholder="Add the calories of each serving!"
              min={0}
              value={calories}
              onChange={handleCaloriesInput}
            />

            <textarea
              name="preparation_steps"
              type="text"
              placeholder="Add your instructions here!"
              value={preparation_steps}
              onChange={handlePreparationStepsInput}
            ></textarea>
            <textarea
              name="ingredients"
              type="text"
              placeholder="Help us with our grocery, include the ingredients!"
              value={ingredients}
              onChange={handleIngredientsInput}
            ></textarea>

        <div className="veganInput">
            <div>
            Is it vengan?
            </div>
            <input
              name="vegan"
              type="checkbox"
              value={vegan}
              onChange={handleVenganInput}
            />
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
    </div>
  );
}
