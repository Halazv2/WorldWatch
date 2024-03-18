import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    headers.set('X-Requested-With', 'XMLHttpRequest');
    return headers;
  },
  credentials: 'include'
});

export const apiAuthSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ['user'],

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials
      }),
      invalidatesTags: ['user']
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: '/register',
        method: 'POST',
        body: credentials
      }),
      invalidatesTags: ['user']
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST'
      }),
      invalidatesTags: ['user']
    }),
    checkAuth: builder.query({
      query: () => '/user',
      providesTags: ['user']
    })
  })
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useCheckAuthQuery } = apiAuthSlice;
