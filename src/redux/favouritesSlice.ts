import {createSlice} from '@reduxjs/toolkit';
import {BreweryTypes} from '../types';

export const favouritesSlice = createSlice({
  name: 'favouritesData',
  initialState: {
    favouritesData: [] as BreweryTypes[],
  },
  reducers: {
    addFav: (state, action) => {
      const articleToAdd = action.payload;

      state.favouritesData = [
        ...state.favouritesData,
        {...articleToAdd, isFavourite: !articleToAdd.isFavourite},
      ];
    },
    deleteFav: (state, action) => {
      const id = action.payload;
      const updatedData = state.favouritesData.filter(fav => fav.id !== id);
      state.favouritesData = updatedData;
    },
  },
});

export const {addFav, deleteFav} = favouritesSlice.actions;
