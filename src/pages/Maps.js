// import './CharacterPage.css';
import { Parallax, Background } from 'react-parallax';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, CssBaseline, Typography} from '@mui/material';
import ResponsiveAppBar from '../components/AppBar';
import CharacterBanners from '../components/Characters';
import VideoTop from '../images/vid.mp4';
import Icon from '../images/logo.png';
import BG from '../images/character-bg.png';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Oswald',
      'sans-serif'
    ].join(',')
  },
  palette: {
    background: {
      default: '#01121e'
    },
  },
});

function MapPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ResponsiveAppBar/>
      <Parallax className='headHunterLogo' strength={6500}>
        <Background>
          <img src={BG}/>
        </Background>
      </Parallax>
    </ThemeProvider>
  );
}

export default MapPage;
