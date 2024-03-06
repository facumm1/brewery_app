import {useCallback, useState} from 'react';

type usePaginationHook = {
  pagination: number;
  handlePagination: () => void;
};

export const usePagination = (): usePaginationHook => {
  const [pagination, setPagination] = useState<number>(0);

  const handlePagination = useCallback(() => {
    setPagination((prevPag: number) => (prevPag += 1));
  }, []);

  return {pagination, handlePagination};
};
