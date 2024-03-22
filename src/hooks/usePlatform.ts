import { useQuery } from "@tanstack/react-query";
import { APIGameClient } from "../services/game-client-api";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const gameClient = new APIGameClient<Platform>("/platforms/lists/parents");

const usePlatform = () => {
  const getPlatforms = useQuery({
    queryKey: ["platforms"],
    queryFn: () => gameClient.getAll(),
    staleTime: 3 * 24 * 60 * 1000,
  });
  return getPlatforms;
};

export default usePlatform;
