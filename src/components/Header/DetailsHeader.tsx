import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../../theme/colors';
import {useNavigate, useToggle} from '../../hooks';
import {BreweryTypes} from '../../types';

export const DetailsHeader: React.FC<{breweryData: BreweryTypes}> = ({
  breweryData,
}) => {
  const {goBackNav} = useNavigate();
  const {on, setToggle} = useToggle();
  const {name, state} = breweryData;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={goBackNav} style={styles.backBtn}>
          <AntDesign style={{color: colors.black}} name="arrowleft" size={30} />
        </TouchableOpacity>

        <Text style={styles.title}>Brewery details</Text>
      </View>

      <View style={styles.middle}>
        <View style={styles.stateBox}>
          <Text style={styles.state}>{state}</Text>
        </View>

        <TouchableOpacity style={styles.favBtn} onPress={setToggle}>
          <Ionicons
            style={styles.favIcon}
            name={on ? 'heart' : 'heart-outline'}
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
  backBtn: {position: 'absolute', left: 15, top: 10, zIndex: 1},
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
