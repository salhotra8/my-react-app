import { GameQuery } from "../App";
import { Games } from "../interfaces/Games";
import useData from "./useData";

interface Props {
  gameQuery: GameQuery;
}

const useGames = (props: Props) => {
  const { data, error, isLoading } = useData<Games>(
    "/games",
    {
      params: {
        genres: props.gameQuery.genre?.id,
        platforms: props.gameQuery.platform?.id,
        ordering: props.gameQuery.sortOrder?.value,
        search: props.gameQuery.searchText,
      },
    },
    [
      props.gameQuery.genre?.id,
      props.gameQuery.platform?.id,
      props.gameQuery.sortOrder?.value,
      props.gameQuery.searchText,
    ]
  );
  return { games: data, error, isLoading };
};

export default useGames;
