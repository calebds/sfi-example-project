import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Recipe } from '../types/types';
import * as Recipes from '../content/recipes';

export interface RecipesState {
  recipes: Recipe[]
};

const initialState: RecipesState = {
  recipes: Recipes.getAllRecipes()
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    // login: (state, action: PayloadAction<string>) => {
    //   state.name = action.payload;
    //   state.authenticated = true;
    // },
    // logout: (state) => {
    //   state.name = '';
    //   state.authenticated = false;
    // }
  },
});

//export const { login, logout } = recipesSlice.actions;

export default recipesSlice.reducer;