import { Box } from "@mui/material";
import GameGrid from "./components/GameGrid/GameGrid";
import GameHeading from "./components/GameHeading/GameHeading";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import SortSelector from "./components/SortSelector/SortSelector";

export default function ToggleColorMode() {
  return (
    <>
      <GameHeading />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "start",
          px: 4,
          flexWrap: "wrap",
        }}
      >
        <PlatformSelector />
        <SortSelector />
      </Box>
      <GameGrid />
    </>
  );
}
