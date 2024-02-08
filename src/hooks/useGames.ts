import { Games } from "../interfaces/Games";
import useData from "./useData";

const useGames = () => {
  const { data, error } = useData<Games>("/games");
  return { games: data, error };
};

export default useGames;
