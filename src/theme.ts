import { PaletteMode } from "@mui/material";
import { amber, blue, grey } from "@mui/material/colors";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          background: {
            default: amber[100],
            paper: amber[200],
          },
          divider: amber[200],
          text: {
            primary: blue[900],
            secondary: blue[800],
          },
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: grey[700],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export default getDesignTokens;
