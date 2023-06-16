import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_NEWS_API_URL
});

export const apiNewsSlice = createApi({
  reducerPath: 'apiNewsSlice',
  baseQuery,
  endpoints: (builder) => ({
    newsApi: builder.query({
      query: (query) => `${query ? 'top-headlines?' : 'everything?'}q=${query ? query : 'None'}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
    })
  })
});

export const { useNewsApiQuery } = apiNewsSlice;
