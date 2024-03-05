import {useEffect, useState} from 'react';

export const useDebouncedValue = (
  value: string | null = null,
  time: number = 500,
) => {
  const [debouncedValue, setDebouncedValue] = useState<string | null>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof value === 'string' && value.length >= 4) {
        setDebouncedValue(value);
        return;
      }

      if (typeof value === 'string' && value.length <= 3) {
        setDebouncedValue(null);
      }
    }, time);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return {debouncedValue};
};
