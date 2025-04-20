import { grey, orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
  typography: {
    h1: {
      color: grey[50],
    },
    h4: {
      color: grey[50],
      fontSize: "1rem",
    },
    h6: {
      color: grey[50],
      fontSize: "0.75rem",
    },
  },
});
