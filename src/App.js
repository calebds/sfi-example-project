import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";

const drawerWidth = 340;

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Recipe() {
  return (
    <div>
      <h2>Recipe</h2>
    </div>
  );
}

export default function App(props) {

  const { window } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <div className="p-4">menu contents</div>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <nav className="lg:hidden">
        <AppBar>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link to="/">Entropizer</Link>
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </nav>
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
          {drawer}
        </Drawer>
      </Box>
      <div className="flex">
        <nav className="p-4 hidden lg:block w-1/3 h-screen bg-gray-200">side menu</nav>
        <main className="p-4 w-full mt-[64px] lg:mt-0 lg:w-2/3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe" element={<Recipe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
