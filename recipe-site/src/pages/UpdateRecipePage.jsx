import { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AddRecipe.css";

export default function UpdateRecipePage({ updateRecipe, recipeList }) {
    let { recipeId } = useParams();
    const navigate= useNavigate();
  const recipeDetails = recipeList.find((recipe) => recipe.id === recipeId);
//   console.log(recipeId);    
const pasrseDashedList = (inputToParse) => {
  const unparsedArray = inputToParse.split('-').slice(1);
  const parsedArray = unparsedArray.map(element => {
    if(element[0] === ' ') element = element.slice(1);
    if(element.at(-1) === '\n') element = element.slice(0, -1);
    return element;
  })
  return parsedArray
}

const unparseDashedList = (listToUnparse) => {
  let result = '';
  for(const element of listToUnparse){
      result += `- ${element}\n`;
  }
  return result;
} 
//   console.log(recipeDetails);

  const [recipeTitle, setRecipeTitle] = useState(recipeDetails.name);
  const [recipeImage, setRecipeImage] = useState(recipeDetails.image)
  const [calories, setCalories] = useState(recipeDetails.calories);
  const [servings, setServings] = useState(recipeDetails.servings);
  const [ingredients, setIngredients] = useState(); 
  const [preparation_steps, setPreparationSteps] = useState();
  const [vegan, setVegan] = useState(recipeDetails.vegan);

  useEffect(() => {
    if(!ingredients) setIngredients(unparseDashedList(recipeDetails.ingredients));
    if(!preparation_steps) setPreparationSteps(unparseDashedList(recipeDetails.preparation_steps));
  }, [])

  const handleRecipeTitleInput = (event) => setRecipeTitle(event.target.value);
  const handleRecipeImageInput = (event) => setRecipeImage(event.target.value);
  const handleCaloriesInput = (event) => setCalories(event.target.value);
  const handleServingsInput = (event) => setServings(event.target.value);
  const handleIngredientsInput = (event) => setIngredients(event.target.value);
  const handlePreparationStepsInput = (event) =>
    setPreparationSteps(event.target.value);
  const handleVenganInput = () => setVegan(!vegan);


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      id: recipeId,
      name: recipeTitle,
      image: recipeImage,
      calories,
      servings,
      preparation_steps: pasrseDashedList(preparation_steps),
      ingredients: pasrseDashedList(ingredients),
      vegan,
    };
    updateRecipe(newRecipe);
    navigate("/");
    
  };

  return (
    <div className="formBox">
      <form onSubmit={handleFormSubmit}>
        <div className="addRecipe">Update a Recipe</div>
            <input
              name="recipeTitle"
              type="text"
              placeholder="What are we cooking today?"
              value={recipeTitle}
              onChange={handleRecipeTitleInput}
            />
            <input
              name="recipeImage"
              type="text"
              placeholder="Add an image for what you have cooked !"
              value={recipeImage}
              onChange={handleRecipeImageInput}
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
              checked={vegan}
            />
        </div>

        <div>
          <button className="addRecipeButton" type="submit">
            Update Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
