import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme/colors';

export const NoBreweriesFound: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No breweries found.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginLeft: 20},
  text: {fontSize: 16, color: colors.white, paddingVertical: 10},
});
