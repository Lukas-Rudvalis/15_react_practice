import { createSlice } from '@reduxjs/toolkit';

const localEmailKey = 'LOCAL_EMAIL';
const localTokenKey = 'LOCAL_TOKEN';

const initAuthState = {
  token: localStorage.getItem(localTokenKey) || '',
  email: localStorage.getItem(localEmailKey) || '',
  isLoggedIn: localStorage.getItem(localTokenKey) ? true : false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initAuthState,
  reducers: {
    login(state, action) {
      localStorage.setItem(localTokenKey, action.payload.token);
      localStorage.setItem(localEmailKey, action.payload.email);
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem(localTokenKey);
      localStorage.removeItem(localEmailKey);
      state.token = '';
      state.email = '';
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
