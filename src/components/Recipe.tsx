import { getRecipeBySlug } from "../content/recipes";
import RecipeHeader from "./RecipeHeader";
export default function Recipe() {
  const recipe = getRecipeBySlug('hi');
  return (
    <div>
      <RecipeHeader recipe={recipe} />
      <p>{recipe.intro}</p>
      <h2>Ingredients</h2>
      <ul>{recipe.ingredients.map((ingredient, i) => (
        <li key={i}>{ingredient.quantity} {ingredient.unit} {ingredient.name}</li>
      ))}</ul>
      <h2>Directions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}