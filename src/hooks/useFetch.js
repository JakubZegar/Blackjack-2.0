import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url, options = null) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {(    

      axios.get(url).then((response) =>{
        setData(response.data)
        setLoaded(true);    
      }).catch((error) => {
        setError(() => {return error})
      })
    )() }, [options, url]);

  return {data, error, loaded}
}
export default useFetch;