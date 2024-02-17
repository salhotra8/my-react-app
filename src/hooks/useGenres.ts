import { Genres } from "../interfaces/Genres";
import useData from "./useData";

const useGenres = () => {
  const { data, error, isLoading } = useData<Genres>("/genres");
  return { genres: data, error, isLoading };
};

export default useGenres;
