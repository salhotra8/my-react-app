import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getDesignTokens from "./theme";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import SortSelector, {
  SortOrder,
} from "./components/SortSelector/SortSelector";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import { Genres } from "./interfaces/Genres";
import { Platform } from "./interfaces/Games";
import GameHeading from "./components/GameHeading/GameHeading";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export interface GameQuery {
  genre?: Genres;
  platform?: Platform;
  sortOrder?: SortOrder;
  searchText?: string;
}

interface GameQueryContext {
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

export const GameQueryContext = React.createContext<GameQueryContext>({
  gameQuery: {},
  setGameQuery: () => {},
});

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const [gameQuery, setGameQuery] = useState<GameQuery>({});

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GameQueryContext.Provider value={{ gameQuery, setGameQuery }}>
          <NavBar />
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
        </GameQueryContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
