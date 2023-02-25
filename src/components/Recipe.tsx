import { getRecipeBySlug } from "../content/recipes";
import RecipeHeader from "./RecipeHeader";
export default function Recipe() {
  const recipe = getRecipeBySlug('hi');
  return (
    <div>
      <RecipeHeader recipe={recipe} />
    </div>
  );
}