import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import {colors} from '../../theme/colors';

export const WebsiteButton: React.FC<{website_url: string}> = React.memo(
  ({website_url}) => {
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (website_url) {
            Linking.openURL(website_url);
          }
        }}>
        <Text style={styles.text}>Visit website</Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  btn: {
    borderRadius: 12,
    alignSelf: 'center',
    width: '50%',
    backgroundColor: '#404040',
    paddingVertical: 7.5,
    marginTop: 25,
  },
  text: {
    color: colors.yellow,
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
});
