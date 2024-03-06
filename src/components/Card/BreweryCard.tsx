import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Divider} from '../Divider/Divider';
import {colors} from '../../theme/colors';

type Props = {
  title: string;
  value: string;
};

export const BreweryCard: React.FC<Props> = React.memo(({title, value}) => {
  return (
    <View style={[styles.card, styles.shadow]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Divider />
      <Text style={styles.cardText}>{value}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  card: {
    backgroundColor: '#505050',
    width: '40%',
    marginHorizontal: 10,
    marginVertical: 12,
    borderRadius: 10,
  },
  cardTitle: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 5,
  },
  cardText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
    fontWeight: '600',
  },
});
