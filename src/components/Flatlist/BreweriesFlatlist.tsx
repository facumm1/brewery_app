import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {Thumbnail} from '../Thumbnail/Thumbnail';
import {Loader} from '../Loader/Loader';
import {RootState} from '../../types';
import {colors} from '../../theme/colors';

type Props = {
  handlePagination: () => void;
  flatListRef: React.RefObject<FlatList>;
  onScroll: (event: any) => void;
};

export const BreweriesFlatlist: React.FC<Props> = ({
  handlePagination,
  flatListRef,
  onScroll,
}) => {
  const {breweriesData} = useSelector(
    (state: RootState) => state.breweriesData,
  );

  const renderFooter = breweriesData.length > 0 ? <Loader /> : <></>;

  return (
    <FlatList
      ref={flatListRef}
      style={{backgroundColor: colors.black}}
      data={breweriesData}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <Thumbnail item={item} />}
      ListEmptyComponent={Loader}
      onEndReached={handlePagination}
      ListFooterComponent={renderFooter}
      onScroll={onScroll}
    />
  );
};
