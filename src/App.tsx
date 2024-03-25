import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";
import GameGrid from "./components/GameGrid/GameGrid";
import GameHeading from "./components/GameHeading/GameHeading";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import SortSelector from "./components/SortSelector/SortSelector";
import GameQueryProvider from "./components/helpers/GameQueryProvider";
import getDesignTokens from "./theme";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
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

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GameQueryProvider>
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
        </GameQueryProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
