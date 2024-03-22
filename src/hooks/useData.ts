// import {
//   AxiosResponse,
//   AxiosError,
//   CanceledError,
//   AxiosRequestConfig,
// } from "axios";
// import { useEffect, useState } from "react";
// import gameClientApi, { FetchResponse } from "../services/game-client-api";



// const useData = <T>(
//   urlEndpoint: string,
//   requestConfig?: AxiosRequestConfig,
//   dependencyForUseEffect?: any[]
// ) => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(
//     () => {
//       const controller = new AbortController();
//       setLoading(true);
//       gameClientApi
//         .get<FetchResponse<T>>(urlEndpoint, {
//           signal: controller.signal,
//           ...requestConfig,
//         })
//         .then((res: AxiosResponse) => setData(res.data.results))
//         .catch((error: AxiosError) => {
//           if (error instanceof CanceledError) return;
//           setError(error.message);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//       return () => controller.abort();
//     },
//     dependencyForUseEffect ? [...dependencyForUseEffect] : []
//   );

//   return { data, error, isLoading };
// };

// export default useData;
