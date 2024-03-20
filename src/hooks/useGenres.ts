import { useQuery } from "react-query";
import { Genres } from "../interfaces/Genres";

import gameClientApi from "../services/game-client-api";
import { FetchResponse } from "./useData";

const useGenres = () => {
  const getGenres = useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      gameClientApi
        .get<FetchResponse<Genres>>("/genres")
        .then((res) => res.data),
  });
  console.log(getGenres);
  return getGenres;
};

export default useGenres;
