import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {Thumbnail} from '../Thumbnail/Thumbnail';
import {Loader} from '../Loader/Loader';
import {NoBreweriesFound} from '../Alert';

import {colors} from '../../theme/colors';
import {RootState} from '../../types';

type Props = {
  isLoading: boolean;
};

export const SearchedFlatlist: React.FC<Props> = React.memo(({isLoading}) => {
  const {searchedData} = useSelector((state: RootState) => state.searchedData);

  return (
    <FlatList
      style={{backgroundColor: colors.black}}
      data={searchedData}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <Thumbnail item={item} />}
      ListEmptyComponent={isLoading ? <Loader /> : <NoBreweriesFound />}
    />
  );
});
