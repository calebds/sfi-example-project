import { getAllRecipes } from "../content/recipes";
import RecipeHeader from "./RecipeHeader";
export default function Bookmarks() {
  const allRecipes = getAllRecipes();
  return (
    <div>
      <ul>
        {allRecipes.map((recipe, i) => (
          <li className="mb-2" key={i}>
            <RecipeHeader recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
}