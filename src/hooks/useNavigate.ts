import {NavigationProp, useNavigation} from '@react-navigation/native';

import {StackParamList} from '../navigation/HomeStackNavigator';
import {BreweryTypes} from '../types';

type UseNavigateHook = {
  navigateTo: (screenName: ScreenName, data: BreweryTypes | any) => void;
  goBackNav: () => void;
  updateFavIcon: (brewery: BreweryTypes) => void;
};

type ScreenName = keyof StackParamList;

export type NavigateProp = NavigationProp<StackParamList, ScreenName>;

export const useNavigate = (): UseNavigateHook => {
  const navigation = useNavigation<NavigateProp>();

  const navigateTo = (screenName: ScreenName, data: BreweryTypes | any) => {
    navigation.navigate(screenName, data);
  };

  const goBackNav = () => {
    navigation.goBack();
  };

  const updateFavIcon = (brewery: BreweryTypes) => {
    navigation.setParams({...brewery, isFavourite: !brewery.isFavourite});
  };

  return {navigateTo, goBackNav, updateFavIcon};
};
