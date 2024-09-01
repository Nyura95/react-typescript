import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from '../store';

export const baseUrl = process.env.REACT_BASEPATH;

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  timeout: 5000,
  prepareHeaders: (headers /*{ getState }*/) => {
    // const token = getState() as RootState;
    // if (token) headers.set('Authorization', `Bearer ${token}`);

    return headers;
  }
});

export default createApi({
  reducerPath: 'reducerApi',
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({})
});
