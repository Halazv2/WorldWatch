import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_GNEWS_API_URL + import.meta.env.VITE_GNEWS_API_KEY
});

export const apiGNewsSlice = createApi({
  reducerPath: 'apiGNewsSlice',
  baseQuery,
  endpoints: (builder) => ({
    gNews: builder.query({
      query: () => ``
    })
  })
});

export const { useGNewsQuery } = apiGNewsSlice;
