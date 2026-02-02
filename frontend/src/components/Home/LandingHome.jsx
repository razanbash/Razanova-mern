import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Paper, Typography, Button } from "@mui/material";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

export default function LandingHome() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #e7d2bd, #c9a27c)",
        p: 3,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.25)",
          top: -140,
          left: -140,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(111,78,55,0.18)",
          bottom: -220,
          right: -220,
        }}
      />

      <Paper
        elevation={10}
        sx={{
          width: "min(1100px, 96vw)",
          borderRadius: 5,
          overflow: "hidden",
          display: "flex",
          flexWrap: "wrap",
          background: "rgba(248,241,231,0.92)",
        }}
      >
        <Box
          sx={{
            flex: 1,
            minWidth: 280,
            p: { xs: 4, md: 6 },
            background: "linear-gradient(135deg, #7a553c, #a57a56)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 3,
              display: "grid",
              placeItems: "center",
              background: "rgba(255,255,255,0.18)",
              mb: 2,
            }}
          >
            <StorefrontOutlinedIcon sx={{ fontSize: 34 }} />
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 900, mb: 1 }}>
            RAZANOVA
          </Typography>

          <Typography sx={{ opacity: 0.9, lineHeight: 1.7 }}>
            Products matched to your skin 🤎
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            minWidth: 280,
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 900, color: "#6f4e37" }}>
            Welcome
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            Choose login or create a new account
          </Typography>

          <Button
            fullWidth
            variant="contained"
            startIcon={<SpaOutlinedIcon />}
            sx={{
              mt: 1,
              py: 1.2,
              fontWeight: 800,
              borderRadius: 3,
              background: "#6f4e37",
              "&:hover": { background: "#5a3e2b" },
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<PersonAddAltOutlinedIcon />}
            sx={{
              py: 1.2,
              fontWeight: 800,
              borderRadius: 3,
              borderColor: "#6f4e37",
              color: "#6f4e37",
              "&:hover": { borderColor: "#5a3e2b" },
            }}
            onClick={() => navigate("/Register")}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
