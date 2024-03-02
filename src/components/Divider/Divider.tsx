import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../../theme/colors';

export const Divider: React.FC = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    height: 1,
    width: '90%',
  },
});
