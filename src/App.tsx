import * as React from "react";
import {ThemeProvider, createTheme } from "@mui/material/styles";
import getDesignTokens from "./theme";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import { CssBaseline } from "@mui/material";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

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

  const theme = React.useMemo(
    () =>
      createTheme(getDesignTokens(mode)),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <NavBar />
        <GameGrid />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
