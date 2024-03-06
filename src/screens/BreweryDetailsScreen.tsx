import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {DetailsHeader} from '../components/Header/DetailsHeader';
import {WebsiteButton} from '../components/Button/WebsiteButton';
import {BreweryCard} from '../components/Card/BreweryCard';

import {colors} from '../theme/colors';
import {capitalizeFirstLetter} from '../util';
import {BreweryRouteType} from '../types';
import {useFavourite, useNavigate} from '../hooks';
import {checkText} from '../util/checkText';

type Props = {
  route: BreweryRouteType;
};

export const BreweryDetailsScreen: React.FC<Props> = ({route}) => {
  const {id, street, city, brewery_type, website_url, phone, isFavourite} =
    route.params;

  const isFocused = useIsFocused();
  const {goBackNav, updateFavIcon} = useNavigate();
  const {addToFavourites, removeFromFavourites} = useFavourite();

  const handleFavourite = () => {
    updateFavIcon(route.params); //Updates isFavourite from route.params

    if (isFavourite) {
      removeFromFavourites(id); //Remove brewery from favsData
    } else {
      addToFavourites(route.params); //Add brewery to favsData
    }
  };

  const cards = [
    {title: 'City', value: checkText(city)},
    {title: 'Brewery Type', value: capitalizeFirstLetter(brewery_type)},
    {title: 'Phone', value: checkText(phone as string)},
    {title: 'Address', value: checkText(street)},
  ];

  useEffect(() => {
    if (!isFocused) {
      goBackNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <DetailsHeader
          breweryData={route.params}
          handleFavourite={handleFavourite}
        />

        {/* Info */}
        <View style={styles.row}>
          {cards.map(({title, value}) => (
            <BreweryCard key={title} title={title} value={value as string} />
          ))}
        </View>

        {/* Go to web */}
        <WebsiteButton website_url={website_url} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.yellow},
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
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    flexWrap: 'wrap',
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
