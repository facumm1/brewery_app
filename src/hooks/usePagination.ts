import {useState} from 'react';

type usePaginationHook = {
  pagination: number;
  handlePagination: () => void;
};

export const usePagination = (): usePaginationHook => {
  const [pagination, setPagination] = useState<number>(0);

  const handlePagination = () => {
    setPagination((prevPag: number) => (prevPag += 10));
  };

  return {pagination, handlePagination};
};
