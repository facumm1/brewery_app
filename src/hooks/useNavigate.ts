import {NavigationProp, useNavigation} from '@react-navigation/native';

import {StackParamList} from '../navigation/HomeStackNavigator';
import {BreweryTypes} from '../types';

type UseNavigateHook = {
  navigateTo: (screenName: ScreenName, data: BreweryTypes | any) => void;
  goBackNav: () => void;
};

type ScreenName = keyof StackParamList;

export type NavigateProp = NavigationProp<StackParamList, ScreenName>;

export const useNavigate = (): UseNavigateHook => {
  //TODO fix types
  const navigation = useNavigation<NavigateProp>();

  const navigateTo = (screenName: ScreenName, data: BreweryTypes | any) => {
    navigation.navigate(screenName, data);
  };

  const goBackNav = () => {
    navigation.goBack();
  };

  return {navigateTo, goBackNav};
};
