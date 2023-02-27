import type { RootState } from '../app/store';
import {
  useParams
} from "react-router-dom";
import { useSelector } from 'react-redux';
import RecipeHeader from './RecipeHeader';

// Recipe detail component.
export default function Recipe() {
  const { slug } = useParams();
  const recipe = useSelector((state: RootState) => state.recipes.recipes.find(r => r.slug === slug));
  if (recipe == null) return <div>404</div>;
  return (
    <div className="flex flex-col space-y-4">
      <RecipeHeader variant="detail" recipe={recipe} />
      <div className="whitespace-pre-line">{recipe.intro}</div>
      <h2 className="text-xl font-semibold">Ingredients</h2>
      <ul className="list-disc ml-6">{recipe.ingredients.map((ingredient, i) => (
        <li key={i}>{ingredient.quantity} {ingredient.unit} {ingredient.name}</li>
      ))}</ul>
      <h2 className="text-xl font-semibold">Directions</h2>
      <div className="whitespace-pre-line">{recipe.instructions}</div>
    </div>
  );
}