import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ background: "#6f4e37" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" ,}}>
        <Typography
          sx={{ fontSize: 30,  fontWeight:900, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          RAZANOVA
        </Typography>

        <Box sx={{  display: "flex", gap: 5,font:"1.05rem"}}>
          <Button color="inherit" onClick={() => navigate("/")}  sx={{fontSize:17  ,fontWeight :700}}>
            Home
          </Button>

          

          {token ? (
            <>
              <Button color="inherit" onClick={() => navigate("/dashboard")} sx={{fontSize:17 ,fontWeight :700}}>
                Dashboard
              </Button>
              <Button color="inherit" onClick={() => navigate("/Profile")}  sx={{fontSize:17 ,fontWeight :700}}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => navigate("/Routine")} sx={{fontSize:17 ,fontWeight :700}}>
                Routine
              </Button>
              <Button color="inherit"  onClick={() => navigate("/about")} sx={{fontSize:17 ,fontWeight :700}}>
                About Us
              </Button>
              <Button color="inherit" onClick={logout}  sx={{fontSize:16 ,fontWeight :700}}>
                Logout
              </Button >
              
              
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => navigate("/login")}  sx={{fontSize:17  ,fontWeight :700}}>
                Login
              </Button>
              <Button color="inherit" onClick={() => navigate("/Register")}  sx={{fontSize:17  ,fontWeight :700}}>
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
