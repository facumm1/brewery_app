import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {breweryApi} from './breweryApi';
import {breweriesSlice} from './breweriesSlice';
import {favouritesSlice} from './favouritesSlice';

export const store = configureStore({
  reducer: {
    [breweryApi.reducerPath]: breweryApi.reducer,
    breweriesData: breweriesSlice.reducer,
    favouritesData: favouritesSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(breweryApi.middleware),
});

setupListeners(store.dispatch);
