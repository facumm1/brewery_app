import React from 'react';
import {FlatList} from 'react-native';

import {Thumbnail} from '../Thumbnail/Thumbnail';
import {Loader} from '../Loader/Loader';
import {BreweryTypes} from '../../types';

type Props = {
  data: BreweryTypes[];
};

export const BreweriesFlatlist: React.FC<Props> = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <Thumbnail item={item} />}
      ListEmptyComponent={Loader}
      style={{marginBottom: 30}}
    />
  );
};
