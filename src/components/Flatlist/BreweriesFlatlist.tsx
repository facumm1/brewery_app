import React from 'react';
import {FlatList} from 'react-native';

import {Thumbnail} from '../Thumbnail/Thumbnail';
import {Loader} from '../Loader/Loader';
import {BreweryTypes} from '../../types';
import {colors} from '../../theme/colors';

type Props = {
  data: BreweryTypes[];
};

export const BreweriesFlatlist: React.FC<Props> = ({data}) => {
  return (
    <FlatList
      style={{backgroundColor: colors.black}}
      data={data}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <Thumbnail item={item} />}
      ListEmptyComponent={Loader}
    />
  );
};
