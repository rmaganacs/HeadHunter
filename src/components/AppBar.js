import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconLogo from '../images/icon.png';
import BufferLogo from '../images/buffer-icon.png';
import {Tab, Tabs} from '@mui/material';
import { Link } from 'react-router-dom';

const ResponsiveAppBar = () => {
  // useState for current tab value
  const [value, setValue] = React.useState('one');
  const styles = theme => ({
    indicator: {
      backgroundColor: 'white',
    },
  })
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <AppBar color="transparent" elevation={0}>
        <Container maxWidth="xxl">
          <Toolbar sx={{justifyContent:'space-between'}}>
            <Box
              sx={{ ml: "-2"}}
              component="img"
              src={IconLogo}
              layout='responsive'
            />
            <Box sx={{ mx: "auto"}}>
              <Tabs
                sx={{"& button:hover": { color: "#DCDBDB" }}}
                textColor='white'
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#eb263a"
                  }
                  }}
                value={value} 
                onChange={handleChange} 
                aria-label="Main Tabs"
              >
                <Tab disableRipple value="one" sx={{color: 'white', fontSize: '21px'}} label="CHARACTERS" to='/' component={Link}/>
                <Tab disableRipple value="two" sx={{color: 'white', fontSize: '21px'}} label="MAPS" to='/Maps' component={Link}/>
                <Tab disableRipple value="three" sx={{color: 'white', fontSize: '21px'}} label="WEAPONS" />
              </Tabs>
            </Box>
            <Box
              sx={{ mr: "-2"}}
              component="img"
              src={BufferLogo}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
    
  );
};
export default ResponsiveAppBar;
