import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '../types/types';

export interface BookmarksState {
  bookmarks: { [key: string]: Recipe }
};

const initialState: BookmarksState = {
  bookmarks: {},
};

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<Recipe>) => {
      state.bookmarks[action.payload.slug] = action.payload;
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      delete state.bookmarks[action.payload];
    },
    clearBookmarks: (state) => {
      state.bookmarks = {};
    }
  },
});

export const { addBookmark, removeBookmark, clearBookmarks } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;