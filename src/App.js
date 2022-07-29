import './App.css';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, CssBaseline} from '@mui/material';
import ResponsiveAppBar from './components/AppBar';
import SplashPhoto from './images/bg.png';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Oswald',
      'sans-serif'
    ].join(',')
  },
  palette: {
    background: {
      default: '#0d0d0d',
      paper: '#0d0d0d',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ResponsiveAppBar/>
        
        <Box
            component="img"
            src={SplashPhoto}
          />
      </ThemeProvider>
    </div>
  );
}

export default App;
