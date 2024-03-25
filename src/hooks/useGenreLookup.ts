import useGenres from "./useGenres";

const useLookUp = (genreId?: number) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === genreId);
  return genre;
};

export default useLookUp;
