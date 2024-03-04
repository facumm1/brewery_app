import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {colors} from '../../theme/colors';

type Props = {
  scrollToTop: () => void;
  showTopBtn: boolean;
};

export const GoTopButton: React.FC<Props> = ({scrollToTop, showTopBtn}) => {
  return (
    <TouchableOpacity
      onPress={scrollToTop}
      style={[styles.btn, {zIndex: showTopBtn ? 1 : 0}]}>
      <MaterialIcons
        style={styles.icon}
        name="keyboard-double-arrow-up"
        size={30}
        color={colors.yellow}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    backgroundColor: '#404040',
    position: 'absolute',
    borderRadius: 25,
    top: 5,
  },
  icon: {padding: 5, textAlign: 'center'},
});
