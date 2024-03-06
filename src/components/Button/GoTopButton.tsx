import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {colors} from '../../theme/colors';

type Props = {
  scrollToTop: () => void;
};

export const GoTopButton: React.FC<Props> = React.memo(({scrollToTop}) => {
  return (
    <TouchableOpacity onPress={scrollToTop} style={styles.btn}>
      <MaterialIcons
        style={styles.icon}
        name="keyboard-double-arrow-up"
        size={30}
        color={colors.yellow}
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    backgroundColor: '#404040',
    position: 'absolute',
    borderRadius: 25,
    top: 5,
    zIndex: 1,
  },
  icon: {padding: 5, textAlign: 'center'},
});
