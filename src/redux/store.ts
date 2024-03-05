import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {breweryApi} from './breweryApi';
import {breweriesSlice} from './breweriesSlice';
import {favouritesSlice} from './favouritesSlice';
import {searchedSlice} from './searchedSlice';

export const store = configureStore({
  reducer: {
    [breweryApi.reducerPath]: breweryApi.reducer,
    breweriesData: breweriesSlice.reducer,
    favouritesData: favouritesSlice.reducer,
    searchedData: searchedSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(breweryApi.middleware),
});

setupListeners(store.dispatch);
