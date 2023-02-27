import type { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import RecipeHeader from "./RecipeHeader";

export default function Home() {
  const allRecipes = useSelector((state: RootState) => state.recipes.recipes);
  return (
    <div>
      <ul>
        {allRecipes.map((recipe, i) => (
          <li className="mb-2" key={i}>
            <RecipeHeader variant="list" recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
}