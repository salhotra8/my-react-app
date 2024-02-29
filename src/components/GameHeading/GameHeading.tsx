import { Typography } from "@mui/material";
import { GameQueryContext } from "../../App";
import { useContext } from "react";

const GameHeading = () => {
  const { gameQuery } = useContext(GameQueryContext);
  return (
    <Typography variant="h3" sx={{ mt: 3, textAlign: "start", ml: 4 }}>
      {`${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`}
    </Typography>
  );
};

export default GameHeading;
