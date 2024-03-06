import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BreweryDetailsScreen, SearchScreen} from '../screens';
import {BreweryTypes} from '../types';

export type StackParamList = {
  SearchScreen: undefined;
  BreweryDetailsScreen: BreweryTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const SearchStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen
        name="BreweryDetailsScreen"
        component={BreweryDetailsScreen}
      />
    </Stack.Navigator>
  );
};
