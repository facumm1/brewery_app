import {useState} from 'react';
import {dropdownValues} from '../util/dropdownValues';

export const useFilter = () => {
  const [filterValue, setFilterValue] = useState<string>(
    dropdownValues[0].value,
  );

  const handleFilterValue = (filter: string) => setFilterValue(filter);

  return {filterValue, handleFilterValue};
};
