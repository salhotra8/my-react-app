import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Games } from "../interfaces/Games";
import {
  APIGameClient,
  FetchResponse,
} from "../services/game-client-api";

interface Props {
  gameQuery: GameQuery;
}

const gameClient = new APIGameClient<Games>("/games");

const useGames = (props: Props) => {
  const getGames = useQuery<FetchResponse<Games>, Error>({
    queryKey: ["/games", props.gameQuery],
    queryFn: () =>
      gameClient.getAll({
        params: {
          genres: props.gameQuery.genre?.id,
          platforms: props.gameQuery.platform?.id,
          ordering: props.gameQuery.sortOrder?.value,
          search: props.gameQuery.searchText,
        },
      }),
  });
  return getGames;
};

export default useGames;
