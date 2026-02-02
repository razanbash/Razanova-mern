import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import toast from "react-hot-toast";

import SpaIcon from "@mui/icons-material/Spa";
import QuizIcon from "@mui/icons-material/Quiz";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export default function DashboardPage() {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (!token) {
      toast.error("Please login first");
      navigate("/login");
    }
  }, [token, navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    toast.success("Logged out");
    navigate("/");
  };

  const name = user?.fullName || user?.name || user?.username || "User";

  const bigCard = (title, sub, icon, onClick, primary = false) => (
    <Card
      sx={{
        borderRadius: 3,
        height: "100%",
        border: "1px solid #eadfd6",
        boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
        background: primary
          ? "linear-gradient(135deg, #6f4e37, #a57a56)"
          : "white",
        color: primary ? "white" : "#222",
        transition: "0.2s",
        "&:hover": { transform: "translateY(-4px)" },
      }}
    >
      <CardActionArea onClick={onClick} sx={{ height: "100%" }}>
        <CardContent sx={{ p: 3.2 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            {icon}
            <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
              {title}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ mt: 0.6, opacity: primary ? 0.9 : 0.75 }}
          >
            {sub}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #e7d2bd, #c9a27c)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-160px",
          left: "-160px",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.25)",
          filter: "blur(35px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-200px",
          right: "-200px",
          width: 620,
          height: 620,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.18)",
          filter: "blur(40px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "12%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "rgba(111,78,55,0.12)",
          filter: "blur(45px)",
        }}
      />

      <SpaIcon
        sx={{
          position: "absolute",
          top: 60,
          left: 70,
          fontSize: 240,
          opacity: 0.06,
          color: "#6f4e37",
          transform: "rotate(-10deg)",
          pointerEvents: "none",
        }}
      />
      <AutoAwesomeIcon
        sx={{
          position: "absolute",
          bottom: 80,
          left: 130,
          fontSize: 260,
          opacity: 0.05,
          color: "#6f4e37",
          transform: "rotate(10deg)",
          pointerEvents: "none",
        }}
      />
      <ShoppingBagIcon
        sx={{
          position: "absolute",
          top: 110,
          right: 100,
          fontSize: 280,
          opacity: 0.05,
          color: "#6f4e37",
          transform: "rotate(8deg)",
          pointerEvents: "none",
        }}
      />
      <PersonIcon
        sx={{
          position: "absolute",
          bottom: 70,
          right: 150,
          fontSize: 260,
          opacity: 0.05,
          color: "#6f4e37",
          transform: "rotate(-8deg)",
          pointerEvents: "none",
        }}
      />

      <Paper
        elevation={8}
        sx={{
          maxWidth: 1000,
          borderRadius: 4,
          overflow: "hidden",
          background: "rgba(255,255,255,0.92)",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            background: "linear-gradient(135deg, #7a553c, #a57a56)",
            color: "white",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <SpaIcon sx={{ fontSize: 28 }} />
            <Typography variant="h4" sx={{ fontWeight: 900 }}>
              Dashboard
            </Typography>
          </Stack>
          <Typography sx={{ mt: 0.6, opacity: 0.9, fontSize: 16 }}>
            Welcome, {name}
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 } }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {bigCard(
                "Skin Quiz",
                "Start your beauty assessment",
                <QuizIcon />,
                () => navigate("/assessment"),
                true,
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              {bigCard(
                "My Routine",
                "View your skincare routine",
                <AutoAwesomeIcon />,
                () => navigate("/routine"),
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              {bigCard(
                "Products",
                "Browse beauty products",
                <ShoppingBagIcon />,
                () => navigate("/products"),
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              {bigCard("Profile", "Manage your account", <PersonIcon />, () =>
                navigate("/profile"),
              )}
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<LogoutIcon />}
                onClick={logout}
                sx={{
                  mt: 1,
                  py: 1.6,
                  borderRadius: 3,
                  fontWeight: 900,
                  bgcolor: "#6f4e37",
                  "&:hover": { bgcolor: "#5a3e2b" },
                }}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
