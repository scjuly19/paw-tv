import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
export default theme;
