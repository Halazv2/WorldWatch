import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_GNEWS_API_URL
});

export const apiGNewsSlice = createApi({
  reducerPath: 'apiGNewsSlice',
  baseQuery,
  endpoints: (builder) => ({
    gNews: builder.query({
      query: (query) => `search?q=${query ? query : 'None'}&lang=en&country=us&max=10&apikey=${import.meta.env.VITE_GNEWS_API_KEY}`
    })
  })
});

export const { useGNewsQuery } = apiGNewsSlice;
