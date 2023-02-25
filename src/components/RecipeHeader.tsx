import { Recipe } from "../types/types";

export default function RecipeHeader({ recipe }: { recipe: Recipe }) {
  return (
    <div>
      <div className="text-xl">{recipe.title}</div>
      <div>{recipe.authorName} &middot; {`${recipe.publishDate.getMonth() + 1}/${recipe.publishDate.getDate()}/${recipe.publishDate.getFullYear()}`} &middot; {recipe.ingredients.length} ingredients</div>
      <div className="flex flex-row space-x-1">{recipe.tags.map((tag, j) => (
        <span key={j} className="text-white bg-gray-400 rounded rounded-xl text-xs px-2 py-1">{tag}</span>
      ))}</div>
      <img alt={recipe.title} src={recipe.image} />
    </div>
  );
}