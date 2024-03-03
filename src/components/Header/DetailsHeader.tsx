import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../../theme/colors';
import {BreweryTypes} from '../../types';
import {GoBackButton} from '../Button';

type Props = {
  breweryData: BreweryTypes;
  handleFavourite: () => void;
};

export const DetailsHeader: React.FC<Props> = ({
  breweryData,
  handleFavourite,
}) => {
  const {name, state, isFavourite} = breweryData;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <GoBackButton />

        <Text style={styles.title}>Brewery details</Text>
      </View>

      <View style={styles.middle}>
        <View style={styles.stateBox}>
          <Text style={styles.state}>{state}</Text>
        </View>

        <TouchableOpacity style={styles.favBtn} onPress={handleFavourite}>
          <Ionicons
            style={styles.favIcon}
            name={isFavourite ? 'heart' : 'heart-outline'}
            color={colors.yellow}
            size={30}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.breweryName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  top: {flexDirection: 'row', justifyContent: 'center'},
  title: {
    color: colors.black,
    fontSize: 18,
    paddingTop: 15,
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  stateBox: {
    backgroundColor: colors.black,
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  state: {
    backgroundColor: colors.black,
    color: colors.white,
    fontWeight: '600',
  },
  favBtn: {
    backgroundColor: colors.black,
    alignItems: 'center',
    borderRadius: 25,
  },
  favIcon: {padding: 5},
  breweryName: {
    fontSize: 22,
    color: colors.black,
    fontWeight: '600',
    marginVertical: 10,
    marginLeft: 20,
  },
});
