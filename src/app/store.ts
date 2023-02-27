import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import recipesReducer from './recipesSlice';
import bookmarksReducer from './bookmarksSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recipes: recipesReducer,
    bookmarks: bookmarksReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;