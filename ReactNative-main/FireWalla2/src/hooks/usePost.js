import React, {useState} from 'react';
import axios from 'axios';

function usePost() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const post = async (url, apiData) => {
    try {
      setLoading(true);
      setError(false);
      const {data: responeseData} = await axios.post(url, apiData);
      setData(responeseData);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return {data, error, loading, post};
}

export default usePost;
