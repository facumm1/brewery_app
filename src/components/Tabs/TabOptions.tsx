import React from 'react';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../../theme/colors';

type OptionsParams = {
  focused: boolean;
};

export const HomeStackOptions = {
  tabBarIcon: ({focused}: OptionsParams) => (
    <Ionicons
      name={focused ? 'beer' : 'beer-outline'}
      color={colors.yellow}
      size={25}
    />
  ),
  tabBarLabel: () => <Text style={{color: colors.yellow}}>Breweries</Text>,
};

export const FavouriteStackOptions = {
  tabBarIcon: ({focused}: OptionsParams) => (
    <Ionicons
      name={focused ? 'heart' : 'heart-outline'}
      color={colors.yellow}
      size={25}
    />
  ),
  tabBarLabel: () => <Text style={{color: colors.yellow}}>Favourites</Text>,
};
