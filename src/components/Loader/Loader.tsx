import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {colors} from '../../theme/colors';

export const Loader: React.FC = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} color={colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {paddingTop: 20},
});
