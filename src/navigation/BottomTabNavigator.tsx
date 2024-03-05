import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeStackNavigator,
  FavouriteStackNavigator,
  SearchStackNavigator,
} from './';
import {colors} from '../theme/colors';
import {
  FavouriteStackOptions,
  HomeStackOptions,
  SearchStackOptions,
} from '../components/Tabs/TabOptions';

export type TabParamList = {
  HomeStackNavigator: undefined;
  FavouriteStackNavigator: undefined;
  SearchStackNavigator: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.black,
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.black,
          height: 90,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={HomeStackOptions}
      />
      <Tab.Screen
        name="SearchStackNavigator"
        component={SearchStackNavigator}
        options={SearchStackOptions}
      />
      <Tab.Screen
        name="FavouriteStackNavigator"
        component={FavouriteStackNavigator}
        options={FavouriteStackOptions}
      />
    </Tab.Navigator>
  );
};
