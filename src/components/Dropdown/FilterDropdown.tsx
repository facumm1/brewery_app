import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown';
import {colors} from '../../theme/colors';
import {dropdownValues} from '../../util/dropdownValues';

type Props = {
  filterValue: string;
  handleFilterValue: (filter: string) => void;
};

export const FilterDropdown: React.FC<Props> = ({
  filterValue,
  handleFilterValue,
}) => {
  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        selectedTextStyle={styles.selectedText}
        iconStyle={{}}
        labelField="label"
        valueField="value"
        data={dropdownValues}
        value={filterValue}
        onChange={item => handleFilterValue(item.value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    flex: 0.35,
  },
  dropdown: {
    flex: 1,
    backgroundColor: colors.yellow,
    borderRadius: 25,
    paddingVertical: 0,
  },
  selectedText: {
    color: colors.white,
    textAlign: 'center',
  },
});
