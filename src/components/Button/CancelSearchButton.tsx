import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../theme/colors';

type Props = {
  showSearchResults: boolean;
  clearResults: () => void;
};

export const CancelSearchButton: React.FC<Props> = ({
  showSearchResults,
  clearResults,
}) => {
  return (
    <>
      {showSearchResults && (
        <TouchableOpacity style={styles.btn} onPress={clearResults}>
          <Text style={{color: colors.white}}>Cancel</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
