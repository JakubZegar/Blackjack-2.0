import { useState, useEffect } from 'react';
import { newDeckShuffledLink, decksCount } from '../const/api';

const useFetch = (url = newDeckShuffledLink + decksCount, options = null) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url, options]);
  return {data}
}
export default useFetch;