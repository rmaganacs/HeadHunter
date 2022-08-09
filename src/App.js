import './App.css';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, CssBaseline, Typography} from '@mui/material';
import ResponsiveAppBar from './components/AppBar';
import SplashPhoto from './images/bg1.png';
import VideoTop from './images/vid.mp4';
import Icon from './images/logo.png';

const theme = createTheme({
  backgroundImage: {
    
  },
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
        <Box // Looping Video on Main Page
          autoPlay
          loop
          muted
          sx={{mt: 0}}
          component="video"
          src={VideoTop}
        />
        <Box // HeadHunter Valorant Logo
          position="relative"
          sx={{ top: "-350px",  width: 1000, height: 220.93}}
          component="img"
          src={Icon}
          />
        <Box // Sova PNG Render Displayed
          position="relative"
          sx={{mt: -20}}
          component="img"
          src={SplashPhoto}
          />
      </ThemeProvider>
    </div>
  );
}

export default App;
