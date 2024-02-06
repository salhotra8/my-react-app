import { AxiosResponse, AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import gameClientApi from "../services/game-client-api";
import { Games, GamesResponse } from "../interfaces/Games";

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    gameClientApi
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((res: AxiosResponse) => setGames(res.data.results))
      .catch((error: AxiosError) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
