/* eslint-disable jsx-a11y/iframe-has-title */
import * as React from 'react';
import './Characters.css'
import CharDesc from './CharDesc';
import { Typography, Box, Container, Grid, createTheme, ThemeProvider} from '@mui/material';
import Astra from '../images/character-banner/astra.png';
import Breach from '../images/character-banner/breach.png';
import Brimstone from '../images/character-banner/brim.png';
import Chamber from '../images/character-banner/chamber.png';
import Cypher from '../images/character-banner/cypher.png';
import Fade from '../images/character-banner/fade.png';
import Jett from '../images/character-banner/jett.png';
import KAYO from '../images/character-banner/kayo.png';
import KillJoy from '../images/character-banner/kj.png';
import Neon from '../images/character-banner/neon.png';
import Omen from '../images/character-banner/omen.png';
import Phoenix from '../images/character-banner/phoenix.png';
import Reyna from '../images/character-banner/reyna.png';
import Raze from '../images/character-banner/raze.png';
import Sage from '../images/character-banner/sage.png';
import Skye from '../images/character-banner/skye.png';
import Sova from '../images/character-banner/sova.png';
import Viper from '../images/character-banner/viper.png';
import Yoru from '../images/character-banner/yoru.png';


const characters = [
  {
    name: 'Astra',
    image: Astra,
    videoUrl: 'https://www.youtube.com/embed/-ylVnuPWlJM',
    textAlign: 'right',
  },
  {
    name: 'Breach',
    image: Breach,
    videoUrl: 'https://www.youtube.com/embed/Rux0HjzKQbw',
    textAlign: 'left',
  },
  {
    name: 'Brimstone',
    image: Brimstone,
    videoUrl: 'https://www.youtube.com/embed/7yHnJ_oNxTI',
    textAlign: 'right',
  },
  {
    name: 'Chamber',
    image: Chamber,
    videoUrl: 'https://www.youtube.com/embed/FUoqAn5T4h4',
    textAlign: 'left',
  },
  {
    name: 'Cypher',
    image: Cypher,
    videoUrl: 'https://www.youtube.com/embed/SgbqFtRRgLA',
    textAlign: 'right',
  },
  {
    name: 'Fade',
    image: Fade,
    videoUrl: 'https://www.youtube.com/embed/e7VOQ1l20eo',
    textAlign: 'left',
  },
  {
    name: 'Jett',
    image: Jett,
    videoUrl: 'https://www.youtube.com/embed/-cPLXswVsvc',
    textAlign: 'right',
  },
  {
    name: 'KAYO',
    image: KAYO,
    videoUrl: 'https://www.youtube.com/embed/eU1l7eBy2_Y',
    textAlign: 'left',
  },
  {
    name: 'KillJoy',
    image: KillJoy,
    videoUrl: 'https://www.youtube.com/embed/ua-iIRQDY8g',
    textAlign: 'right',
  },
  {
    name: 'Neon',
    image: Neon,
    videoUrl: 'https://www.youtube.com/embed/dtx8CgjRmqE',
    textAlign: 'left',
  },
  {
    name: 'Omen',
    image: Omen,
    videoUrl: 'https://www.youtube.com/embed/_jJdWy6bDj4',
    textAlign: 'right',
  },
  {
    name: 'Phoenix',
    image: Phoenix,
    videoUrl: 'https://www.youtube.com/embed/ttJMFW2wUQM',
    textAlign: 'left',
  },
  {
    name: 'Reyna',
    image: Reyna,
    videoUrl: 'https://www.youtube.com/embed/IzsQNYrq9AM',
    textAlign: 'right',
  },
  {
    name: 'Raze',
    image: Raze,
    videoUrl: 'https://www.youtube.com/embed/2-uAL__pp_U',
    textAlign: 'left',
  },
  {
    name: 'Sage',
    image: Sage,
    videoUrl: 'https://www.youtube.com/embed/1aRwM_QsqQI',
    textAlign: 'right',
  },
  {
    name: 'Skye',
    image: Skye,
    videoUrl: 'https://www.youtube.com/embed/C3QTyMXi-WE',
    textAlign: 'left',
  },
  {
    name: 'Sova',
    image: Sova,
    videoUrl: 'https://www.youtube.com/embed/OZ76UP-c8Ao',
    textAlign: 'right',
  },
  {
    name: 'Viper',
    image: Viper,
    videoUrl: 'https://www.youtube.com/embed/9dOSy0EhLfQ',
    textAlign: 'left',
  },
  {
    name: 'Yoru',
    image: Yoru,
    videoUrl: 'https://www.youtube.com/embed/GdOEQv-zQVw',
    textAlign: 'right',
  },
  
];

const tungstenFont = {
  fontFamily: 'Tungsten, sans-serif',
  fontWeight: 'bold',
};

const CharacterBanners = () => {
  return (
    <Container maxWidth="xl">
      <Grid container direction="column" justifyContent="space-around" alignItems="center">
        {characters.map((character, index) => (
          <Grid
            key={index}
            container
            direction={index % 2 === 0 ? 'row' : 'row-reverse'}
            justifyContent="space-around"
            alignItems="center"
            sx={{ mt: { xs: "100px", sm: "100px", md: "100px", lg: "100px", xl: "100px" } }}
          >
            <Grid item>
              <Box
                component="img"
                src={character.image}
              />
            </Grid>
            <Grid direction="column">
              <Grid item>
                <Typography sx={{ fontSize: 100, color: "white", textAlign: character.textAlign, ...tungstenFont }}>
                  {character.name.toUpperCase()}
                </Typography>
              </Grid>
              <Grid item>
                <Box maxWidth="1000px">
                  <CharDesc title={character.name} />
                </Box>
              </Grid>
              <Grid item sx={{ mt: "50px", display: "flex", justifyContent: { sm: "center", md: "center", lg: index % 2 === 0 ? "flex-end" : "flex-start" } }}>
                <iframe
                  src={character.videoUrl}
                  width="640" height="430"
                  frameBorder="0"
                />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CharacterBanners;