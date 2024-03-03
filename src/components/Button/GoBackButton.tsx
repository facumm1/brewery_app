import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '../../theme/colors';
import {useNavigate} from '../../hooks';

export const GoBackButton: React.FC = () => {
  const {goBackNav} = useNavigate();

  return (
    <TouchableOpacity onPress={goBackNav} style={styles.backBtn}>
      <AntDesign style={{color: colors.black}} name="arrowleft" size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backBtn: {position: 'absolute', left: 15, top: 10, zIndex: 1},
});
