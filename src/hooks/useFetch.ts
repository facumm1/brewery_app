import axios from 'axios';
import {useEffect, useState} from 'react';

const url = 'https://api.openbrewerydb.org/v1/breweries?per_page=10';

export const useFetch = () => {
  const [response, setResponse] = useState({
    data: [],
    isLoading: true,
  });

  const fetchBreweries = async () => {
    try {
      const res = await axios.get(url);
      setResponse({data: res.data, isLoading: false});
    } catch (err) {
      console.error('Error while fetching breweries:', err);
    }
  };

  useEffect(() => {
    fetchBreweries();
  }, []);

  return {...response};
};
