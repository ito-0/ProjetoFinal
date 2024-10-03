import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Prato } from '../pages/Home';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getFeaturedPrato: builder.query<Prato[], void>({
      query: () => ''
    }),
    getPrato: builder.query<Prato, string>({
      query: (id) => `/${id}`
    })
  })
});

export const { useGetFeaturedPratoQuery, useGetPratoQuery } = api;

export default api;
