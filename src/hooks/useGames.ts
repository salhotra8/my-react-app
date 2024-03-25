import { useInfiniteQuery } from "@tanstack/react-query";
import { Games } from "../interfaces/Games";
import { APIGameClient, FetchResponse } from "../services/game-client-api";
import { GameQuery } from "../components/helpers/GameQueryProvider";

interface Props {
  gameQuery: GameQuery;
}

const gameClient = new APIGameClient<Games>("/games");

const useGames = (props: Props) => {
  const getGames = useInfiniteQuery<FetchResponse<Games>, Error>({
    queryKey: ["/games", props.gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameClient.getAll({
        params: {
          genres: props.gameQuery.genreId,
          platforms: props.gameQuery.platformId,
          ordering: props.gameQuery.sortOrder?.value,
          search: props.gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.next ? pages.length + 1 : undefined,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
  return getGames;
};

export default useGames;
