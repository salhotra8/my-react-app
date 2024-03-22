import { useQuery } from "@tanstack/react-query";

import { APIGameClient } from "../services/game-client-api";

const gameClient = new APIGameClient("/genres");

const useGenres = () => {
  const getGenres = useQuery({
    queryKey: ["genres"],
    queryFn: () => gameClient.getAll(),
    staleTime: 24 * 60 * 1000,
  });
  return getGenres;
};

export default useGenres;
