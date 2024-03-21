import axios from "axios";

export interface FetchResponse<T> {
  count: string;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "43ac2d95665647ae8374bceb11019f40",
  },
});
