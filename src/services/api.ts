import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Product = {
  id: number;
  price: number;
};

type PurchaseResponse = {
  orderId: string;
};

type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: string;
      complement: string;
    };
  };
  payment: {
    card: {
      name?: string;
      number?: string;
      code?: number;
      expires?: {
        month: number;
        year: number;
      };
    };
  };
};

// Criação da API usando Redux Toolkit Query
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedPrato: builder.query<Prato[], void>({
      query: () => '/restaurantes'
    }),
    getPrato: builder.query<Prato, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
});

// Exporta os hooks gerados pela API
export const {
  useGetFeaturedPratoQuery,
  useGetPratoQuery,
  usePurchaseMutation
} = api;

export default api;
