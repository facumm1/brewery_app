import {createSlice} from '@reduxjs/toolkit';
import {BreweryTypes} from '../types';

export const breweriesSlice = createSlice({
  name: 'breweriesData',
  initialState: {
    breweriesData: [] as BreweryTypes[],
    isLoading: true as boolean,
  },
  reducers: {
    setBreweries: (state, action) => {
      state.breweriesData = action.payload;
      state.isLoading = false;
    },
    toggleBrewery: (state, action) => {
      const id = action.payload;

      const updatedData = state.breweriesData.map(brewery => {
        if (brewery.id === id) {
          return {...brewery, isFavourite: !brewery.isFavourite};
        }
        return brewery;
      });

      state.breweriesData = updatedData;
    },
  },
});

export const {setBreweries, toggleBrewery} = breweriesSlice.actions;
