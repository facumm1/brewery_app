import {useRef, useState} from 'react';
import {FlatList} from 'react-native';

export const useScroll = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = (event: any) => {
    const {contentOffset} = event.nativeEvent;

    if (contentOffset.y > 1000) {
      setShowTopBtn(true);
      return;
    }

    if (contentOffset.y < 1000) {
      setShowTopBtn(false);
      return;
    }
  };

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index: 0, animated: true});
    }
  };

  return {showTopBtn, onScroll, flatListRef, scrollToTop};
};
