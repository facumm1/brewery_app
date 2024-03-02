import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BreweryDetailsScreen, HomeScreen} from '../screens';
import {BreweryTypes} from '../types';

export type StackParamList = {
  HomeScreen: undefined;
  BreweryDetailsScreen: BreweryTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const HomeStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="BreweryDetailsScreen"
        component={BreweryDetailsScreen}
      />
    </Stack.Navigator>
  );
};
