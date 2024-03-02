import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {DetailsHeader} from '../components/Header/DetailsHeader';
import {WebsiteButton} from '../components/Button/WebsiteButton';
import {Divider} from '../components/Divider/Divider';

import {colors} from '../theme/colors';
import {capitalizeFirstLetter} from '../util';
import {BreweryRouteType} from '../types';

type Props = {
  route: BreweryRouteType;
};

export const BreweryDetailsScreen: React.FC<Props> = ({route}) => {
  const {street, city, brewery_type, website_url, phone} = route.params;

  //TODO send only necessary data to each component, review phone card, separate cards into one
  return (
    <View style={styles.container}>
      {/* Header */}
      <DetailsHeader breweryData={route.params} />

      {/* Info */}
      <View style={styles.row}>
        <View style={[styles.card, styles.shadow]}>
          <Text style={styles.cardTitle}>City</Text>
          <Divider />
          <Text style={styles.cardText}>{city}</Text>
        </View>

        <View style={[styles.card, styles.shadow]}>
          <Text style={styles.cardTitle}>Brewery Type</Text>
          <Divider />

          <Text style={styles.cardText}>
            {capitalizeFirstLetter(brewery_type)}
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={[styles.card, styles.shadow]}>
          <Text style={styles.cardTitle}>Phone</Text>
          <Divider />
          <Text style={styles.cardText}>{phone}</Text>
        </View>

        <View style={[styles.card, styles.shadow]}>
          <Text style={styles.cardTitle}>Address</Text>
          <Divider />
          <Text style={styles.cardText}>{street}</Text>
        </View>
      </View>

      {/* Go to web */}
      <WebsiteButton website_url={website_url} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.black},
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  card: {
    backgroundColor: '#505050',
    flex: 0.5,
    marginHorizontal: 10,
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
