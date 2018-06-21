import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export default createMuiTheme({
  palette: {
    primary: { 
        main: grey[50],
        light: '#FFFFFF',
        dark: '#c7c7c7',
        contrastText: '#000000'
    }, // Purple and green play nicely together.
    secondary: { 
        main: "#e53935",
        light: '#ff6f60',
        dark: '#ab000d',
        contrastText: '#FFFFFF'
     } // This is just green.A700 as hex.
  }
});
