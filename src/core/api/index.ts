import { API_URL } from '@env';
import { useState } from 'react';

interface useFetchParams {
  path: string;
  method: 'GET' | 'POST';
}

type IUseFetch = (
  params: useFetchParams,
) => [any, boolean, () => Promise<void>, object | null];

export const useFetch: IUseFetch = props => {
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<object | null>(null);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const rawResponse = await fetch(`${API_URL}${props.path}`, {
        method: props.method,
      });
      const jsonResponse = await rawResponse.json();
      setResponse(jsonResponse);
      return jsonResponse;
    } catch (exception: any) {
      setError(exception);
      throw exception;
    } finally {
      setLoading(false);
    }
  };

  return [response, isLoading, handleFetch, error];
};
