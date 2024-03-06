import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {CancelSearchButton} from '../Button/CancelSearchButton';
import {colors} from '../../theme/colors';
import {FilterDropdown} from '../Dropdown/FilterDropdown';

type Props = {
  fieldValue: string | null;
  showSearchResults: boolean;
  onChangeText: (text: string) => void;
  clearResults: () => void;
  filterValue: string;
  handleFilterValue: (filter: string) => void;
};

export const SearchBar: React.FC<Props> = ({
  fieldValue,
  showSearchResults,
  onChangeText,
  clearResults,
  filterValue,
  handleFilterValue,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons
          style={styles.icon}
          name="search"
          size={25}
          color={colors.white}
        />
        <TextInput
          autoCapitalize="none"
          value={fieldValue as string}
          style={styles.textInput}
          placeholder={
            filterValue === 'city' ? 'San Diego...' : 'Abbey Brewing...'
          }
          placeholderTextColor={'#b3b3b3'}
          onChangeText={onChangeText}
        />
      </View>

      {!showSearchResults ? (
        <FilterDropdown
          filterValue={filterValue}
          handleFilterValue={handleFilterValue}
        />
      ) : (
        <CancelSearchButton
          showSearchResults={showSearchResults}
          clearResults={clearResults}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
  },
  searchBar: {
    overflow: 'hidden',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#505050',
    borderRadius: 15,
    paddingVertical: 5,
    marginVertical: 5,
  },
  icon: {paddingHorizontal: 10},
  textInput: {fontSize: 16, color: colors.white},
});
