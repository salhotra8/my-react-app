import { useQuery } from "@tanstack/react-query";
import gameClientApi, { FetchResponse } from "../services/game-client-api";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  const getPlatforms = useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      gameClientApi
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 3 * 24 * 60 * 1000,
  });
  return getPlatforms;
};

export default usePlatform;
