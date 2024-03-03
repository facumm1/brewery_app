import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {colors} from '../../theme/colors';
import {Thumbnail} from '../Thumbnail/Thumbnail';
import {NoFavourites} from '../Alert';
import {RootState} from '../../types';

export const FavouritesFlatlist: React.FC = () => {
  const {favouritesData} = useSelector(
    (state: RootState) => state.favouritesData,
  );

  return (
    <FlatList
      style={{backgroundColor: colors.black}}
      data={favouritesData}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <Thumbnail item={item} />}
      ListEmptyComponent={NoFavourites}
    />
  );
};
