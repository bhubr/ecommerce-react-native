import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (err) {
        // l'objet Error renvoyé par axios va contenir une clé
        // response
        //   -> err.response.status
        // voir https://axios-http.com/docs/handling_errors
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
