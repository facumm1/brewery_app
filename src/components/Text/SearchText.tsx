import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../theme/colors';

export const SearchText: React.FC<{keepWriting: boolean}> = React.memo(
  ({keepWriting}) => {
    return (
      <Text style={styles.writingAlert}>
        {keepWriting
          ? 'Keep on writing...'
          : 'Write something to start searching by name.'}
      </Text>
    );
  },
);

const styles = StyleSheet.create({
  writingAlert: {
    marginLeft: 30,
    marginTop: 10,
    color: colors.white,
    fontSize: 16,
  },
});
