import './CharacterPage.css';
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

function CharacterPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ResponsiveAppBar/>
      <Box className='mainVideoAndText'>
        <Box // HeadHunter Valorant Logo
          position="absolute"
          sx={{ width: "50%", maxWidth: 1000, maxHeight: 220.93}}
          component="img"
          src={Icon}
        />
        <Box // Looping Video on Main Page
          autoPlay
          loop
          muted
          sx={{ width: "100%"}}
          component="video"
          src={VideoTop}
        />
      </Box>
      <Parallax className='headHunterLogo' strength={6500}>
        <Background>
          <img src={BG}/>
        </Background>
        <CharacterBanners className="content"/>
      </Parallax>
    </ThemeProvider>
  );
}

export default CharacterPage;
