import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';

import {useFetchBreweriesQuery} from '../redux/breweryApi';
import {BreweryDetailsScreen, HomeScreen} from '../screens';
import {BreweryTypes} from '../types';
import {setBreweries} from '../redux/breweriesSlice';
import {usePagination} from '../hooks';

export type StackParamList = {
  HomeScreen: undefined;
  BreweryDetailsScreen: BreweryTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const HomeStackNavigator: React.FC = () => {
  const {pagination, handlePagination} = usePagination();
  const {data, isLoading} = useFetchBreweriesQuery({page: pagination});
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setBreweries(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="HomeScreen"
        children={() => <HomeScreen handlePagination={handlePagination} />}
      />
      <Stack.Screen
        name="BreweryDetailsScreen"
        component={BreweryDetailsScreen}
      />
    </Stack.Navigator>
  );
};
