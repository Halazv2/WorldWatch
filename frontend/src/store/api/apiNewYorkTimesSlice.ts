import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_NEWYORKTIMES_API_URL
});

export const apiNewYorkTimesSlice = createApi({
  reducerPath: 'apiNewYorkTimesSlice',
  baseQuery,
  endpoints: (builder) => ({
    newYorkTimes: builder.query({
      query: (section) => ({ url: `${section}.json?api-key=${import.meta.env.VITE_NEWYORKTIMES_API_KEY}` })
    })
  })
});

export const { useNewYorkTimesQuery } = apiNewYorkTimesSlice;
