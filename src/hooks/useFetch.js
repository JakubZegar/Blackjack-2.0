import axios from 'axios';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options = null) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {(    

      axios.get(url).then((response) =>{
        setData(response.data)
        setLoaded(true);    
      } )
        // async function () {
        //     await fetch(url, options)
        //     .then(res => res.json())
        //     .then(data => {
        //         setData(data)
        //         setLoaded(true);    
        //     })
        //     .catch( error => setError(error) )
        // }
    )() }, [options, url]);

  return {data, error, loaded}
}
export default useFetch;