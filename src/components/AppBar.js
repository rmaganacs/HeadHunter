import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Icon } from '@mui/material';
import IconLogo from '../images/icon.png';
import {Menu, MenuItem} from '@mui/material';

const pages = ['Charcters', 'Maps', 'Guns'];
const ResponsiveAppBar = () => {

  return (
    <Box>
      <AppBar color="transparent" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar>
          <Box
            component="img"
            src={IconLogo}
          />
          <Box sx={{ mx: "auto", letterSpacing: 4 }} >
            <Typography variant='h6' color="common.white">CHARACTERS</Typography>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
