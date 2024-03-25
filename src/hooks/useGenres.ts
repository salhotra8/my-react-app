import { useQuery } from "@tanstack/react-query";

import { APIGameClient, FetchResponse } from "../services/game-client-api";
import { Genres } from "../interfaces/Genres";

const gameClient = new APIGameClient<Genres>("/genres");

const useGenres = () => {
  const getGenres = useQuery<FetchResponse<Genres>>({
    queryKey: ["genres"],
    queryFn: () => gameClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
  return getGenres;
};

export default useGenres;
