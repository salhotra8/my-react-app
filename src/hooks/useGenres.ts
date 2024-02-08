import { Genres } from "../interfaces/Genres";
import useData from "./useData";

const useGenres = () => {
  const { data, error } = useData<Genres>("/genres");
  return { genres: data, error };
};

export default useGenres;
