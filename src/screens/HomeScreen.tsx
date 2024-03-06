import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {useFetchBreweriesQuery} from '../redux/breweryApi';
import {BreweriesFlatlist} from '../components/Flatlist';
import {GoTopButton} from '../components/Button';
import {colors} from '../theme/colors';
import {usePagination, useScroll} from '../hooks';
import {setBreweries} from '../redux/breweriesSlice';

export const HomeScreen: React.FC = () => {
  const {pagination, handlePagination} = usePagination();
  const {showTopBtn, onScroll, flatListRef, scrollToTop} = useScroll();

  const {data, isLoading} = useFetchBreweriesQuery({page: pagination});
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setBreweries(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);

  //Fixed
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Explore breweries</Text>

        <View style={styles.flatlistBox}>
          {showTopBtn && <GoTopButton scrollToTop={scrollToTop} />}

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
