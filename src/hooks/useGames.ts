import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Games } from "../interfaces/Games";
import gameClientApi, { FetchResponse } from "../services/game-client-api";

interface Props {
  gameQuery: GameQuery;
}

const useGames = (props: Props) => {
  const getGames = useQuery<FetchResponse<Games>, Error>({
    queryKey: ["/games", props.gameQuery],
    queryFn: () =>
      gameClientApi
        .get("/games", {
          params: {
            genres: props.gameQuery.genre?.id,
            platforms: props.gameQuery.platform?.id,
            ordering: props.gameQuery.sortOrder?.value,
            search: props.gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });
  return getGames;
};

export default useGames;
