import {useCallback, useState} from 'react';

type UseToggleHook = {
  on: boolean;
  setToggle: () => void;
};

const useToggle = (initialState = false): UseToggleHook => {
  const [on, toggle] = useState<boolean>(initialState);

  const setToggle = useCallback(() => {
    toggle(!on);
  }, [on]);

  return {on, setToggle};
};

export default useToggle;
