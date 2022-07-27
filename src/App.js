import './App.css';
import { ThemeProvider, createTheme, CssBaseline} from '@mui/material';
import ResponsiveAppBar from './components/AppBar';
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
      </ThemeProvider>
    </div>
  );
}

export default App;
