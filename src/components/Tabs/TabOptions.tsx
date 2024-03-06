import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../../theme/colors';

type OptionsParams = {
  focused: boolean;
};

export const HomeStackOptions = {
  tabBarIcon: ({focused}: OptionsParams) => (
    <Ionicons
      style={styles.icon}
      name={focused ? 'beer' : 'beer-outline'}
      color={colors.yellow}
      size={25}
    />
  ),
  tabBarLabel: () => <Text style={styles.text}>Breweries</Text>,
};

export const FavouriteStackOptions = {
  tabBarIcon: ({focused}: OptionsParams) => (
    <Ionicons
      style={styles.icon}
      name={focused ? 'heart' : 'heart-outline'}
      color={colors.yellow}
      size={25}
    />
  ),
  tabBarLabel: () => <Text style={styles.text}>Favourites</Text>,
};

export const SearchStackOptions = {
  tabBarIcon: ({focused}: OptionsParams) => (
    <Ionicons
      style={styles.icon}
      name={focused ? 'search-sharp' : 'search-outline'}
      color={colors.yellow}
      size={25}
    />
  ),
  tabBarLabel: () => <Text style={styles.text}>Search</Text>,
};

const styles = StyleSheet.create({
  icon: {paddingTop: 5},
  text: {color: colors.yellow, paddingVertical: 5},
});
