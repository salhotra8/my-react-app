import { Typography } from "@mui/material";
import useGenreLookup from "../../hooks/useGenreLookup";
import usePlatformLookup from "../../hooks/usePlatformLookup";
import useGameQuery from "../../hooks/useGameQuery";

const GameHeading = () => {
  const { gameQuery } = useGameQuery();

  const genre = useGenreLookup(gameQuery.genreId);
  const platform = usePlatformLookup(gameQuery.platformId);
  return (
    <Typography variant="h3" sx={{ mt: 3, textAlign: "start", ml: 4 }}>
      {`${platform?.name || ""} ${genre?.name || ""} Games`}
    </Typography>
  );
};

export default GameHeading;
