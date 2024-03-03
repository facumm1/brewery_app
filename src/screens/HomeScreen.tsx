import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {BreweriesFlatlist} from '../components/Flatlist';
import {colors} from '../theme/colors';

export const HomeScreen: React.FC<{handlePagination: () => void}> = ({
  handlePagination,
}) => {
  //TODO fix empty screen
  //Fixed
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for breweries</Text>

      <View style={styles.flatlistBox}>
        <BreweriesFlatlist handlePagination={handlePagination} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  flatlistBox: {backgroundColor: colors.black, marginBottom: 35},
});
