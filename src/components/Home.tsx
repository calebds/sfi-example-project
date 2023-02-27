import type { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import RecipeHeader from "./RecipeHeader";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Recipe } from '../types/types';

function titleMatch(recipe: Recipe, query: string): boolean {
  return recipe.title.toLowerCase().indexOf(query) > -1;
}

function tagsMatch(recipe: Recipe, query: string): boolean {
  const matches = recipe.tags.filter((tag) => {
    return tag.toLowerCase().indexOf(query) > -1;
  });
  return matches.length > 0;
}

function ingredientsMatch(recipe: Recipe, query: string): boolean {
  const matches = recipe.ingredients.filter((ingredient) => {
    return ingredient.name.toLowerCase().indexOf(query) > -1;
  });
  return matches.length > 0;
}

export default function Home() {
  const allRecipes = useSelector((state: RootState) => state.recipes.recipes);
  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes);

  const handleSearch = (event: any) => {
    const query = event.target.value.toLowerCase();
    if (query === '') {
      setFilteredRecipes(allRecipes);
    } else {
      setFilteredRecipes(allRecipes.filter((recipe) => {
        return titleMatch(recipe, query) || tagsMatch(recipe, query) || ingredientsMatch(recipe, query);
      }));
    }
  };

  return (
    <div className="">
      <h1 className="text-center font-bold text-4xl mt-4">Cook the Cosmos!</h1>
      <div className="text-center m-8">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '400px' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="filter-box" label={`Search ${allRecipes.length} recipes`} onChange={handleSearch} variant="outlined" />
        </Box>
      </div>
      <div className="m-auto max-w-[800px]">
        <ul className="flex flex-col space-y-6">
          {filteredRecipes.map((recipe, i) => (
            <li key={i}>
              <RecipeHeader variant="list" recipe={recipe} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}