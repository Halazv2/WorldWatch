import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      if (action.payload) state.user = action.payload.user;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  }
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
