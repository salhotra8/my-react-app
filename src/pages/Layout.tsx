import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import getDesignTokens from "../theme";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const Layout = () => {
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
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <Outlet />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default Layout;
