import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_NEWS_API_URL + import.meta.env.VITE_NEWS_API_KEY
});

export const apiNewsSlice = createApi({
  reducerPath: 'apiNewsSlice',
  baseQuery,
  endpoints: (builder) => ({
    newsApi: builder.query({
      query: () => ``
    })
  })
});

export const { useNewsApiQuery } = apiNewsSlice;
