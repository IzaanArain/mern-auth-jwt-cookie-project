import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = "http://localhost:8000";
const baseQuery = fetchBaseQuery({
  baseUrl: "",
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes:['User'], // caching
    endpoints:(builder) => ({})
});

