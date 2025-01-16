import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

interface ApiError<T> {
  message: string;
  errorData: T;
}

const useApiHook = <T, D>(url: string, params?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<D | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse<T> = await axios.get(url, params);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError<ApiError<D>>(error)) {
          // const objString: AxiosError = error;
          console.error("a-error", error);

          // setError(error.response as D);
        } else {
          console.error("error", error);
        }
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useApiHook;