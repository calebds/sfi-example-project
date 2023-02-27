import type { RootState } from '../app/store';
import {
  useParams
} from "react-router-dom";
import { useSelector } from 'react-redux';
import RecipeHeader from "./RecipeHeader";

export default function Recipe() {
  const { slug } = useParams();
  const recipe = useSelector((state: RootState) => state.recipes.recipes.find(r => r.slug === slug));
  if (recipe == null) return <div>404</div>;
  return (
    <div>
      <RecipeHeader variant="detail" recipe={recipe} />
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