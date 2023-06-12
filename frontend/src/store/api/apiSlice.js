import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: [''],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts'
    })
  })
});
