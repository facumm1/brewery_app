import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BreweryDetailsScreen, FavouritesScreen} from '../screens';
import {BreweryTypes} from '../types';

export type StackParamList = {
  FavouritesScreen: undefined;
  BreweryDetailsScreen: BreweryTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const FavouriteStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} />
      <Stack.Screen
        name="BreweryDetailsScreen"
        component={BreweryDetailsScreen}
      />
    </Stack.Navigator>
  );
};
