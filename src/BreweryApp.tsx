import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useFetch} from './hooks/useFetch';
import {colors} from './theme/colors';
import {BreweriesFlatlist} from './components/Flatlist/BreweriesFlatlist';

export const BreweryApp: React.FC = () => {
  const {data} = useFetch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brewery list</Text>

      <BreweriesFlatlist data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  //container: {},
  container: {alignSelf: 'center', width: '100%'},
  title: {
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '500',
  },
});
