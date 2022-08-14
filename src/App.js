import './App.css';
import Box from '@mui/material/Box';
import { CardMedia, ThemeProvider, createTheme, CssBaseline, Typography} from '@mui/material';
import ResponsiveAppBar from './components/AppBar';
import Sova from './images/character-banner/sova.png';
import Chamber from './images/character-banner/chamber.png';
import Omen from './images/character-banner/omen.png';
import Jett from './images/character-banner/jett.png';
import Reyna from './images/character-banner/reyna.png';
import Phoenix from './images/character-banner/phoenix.png';
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
        {/* Omen */}
        <Box>
          <Box // Omen PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Omen}
          />
          <Typography // Omen's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            Omen is a phantom of a man with mysterious origins and many names. He has a limited memory of his past,{"\n"} 
            though he does remember being involved in something that caused him to be ripped apart and killed. All he knows {"\n"}
            that links to who he used to be is a place known as Point Light, a past friendship with Sabine "Viper" Callas, and {"\n"}
            feelings of restoration with every kill he makes. Contributing to the formation of the VALORANT Protocol,{"\n"} 
            Omen would go on to become its third recruit and serve as one of its more experienced agents, all while he {"\n"}
            continues his search for answers about what truly happened to him over a decade ago.
          </Typography>
          <Box // Omen's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/_jJdWy6bDj4'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Jett */}
        <Box>
          <Box // Jett PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Jett}
          />
          <Typography // Jett's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "-150px"}}
            color={"white"}>
            Sunwoo Han hails from South Korea, with possible links to the Insa-dong neighborhood in Seoul. As a chef in {"\n"}
            her early life, she was involved in an incident relating to her wind-like radiant powers at the restaurant she worked at,{"\n"}
            causing a "freak storm" that all but destroyed the building. Sunwoo fled the scene soon after.
            Later on, Sunwoo would be {"\n"}recruited by the VALORANT Protocol to become its tenth agent, "Jett". Whilst working
            for the Protocol however,{"\n"} an incident occurred in Venice that destroyed part of the city. When authorities issued warrants
            for the arrests {"\n"}of the perpetrators, one of them was revealed to look exactly identical to Jett. Though Jett herself had nothing
            to do with the{"\n"} mission, the rest of the world now believed that she was now a threat to them. She couldn't explain that it wasn't her {"\n"}
            to those she know outside of VALORANT, unable to even understand what was going on herself, and it left them{"\n"} feeling disgusted, 
            horrified, and ashamed at her, forcing her to go on the run once more.
          </Typography>
          <Box // Jett's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "-330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/-cPLXswVsvc'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Reyna */}
        <Box>
          <Box // Reyna PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Reyna}
          />
          <Typography // Reyna's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            Reyna takes what she wants when she wants it, no matter who is standing in her way. Savage and{"\n"} 
            almost animalistic, she is not one to hesitate when it comes to eliminating her enemies and getting {"\n"}
            blood on her hands. She has a strong dislike for technology and thrives on the enemy's misery, and loves {"\n"}
            to compete with fellow Radiants to see who is the most powerful. She seems to have a cynical view towards{"\n"}
             the rest of the world due to the pain that she has experienced in order to survive. However, she {"\n"}
             acknowledges that her Earth is still her home, and she resolves to defend it even if it means spilling more blood.
          </Typography>
          <Box // Reyna's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/IzsQNYrq9AM'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Phoenix */}
        <Box>
          <Box // Phoenix PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Phoenix}
          />
          <Typography // Phoenix's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "-150px"}}
            color={"white"}>
            A duelist by role and nature, Phoenix is brash, impulsive, and has a lot of confidence, never hesitating to {"\n"}
            charge into a fight head-on despite not getting a full grasp of the situation, much to the chagrin of his more {"\n"}
            collected teammates. As shown in "RETAKE," if Phoenix gets himself in a sticky situation caused by his own impatience,{"\n"} 
            he is more than capable of quickly adapting to the circumstances and turning the tables around, before rubbing it in the {"\n"}
            faces of teammates who initially doubted him. His lack of patience is only confirmed by Sova, who reminds him to learn {"\n"}
            the virtue before they can enjoy a strategic game of chess. However, Phoenix does take his allies' insights into {"\n"}
            consideration as shown in "WARM UP," wherein he rethinks his strategy after Cypher noted that sacrifice plays for victory's {"\n"}
            sake was initially not the Brit's style. Despite Phoenix's hasty ways, he is known as a prodigy (claiming that it wasn't his {"\n"}
            own words), and he always proves it one way or another.
          </Typography>
          <Box // Phoenix's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "-330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/ttJMFW2wUQM'
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
