import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BreweryTypes} from '../types';

const baseUrl = 'https://api.openbrewerydb.org/v1';

type ApiResponse = BreweryTypes[];

export const breweryApi = createApi({
  reducerPath: 'breweryFetchedData',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    fetchBreweries: builder.query({
      query: ({limit}) => `/breweries?per_page=${limit}`,
      transformResponse: (res: ApiResponse) => {
        const breweries = res.map((brewery: BreweryTypes) => ({
          ...brewery,
          isFavourite: false,
        }));

        return breweries;
      },
    }),
  }),
});

export const {useFetchBreweriesQuery} = breweryApi;
