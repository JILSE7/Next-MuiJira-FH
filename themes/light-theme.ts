import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";



export const lightTheme = createTheme({
    palette:{
      mode: 'light',
      primary: {
        main: '#e4e4e4'
      },
      secondary: {
        main: '#19857b'
      },
      error: {
        main: red.A400
      }
    },
    components: {
        MuiAppBar:{
            defaultProps:{
                elevation: 1
            }
        }
    }
  });
  