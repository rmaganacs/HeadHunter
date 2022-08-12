import './App.css';
import Box from '@mui/material/Box';
import { CardMedia, ThemeProvider, createTheme, CssBaseline, Typography} from '@mui/material';
import ResponsiveAppBar from './components/AppBar';
import Sova from './images/character-banner/sova.png';
import Chamber from './images/character-banner/chamber.png';
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
        {/* Sova */}
        <Box>
          <Box // Sova PNG Render Displayed
            position="relative"
            sx={{mt: -20}}
            component="img"
            src={Sova}
          />
          <Typography // Sova's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            Hailing from the town of Severomorsk, in Murmansk Oblast, Russia, Sasha Novikov 
            is an archer who became{"\n"} an agent for the VALORANT Protocol as its sixth recruit, 
            "Sova". With his right eye replaced with a mechanical{"\n"} one after he lost it, Sova 
            primarily serves as the team's scout, gathering information and searching for 
            targets{"\n"} using olden methods should technology come up short. Being highly capable 
            and reliable both in the field and{"\n"} with his work, whilst also having experience with 
            multiple radianite-related events (having traveled through a{"\n"} rift and having met his 
            Omega counterpart), Sova has earned a reputation of being one of the Protocol's{"\n"} most 
            trusted agents, especially to the organization's commander, Brimstone.
          </Typography>
          <Box // Sova's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/OZ76UP-c8Ao'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Chamber */}
        <Box>
          <Box // Chamber PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Chamber}
          />
          <Typography // Chamber's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "-150px"}}
            color={"white"}>
            The Frenchman Vincent Fabron lives his life in search of one necessary goal, 
            willing to sacrifice anything that{"\n"}gets in his way of achieving it. He has 
            spent much of his time involved with combat and weapons, having worked{"\n"}for 
            the French military before becoming a PMC marksman and then a weapons designer 
            for Kingdom Defense.{"\n"}His employment at Kingdom was only a stepping stone for him 
            though, as by this point he was already set on{"\n"}his path in pursuit of his sacred 
            truth.
          </Typography>
          <Box // Chamber's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "-330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/FUoqAn5T4h4'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
