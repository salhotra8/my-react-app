import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: string;
  next?: string;
  previous?: string;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "43ac2d95665647ae8374bceb11019f40",
  },
});

export class APIGameClient<T> {
  constructor(public endpoint: string) {}

  public getAll = (config?: AxiosRequestConfig): Promise<FetchResponse<T>> => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
