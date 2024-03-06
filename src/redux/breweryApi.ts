import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BreweryTypes} from '../types';

const baseUrl = 'https://api.openbrewerydb.org/v1';

type ApiResponse = BreweryTypes[];

export const breweryApi = createApi({
  reducerPath: 'breweryFetchedData',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    fetchBreweries: builder.query({
      query: ({page}) => `/breweries?page=${page}&per_page=10`,
      transformResponse: (res: ApiResponse) => {
        const breweries = res.map((brewery: BreweryTypes) => ({
          ...brewery,
          isFavourite: false,
        }));

        return breweries;
      },
    }),
    filterByName: builder.query({
      query: ({value, filterType}) => {
        if (filterType === 'city') {
          return `/breweries?by_city=${value}&page=1&per_page=10`;
        }

        return `/breweries?by_name=${value}&page=1&per_page=10`;
      },
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

export const {useFetchBreweriesQuery, useFilterByNameQuery} = breweryApi;
