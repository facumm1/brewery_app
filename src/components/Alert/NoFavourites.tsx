import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '../../theme/colors';

export const NoFavourites: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No favourite breweries to show.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginLeft: 20},
  text: {fontSize: 16, color: colors.white, paddingVertical: 10},
});
