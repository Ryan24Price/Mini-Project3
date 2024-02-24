import { NavLink } from "react-router-dom";
import { AppBar, Box, Typography, Button } from "@mui/material";
import { Toolbar } from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#991E00" }}>
        <Toolbar>
          <Button color="inherit" component={NavLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/login">
            Login
          </Button>
          <Button color="inherit" component={NavLink} to="/profile">
            Profile
          </Button>
          <Button color="inherit" component={NavLink} to="/anime">
            Anime List
          </Button>
          <Button color="inherit" component={NavLink} to="/forum">
            Forum
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
