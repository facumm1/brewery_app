import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BreweryTypes} from '../../types';
import {colors} from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigate} from '../../hooks';

type Props = {
  item: BreweryTypes;
};

export const Thumbnail: React.FC<Props> = ({item}) => {
  const {name, street, city, state} = item;

  const {navigateTo} = useNavigate();

  return (
    <TouchableOpacity
      onPress={() => navigateTo('BreweryDetailsScreen', item)}
      style={styles.thumbnail}>
      <Ionicons name="beer-outline" size={30} style={styles.beerIcon} />

      <View style={styles.line} />

      <View style={styles.breweryInfo}>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
        <Text numberOfLines={1}>{street}</Text>
        <Text numberOfLines={1} style={styles.cityState}>
          {city}, {state}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: colors.yellow,
    borderRadius: 5,
    flexDirection: 'row',
    marginVertical: 10,
    width: '90%',
  },
  beerIcon: {paddingHorizontal: 10},
  line: {height: '75%', width: 2, backgroundColor: colors.black},
  breweryInfo: {paddingVertical: 10, paddingLeft: 7.5, flexShrink: 1},
  name: {fontSize: 18, fontWeight: '600'},
  cityState: {fontWeight: '500'},
});
