import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SearchedFlatlist} from '../components/Flatlist';
import {SearchText} from '../components/Text/SearchText';
import {SearchBar} from '../components/Bars/SearchBar';

import {colors} from '../theme/colors';
import {useDebouncedValue, useField} from '../hooks';
import {useFilterByNameQuery} from '../redux/breweryApi';
import {setSearchedBreweries} from '../redux/searchedSlice';
import {RootState} from '../types';
import {findFavouriteBreweries} from '../util/findFavourites';

export const SearchScreen: React.FC = () => {
  const {
    keepWriting,
    showSearchResults,
    fieldValue,
    onChangeText,
    clearResults,
  } = useField();

  const {debouncedValue} = useDebouncedValue(fieldValue);
  const {data, isLoading} = useFilterByNameQuery({name: debouncedValue});
  const {favouritesData} = useSelector(
    (state: RootState) => state.favouritesData,
  );

  const dispatch = useDispatch();

  const checkAddedFavourites = () => {
    if (favouritesData.length > 0 && data) {
      const updatedData = findFavouriteBreweries(data, favouritesData);

      dispatch(setSearchedBreweries(updatedData));
    } else {
      dispatch(setSearchedBreweries(data));
    }
  };

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
          fieldValue={fieldValue}
          showSearchResults={showSearchResults}
          onChangeText={onChangeText}
          clearResults={clearResults}
        />

        {showSearchResults ? (
          <SearchedFlatlist
            isLoading={debouncedValue === null ? true : false}
          />
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
