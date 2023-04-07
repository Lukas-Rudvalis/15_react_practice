// custom hook yra funkcija kuri gali naudoti hooks

import axios from 'axios';
import { useEffect, useState } from 'react';

// butinai turi prasideti zodeliu 'use'
function useGetData(url, initValue = []) {
  const [data, setData] = useState(initValue);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const url = `http://localhost:5000/posts/${postId}`;
    setIsLoading(true);
    axios
      .get(url)
      .then((resp) => {
        console.log('resp.data ===', resp.data);
        setData(resp.data);
      })
      .catch((err) => {
        console.warn('err ===', err);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return [data, setData, error, isLoading];
}

export default useGetData;
