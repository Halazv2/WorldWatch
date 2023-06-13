import { configureStore } from '@reduxjs/toolkit';
import { apiAuthSlice } from './api/apiAuthSlice';
import authSlice from './modules/authSlice';

export const store = configureStore({
  reducer: {
    [apiAuthSlice.reducerPath]: apiAuthSlice.reducer,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiAuthSlice.middleware),
  devTools: true
});
