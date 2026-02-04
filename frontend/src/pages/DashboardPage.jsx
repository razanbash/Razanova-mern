import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Menu,
  Quiz,
  AutoAwesome,
  ShoppingBag,
  Person,
  Logout,
  Spa,
  WaterDrop,
  FavoriteBorder,
} from "@mui/icons-material";

export default function DashboardPage() {
  const navigate = useNavigate(),
    [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "null"),
    token = localStorage.getItem("token");
  const name = user?.name || user?.fullName || "User";

  useEffect(() => {
    if (!token) {
      toast.error("Please login first");
      navigate("/login");
    }
  }, [token, navigate]);

  const logout = () => {
    localStorage.clear();
    toast.success("Logged out");
    navigate("/");
  };

  const navItems = [
    {
      label: "Skin Quiz",
      path: "/assessment",
      icon: <Quiz />,
      desc: "Start beauty assessment",
      primary: true,
    },
    {
      label: "My Routine",
      path: "/routine",
      icon: <AutoAwesome />,
      desc: "View skincare routine",
    },
    {
      label: "Products",
      path: "/products",
      icon: <ShoppingBag />,
      desc: "Browse beauty products",
    },
    {
      label: "Profile",
      path: "/profile",
      icon: <Person />,
      desc: "Manage account",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        p: 2,
        background: "linear-gradient(135deg, #c4a484 0%, #8b5e3c 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {[
        { I: Spa, t: "5%", l: "5%", s: 100 },
        { I: AutoAwesome, t: "15%", r: "8%", s: 70 },
        { I: WaterDrop, b: "10%", l: "10%", s: 90 },
        { I: FavoriteBorder, b: "12%", r: "12%", s: 80 },
      ].map((d, i) => (
        <d.I
          key={i}
          sx={{
            position: "absolute",
            top: d.t,
            left: d.l,
            right: d.r,
            bottom: d.b,
            fontSize: d.s,
            color: "#fff",
            opacity: 0.15,
          }}
        />
      ))}

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography fontWeight={900} color="#6f4e37" mb={1}>
            Menu
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            <Divider />
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      <Paper
        elevation={15}
        sx={{
          width: "min(1150px, 96vw)",
          borderRadius: 4,
          overflow: "hidden",
          background: "rgba(255,255,255,0.94)",
          zIndex: 2,
          height: 420, 
        }}
      >
        <Box
          sx={{
            p: 3,
            background: "linear-gradient(135deg, #6f4e37, #a57a56)",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight={900}>
              Dashboard
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Welcome, {name}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            onClick={() => setOpen(true)}
            startIcon={<Menu />}
            sx={{
              color: "white",
              borderColor: "rgba(255,255,255,0.5)",
              fontWeight: 900,
            }}
          >
            MENU
          </Button>
        </Box>

        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 2,
              mb: 2,
            }}
          >
            {navItems.map((item) => (
              <Paper
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  cursor: "pointer",
                  border: "1px solid #eadfd6",
                  background: item.primary
                    ? "linear-gradient(135deg, #6f4e37, #a57a56)"
                    : "#fff",
                  color: item.primary ? "white" : "inherit",
                  transition: "0.2s",
                  "&:hover": { transform: "translateY(-2px)" },
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  {React.cloneElement(item.icon, {
                    sx: { color: item.primary ? "white" : "#6f4e37" },
                  })}
                  <Typography fontWeight={900}>{item.label}</Typography>
                </Stack>
                <Typography sx={{ opacity: 0.7, fontSize: 15 }}>
                  {item.desc}
                </Typography>
              </Paper>
            ))}
          </Box>
          <Button
            fullWidth
            variant="contained"
            startIcon={<Logout />}
            onClick={logout}
            sx={{
              py: 1.5,
              borderRadius: 3,
              fontWeight: 900,
              bgcolor: "#6f4e37",
              "&:hover": { bgcolor: "#5a3e2b" },
            }}
          >
            Logout
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
