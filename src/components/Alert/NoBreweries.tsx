import React from 'react';
import {Text, View} from 'react-native';

import {colors} from '../../theme/colors';

export const NoBreweries: React.FC = () => {
  return (
    <View>
      <Text style={{fontSize: 18, color: colors.white, paddingVertical: 10}}>
        There is no breweries to show...
      </Text>
    </View>
  );
};
