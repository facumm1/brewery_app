import {useDispatch} from 'react-redux';

import {BreweryTypes} from '../types';
import {toggleBrewery} from '../redux/breweriesSlice';
import {addFav, deleteFav} from '../redux/favouritesSlice';
import {toggleSearchedBrewery} from '../redux/searchedSlice';

type UseFavouriteHook = {
  addToFavourites: (brewery: BreweryTypes) => void;
  removeFromFavourites: (id: string) => void;
};

export const useFavourite = (): UseFavouriteHook => {
  const dispatch = useDispatch();

  const updateFavBrewery = (id: string) => {
    dispatch(toggleBrewery(id));
    dispatch(toggleSearchedBrewery(id));
  };

  const addToFavourites = (brewery: BreweryTypes) => {
    dispatch(addFav(brewery));
    updateFavBrewery(brewery.id);
  };

  const removeFromFavourites = (id: string) => {
    dispatch(deleteFav(id));
    updateFavBrewery(id);
  };

  return {addToFavourites, removeFromFavourites};
};
