import { AxiosResponse, AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import gameClientApi from "../services/game-client-api";

interface FetchResponse<T> {
    count: string,
    result : T[]
}

const useData = <T>(urlParams: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    gameClientApi
      .get<FetchResponse<T>>(urlParams, { signal: controller.signal })
      .then((res: AxiosResponse) => setData(res.data.results))
      .catch((error: AxiosError) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);

  return { data, error };
};

export default useData;
