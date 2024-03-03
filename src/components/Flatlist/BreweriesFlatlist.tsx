import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {Thumbnail} from '../Thumbnail/Thumbnail';
import {Loader} from '../Loader/Loader';
import {RootState} from '../../types';
import {colors} from '../../theme/colors';

export const BreweriesFlatlist: React.FC = () => {
  const {breweriesData} = useSelector(
    (state: RootState) => state.breweriesData,
  );

  return (
    <FlatList
      style={{backgroundColor: colors.black}}
      data={breweriesData}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <Thumbnail item={item} />}
      ListEmptyComponent={Loader}
    />
  );
};
