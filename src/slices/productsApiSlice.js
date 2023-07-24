import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({keyword}) => {
        return {
          url: '/products',
          params: { q: keyword },
        };
      },
      keepUnusedDataFor: 5,
      providesTags: ['Products'],
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `products/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
} = productsApiSlice;
