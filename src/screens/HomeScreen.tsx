import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {BreweriesFlatlist} from '../components/Flatlist';
import {GoTopButton} from '../components/Button';
import {colors} from '../theme/colors';
import {useScroll} from '../hooks';

export const HomeScreen: React.FC<{handlePagination: () => void}> = ({
  handlePagination,
}) => {
  const {showTopBtn, onScroll, flatListRef, scrollToTop} = useScroll();

  //TODO fix empty screen
  //Fixed
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Search for breweries</Text>

        <View style={styles.flatlistBox}>
          <GoTopButton showTopBtn={showTopBtn} scrollToTop={scrollToTop} />

          <BreweriesFlatlist
            flatListRef={flatListRef}
            handlePagination={handlePagination}
            onScroll={onScroll}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.black},
  container: {
    alignSelf: 'center',
    backgroundColor: colors.black,
    width: '100%',
    marginBottom: 50,
  },
  title: {
    fontSize: 22,
    color: colors.yellow,
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '500',
  },
  flatlistBox: {
    backgroundColor: colors.black,
    marginBottom: 35,
    height: '94%',
  },
});
