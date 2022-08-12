import {useEffect, useState} from 'react';
import axios from 'axios';

function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const post = async (url, apiData) => {
    try {
      setError(false);
      setLoading(true);
      const {data: responseData} = await axios.post(url, apiData);
      setData(responseData);
      setLoading(false);
      //  console.log(responseData);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.log('catch calisiyor ==> ' + err);
    }
  };

  return {data, loading, error, post};
}

export default usePost;
