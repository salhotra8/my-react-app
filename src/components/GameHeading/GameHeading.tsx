import { Typography } from "@mui/material";
import useGameQueryStore from "../../hooks/useGameStore";
import useGenreLookup from "../../hooks/useGenreLookup";
import usePlatformLookup from "../../hooks/usePlatformLookup";

const GameHeading = () => {
  const { gameQuery } = useGameQueryStore();

  const genre = useGenreLookup(gameQuery.genreId);
  const platform = usePlatformLookup(gameQuery.platformId);
  return (
    <Typography variant="h3" sx={{ mt: 3, textAlign: "start", ml: 4 }}>
      {`${platform?.name || ""} ${genre?.name || ""} Games`}
    </Typography>
  );
};

export default GameHeading;
