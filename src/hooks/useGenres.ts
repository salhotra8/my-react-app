import { useQuery } from "@tanstack/react-query";
import { Genres } from "../interfaces/Genres";

import gameClientApi, { FetchResponse } from "../services/game-client-api";

const useGenres = () => {
  const getGenres = useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      gameClientApi
        .get<FetchResponse<Genres>>("/genres")
        .then((res) => res.data),
        staleTime: 24 * 60 * 1000,
  });
  return getGenres;
};

export default useGenres;
