import { useState, useEffect } from 'react';

const useFetch = (url, options = null) => {
  const [load, setLoad] = useState(false)

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {(    
        async function () {
            await fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoaded(true);    
            })
            .catch( error => setError(error) )
        }
    )() }, []);

  return {data, error, loaded}
}
export default useFetch;