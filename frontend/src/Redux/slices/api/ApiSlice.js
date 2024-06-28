import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_APP_URL;
const baseQuery = fetchBaseQuery({
  baseUrl: "",
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes:['User'], // caching
    endpoints:(builder) => ({})
});

