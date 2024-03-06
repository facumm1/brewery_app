import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SearchedFlatlist} from '../components/Flatlist';
import {SearchText} from '../components/Text/SearchText';
import {SearchBar} from '../components/Bars/SearchBar';

import {useFilterByNameQuery} from '../redux/breweryApi';
import {setSearchedBreweries} from '../redux/searchedSlice';
import {findFavouriteBreweries} from '../util/findFavourites';
import {RootState} from '../types';
import {useDebouncedValue, useField, useFilter} from '../hooks';
import {colors} from '../theme/colors';

export const SearchScreen: React.FC = () => {
  const {
    keepWriting,
    showSearchResults,
    fieldValue,
    onChangeText,
    clearResults,
  } = useField();
  const {filterValue, handleFilterValue} = useFilter();
  const {debouncedValue} = useDebouncedValue(fieldValue);
  const dispatch = useDispatch();

  const {data, isFetching, isLoading} = useFilterByNameQuery({
    value: debouncedValue,
    filterType: filterValue,
  });
  const {favouritesData} = useSelector(
    (state: RootState) => state.favouritesData,
  );

  const checkAddedFavourites = useCallback(() => {
    if (favouritesData.length > 0 && data) {
      const updatedData = findFavouriteBreweries(data, favouritesData);

      dispatch(setSearchedBreweries(updatedData));
    } else {
      dispatch(setSearchedBreweries(data));
    }
  }, [data, dispatch, favouritesData]);

  useEffect(() => {
    if (!isLoading) {
      checkAddedFavourites();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Search for breweries</Text>

        <SearchBar
          filterValue={filterValue}
          fieldValue={fieldValue}
          showSearchResults={showSearchResults}
          onChangeText={onChangeText}
          clearResults={clearResults}
          handleFilterValue={handleFilterValue}
        />

        {showSearchResults ? (
          <SearchedFlatlist isLoading={isFetching || debouncedValue === null} />
        ) : (
          <SearchText keepWriting={keepWriting} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.black},
  container: {
    alignSelf: 'center',
    backgroundColor: colors.black,
    width: '100%',
    marginBottom: 50,
  },
  title: {
    fontSize: 22,
    color: colors.yellow,
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '500',
  },
});
