import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {colors} from '../theme/colors';
import {FavouritesFlatlist} from '../components/Flatlist';

export const FavouritesScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Favourite breweries</Text>

        <View style={styles.flatlistBox}>
          <FavouritesFlatlist />
        </View>
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
  flatlistBox: {
    backgroundColor: colors.black,
    marginBottom: 35,
    height: '94%',
  },
});
