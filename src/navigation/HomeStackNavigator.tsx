import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';

import {BreweryDetailsScreen, HomeScreen} from '../screens';
import {BreweryTypes} from '../types';
import {setBreweries} from '../redux/breweriesSlice';
import {useFetchBreweriesQuery} from '../redux/breweryApi';

export type StackParamList = {
  HomeScreen: undefined;
  BreweryDetailsScreen: BreweryTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const HomeStackNavigator: React.FC = () => {
  const {data, isLoading} = useFetchBreweriesQuery({});
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
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="BreweryDetailsScreen"
        component={BreweryDetailsScreen}
      />
    </Stack.Navigator>
  );
};
