import {useCallback, useRef, useState} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

export const useScroll = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {contentOffset} = event.nativeEvent;

      if (contentOffset.y > 1000) {
        setShowTopBtn(true);
        return;
      }

      if (contentOffset.y < 1000) {
        setShowTopBtn(false);
        return;
      }
    },
    [],
  );

  const scrollToTop = useCallback(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index: 0, animated: true});
    }
  }, []);

  return {showTopBtn, onScroll, flatListRef, scrollToTop};
};
