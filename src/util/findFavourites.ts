import {BreweryTypes} from '../types';

export const findFavouriteBreweries = (
  data: BreweryTypes[],
  favsData: BreweryTypes[],
) => {
  return data.map((searchedBrewery: BreweryTypes) => {
    const matchingFav = favsData.find(
      (favBrewery: BreweryTypes) => favBrewery.id === searchedBrewery.id, //Check if new breweries are already added to favourites
    );

    return matchingFav
      ? {...searchedBrewery, id: matchingFav.id, isFavourite: true}
      : searchedBrewery;
  });
};
