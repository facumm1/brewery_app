import {useCallback, useState} from 'react';
import {dropdownValues} from '../util/dropdownValues';

export const useFilter = () => {
  const [filterValue, setFilterValue] = useState<string>(
    dropdownValues[0].value,
  );

  const handleFilterValue = useCallback(
    (filter: string) => setFilterValue(filter),
    [],
  );

  return {filterValue, handleFilterValue};
};
