import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import { Modal } from '@mui/material';
import TextField from "@mui/material/TextField";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Bookmarks from './components/Bookmarks';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './app/authSlice';
import { clearBookmarks } from './app/bookmarksSlice';

// Theme and style config.
const entropizerTheme = createTheme({
  palette: {
    primary: {
      main: "#4d243d",
    },
  },
});
const drawerWidth = 340;
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#FBF6EF',
  border: '2px solid #4d243d',
  boxShadow: 24,
  p: 4,
};

// App component.
export default function App(props) {

  // Drawer state (mobile screens only).
  const { window } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  // Authentication-related component state.
  const [authOpen, setAuthOpen] = useState(false);
  const handleAuthOpen = () => setAuthOpen(true);
  const handleAuthClose = () => setAuthOpen(false);

  const [userNameInput, setUserNameInput] = useState('');

  const handleNameChange = (event) => {
    setUserNameInput(event.target.value);
  };

  // Authentication-related global state.
  const authenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();

  const handleLogin = () => {
    handleAuthClose();
    dispatch(login(userNameInput));
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearBookmarks());
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={entropizerTheme}>
      <CssBaseline />
      <Router>
        {/* Login modal component */}
        <Modal
          open={authOpen}
          onClose={handleAuthClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box style={modalStyle}>
            <div className="p-6 flex">
              <TextField className="flex-grow" id="username-field"
                label="Enter your name" onChange={handleNameChange} variant="outlined" />
              <Button color="primary" sx={{
                ml: 1
              }} size="large" variant="contained"
                disabled={userNameInput.length < 3} onClick={handleLogin}>Sign In</Button>
            </div>
          </Box>
        </Modal>
        {/* Mobile-only app bar */}
        <nav className="lg:hidden">
          <AppBar>
            <Toolbar>
              <TrendingUpIcon />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  ml: 1
                }}
              >
                <Link to="/">Entropizer</Link>
              </Typography>
              {authenticated ?
                <Button color="inherit" onClick={handleLogout}>Sign Out</Button> :
                <Button color="inherit" onClick={handleAuthOpen}>Sign In</Button>
              }
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  ml: 1
                }}
              >
                <BookmarksIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </nav>
        {/* Mobile-only drawer component */}
        <Box>
          <Drawer
            container={container}
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <Box onClick={handleDrawerToggle}>
              <div className="p-4">
                <Bookmarks />
              </div>
            </Box>
          </Drawer>
        </Box>
        <div className="flex lg:justify-end">
          {/* Desktop-only sidebar */}
          <nav className="hidden lg:block overflow-scroll fixed left-0 top-0 w-1/3 h-screen bg-[#FBF6EF]">
            <AppBar position="static" elevation={0}>
              <Toolbar>
                <TrendingUpIcon />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                  <Link to="/">Entropizer</Link>
                </Typography>
                {authenticated ?
                  <Button color="inherit" onClick={handleLogout}>Sign Out</Button> :
                  <Button color="inherit" onClick={handleAuthOpen}>Sign In</Button>
                }
              </Toolbar>
            </AppBar>
            <section className="p-4">
              <Bookmarks />
            </section>
          </nav>
          {/* Main content, visible on all screen sizes */}
          <main className="p-4 w-full mt-[64px] lg:mt-0 lg:w-2/3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe/:slug" element={<Recipe />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}
