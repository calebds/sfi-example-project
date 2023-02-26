import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  name: string
  authenticated: boolean
};

const initialState: AuthState = {
  name: '',
  authenticated: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.authenticated = true;
    },
    logout: (state) => {
      state.name = '';
      state.authenticated = false;
    }
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;