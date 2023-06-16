import { configureStore } from '@reduxjs/toolkit';
import { apiAuthSlice } from './api/apiAuthSlice';
import { apiNewsSlice } from './api/apiNewsSlice';
import { apiNewYorkTimesSlice } from './api/apiNewYorkTimesSlice';
import { apiGNewsSlice } from './api/apiGNewsSlice';
import authSlice from './modules/authSlice';
import newsSlice from './modules/newsSlice';

export const store = configureStore({
  reducer: {
    [apiAuthSlice.reducerPath]: apiAuthSlice.reducer,
    [apiNewsSlice.reducerPath]: apiNewsSlice.reducer,
    [apiNewYorkTimesSlice.reducerPath]: apiNewYorkTimesSlice.reducer,
    [apiGNewsSlice.reducerPath]: apiGNewsSlice.reducer,

    auth: authSlice,
    news: newsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(apiAuthSlice.middleware, apiNewsSlice.middleware, apiNewYorkTimesSlice.middleware, apiGNewsSlice.middleware),
  devTools: true
});
