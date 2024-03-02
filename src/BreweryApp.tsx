import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {BottomTabNavigator} from './navigation';

export const BreweryApp: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
