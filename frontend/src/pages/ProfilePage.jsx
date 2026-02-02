import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Divider,
  Chip,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SpaIcon from "@mui/icons-material/Spa";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

export default function ProfilePage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        background: "linear-gradient(135deg, #e7d2bd, #c9a27c)",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "min(980px, 95vw)",
          minHeight: { xs: "auto", md: 420 },
          borderRadius: 4,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
        }}
      >
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            color: "#fff",
            background: "linear-gradient(135deg, #6f4e37, #a57a56)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 6,
              background: "linear-gradient(90deg, #f2e6d9, transparent)",
              opacity: 0.35,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 6,
              background: "linear-gradient(90deg, transparent, #f2e6d9)",
              opacity: 0.35,
            }}
          />

          <SpaIcon
            sx={{
              position: "absolute",
              top: 30,
              left: 20,
              fontSize: 140,
              opacity: 0.09,
              color: "#fff",
              transform: "rotate(-10deg)",
              pointerEvents: "none",
            }}
          />
          <AutoAwesomeIcon
            sx={{
              position: "absolute",
              bottom: 30,
              right: 20,
              fontSize: 160,
              opacity: 0.07,
              color: "#fff",
              transform: "rotate(12deg)",
              pointerEvents: "none",
            }}
          />

          <Stack spacing={2} sx={{ position: "relative" }}>
            <Typography
              sx={{ fontWeight: 900, fontSize: 26, letterSpacing: 1 }}
            >
              RAZANOVA
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                sx={{ fontSize: 34, fontWeight: 900, lineHeight: 1.1 }}
              >
                Your Profile
              </Typography>
              <FavoriteBorderIcon sx={{ opacity: 0.95 }} />
            </Stack>

            <Typography sx={{ opacity: 0.9 }}>
              Your account details — in one place.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
              <Chip
                icon={
                  <FaceRetouchingNaturalIcon
                    sx={{ color: "#fff !important" }}
                  />
                }
                label="Personalized Routine ✨"
                sx={{
                  bgcolor: "rgba(255,255,255,0.22)",
                  color: "#fff",
                  fontWeight: 700,
                  "& .MuiChip-icon": { color: "#fff" },
                }}
              />
            </Stack>
          </Stack>

          <Button
            variant="contained"
            onClick={() => navigate("/routine")}
            startIcon={<AutoAwesomeIcon />}
            sx={{
              alignSelf: "flex-start",
              bgcolor: "#fff",
              color: "#6f4e37",
              fontWeight: 800,
              borderRadius: 3,
              "&:hover": { bgcolor: "#f6f2ef" },
            }}
          >
            Go to Routine →
          </Button>
        </Box>

        <Box
          sx={{
            p: { xs: 3, md: 4 },
            bgcolor: "rgba(255,255,255,0.65)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <AccountCircleIcon
            sx={{
              position: "absolute",
              top: 18,
              right: 12,
              fontSize: 170,
              opacity: 0.06,
              color: "#6f4e37",
              pointerEvents: "none",
            }}
          />

          <SpaIcon
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              fontSize: 60,
              opacity: 0.08,
              color: "#6f4e37",
              pointerEvents: "none",
            }}
          />

          <StarOutlineIcon
            sx={{
              position: "absolute",
              top: 120,
              right: 5,
              fontSize: 55,
              opacity: 0.07,
              color: "#6f4e37",
              pointerEvents: "none",
            }}
          />

          <FavoriteBorderIcon
            sx={{
              position: "absolute",
              bottom: 20,
              left: 30,
              fontSize: 65,
              opacity: 0.07,
              color: "#6f4e37",
              pointerEvents: "none",
            }}
          />

          <AutoAwesomeIcon
            sx={{
              position: "absolute",
              bottom: 80,
              right: 20,
              fontSize: 60,
              opacity: 0.07,
              color: "#6f4e37",
              pointerEvents: "none",
            }}
          />

          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <AccountCircleIcon sx={{ color: "#6f4e37" }} />
            <Typography variant="h4" sx={{ fontWeight: 900 }}>
              Profile
            </Typography>
          </Stack>

          <Typography sx={{ opacity: 0.75, mb: 3 }}>
            Manage your information and assessment result.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              bgcolor: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(0,0,0,0.06)",
              position: "relative",
            }}
          >
            <Stack spacing={1.2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <PersonIcon sx={{ color: "#6f4e37" }} />
                <Typography sx={{ fontWeight: 800 }}>Account Info</Typography>
              </Stack>

              <Divider />

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ gap: 2 }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <PersonIcon sx={{ color: "#8a5a44", fontSize: 20 }} />
                  <Typography sx={{ opacity: 0.75 }}>Name</Typography>
                </Stack>
                <Typography sx={{ fontWeight: 700 }}>
                  {user?.name || "—"}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ gap: 2 }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <EmailIcon sx={{ color: "#8a5a44", fontSize: 20 }} />
                  <Typography sx={{ opacity: 0.75 }}>Email</Typography>
                </Stack>
                <Typography sx={{ fontWeight: 700 }}>
                  {user?.email || "—"}
                </Typography>
              </Stack>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ mt: 3 }}
            >
              <Button
                variant="contained"
                fullWidth
                onClick={() => navigate("/assessment")}
                startIcon={<SpaIcon />}
                sx={{
                  fontWeight: 800,
                  bgcolor: "#8a5a44",
                  color: "#fff",
                  "&:hover": { bgcolor: "#734735" },
                }}
              >
                Retake Assessment
              </Button>

              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate("/dashboard")}
                startIcon={<AutoAwesomeIcon />}
                sx={{
                  fontWeight: 800,
                  borderColor: "#8a5a44",
                  color: "#8a5a44",
                  "&:hover": {
                    borderColor: "#734735",
                    backgroundColor: "rgba(138, 90, 68, 0.08)",
                  },
                }}
              >
                Back to Dashboard
              </Button>
            </Stack>
          </Paper>

          <Typography sx={{ mt: 2, fontSize: 13, opacity: 0.7 }}>
            Tip: Retake the assessment anytime to update your recommendations
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
