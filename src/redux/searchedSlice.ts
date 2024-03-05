import {createSlice} from '@reduxjs/toolkit';
import {BreweryTypes} from '../types';

export const searchedSlice = createSlice({
  name: 'searchedData',
  initialState: {
    searchedData: [] as BreweryTypes[],
    isLoading: true as boolean,
  },
  reducers: {
    setSearchedBreweries: (state, action) => {
      const newBreweries = action.payload;

      state.searchedData = [...state.searchedData, ...newBreweries];

      state.isLoading = false;
    },
    toggleSearchedBrewery: (state, action) => {
      const id = action.payload;

      const updatedData = state.searchedData.map(brewery => {
        if (brewery.id === id) {
          return {...brewery, isFavourite: !brewery.isFavourite};
        }
        return brewery;
      });

      state.searchedData = updatedData;
    },
  },
});

export const {setSearchedBreweries, toggleSearchedBrewery} =
  searchedSlice.actions;
