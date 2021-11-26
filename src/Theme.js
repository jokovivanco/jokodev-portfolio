import { createTheme } from '@material-ui/core/styles';

const green = "#3AB64B"
const black = "#061308"
const background = "#ECF9ED"

export default createTheme({
  palette: {
    common: {
      green: green,
      black: black,
    },
    primary: {
      main: green
    },
    secondary: {
      main: background
    },
    background: {
      paper: black
    }
  },
  typography: {
    fontFamily: 'Nunito'
  }
})