import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Divider,
  Avatar,
} from "@mui/material";
import {
  AccountCircle,
  FaceRetouchingNatural,
  Spa,
  AutoAwesome,
  WaterDrop,
  FavoriteBorder,
} from "@mui/icons-material";

export default function ProfilePage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    if (!localStorage.getItem("token") || !user) navigate("/login");
  }, [navigate, user]);

  if (!user) return null;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, #e7d2bd, #c9a27c, #a57a56)",
      }}
    >
      {[
        { I: Spa, t: "5%", l: "5%", s: 100 },
        { I: AutoAwesome, t: "15%", r: "8%", s: 70 },
        { I: WaterDrop, b: "10%", l: "10%", s: 90 },
        { I: FavoriteBorder, b: "12%", r: "12%", s: 80 },
        { I: Spa, t: "45%", l: "-2%", s: 60 },
        { I: AutoAwesome, t: "40%", r: "1%", s: 70 },
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
            color: "#dcd0c0",
            opacity: 0.5,
          }}
        />
      ))}

      <Paper
        elevation={20}
        sx={{
          width: "min(900px, 95vw)",
          borderRadius: 4,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            color: "#fff",
            background: "linear-gradient(160deg, #5a3e2b, #8a5a44)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Stack spacing={2.5}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: 5, fontWeight: 700, opacity: 0.8 }}
            >
              RAZANOVA LUXE
            </Typography>
            <Box>
              <Typography variant="h3" fontWeight={900}>
                Hello,
              </Typography>
              <Typography variant="h4" fontWeight={300} sx={{ opacity: 0.9 }}>
                {user.name?.split(" ")[0] || "Guest"}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Your journey to radiant skin is documented here.
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <FaceRetouchingNatural sx={{ fontSize: 20 }} />
              <Typography fontWeight={700} variant="body2">
                Signature Routine
              </Typography>
            </Stack>
          </Stack>
          <Button
            variant="contained"
            onClick={() => navigate("/routine")}
            sx={{
              bgcolor: "#fff",
              color: "#5a3e2b",
              fontWeight: 900,
              borderRadius: 50,
              mt: 5,
              py: 1.2,
              "&:hover": { bgcolor: "#f3eadf" },
            }}
          >
            Daily Regimen →
          </Button>
        </Box>

        <Box sx={{ p: { xs: 3, md: 5 }, bgcolor: "#fff" }}>
          <Stack direction="row" spacing={2} alignItems="center" mb={3}>
            <Avatar sx={{ bgcolor: "#8a5a44", width: 50, height: 50 }}>
              <AccountCircle sx={{ fontSize: 36 }} />
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight={900} color="#3d2b1f">
                Profile Details
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Secure Member Information
              </Typography>
            </Box>
          </Stack>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              border: "1px solid #e0dcd9",
              bgcolor: "rgba(255,255,255,0.5)",
            }}
          >
            <Stack spacing={2}>
              {[
                { l: "Full Name", v: user.name },
                { l: "Email", v: user.email },
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <Box>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      fontWeight={800}
                    >
                      {item.l}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color="#5a3e2b"
                    >
                      {item.v || "Not Set"}
                    </Typography>
                  </Box>
                  {i === 0 && <Divider sx={{ opacity: 0.6 }} />}
                </React.Fragment>
              ))}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                pt={1.5}
              >
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate("/assessment")}
                  sx={{ bgcolor: "#8a5a44", fontWeight: 800, borderRadius: 2 }}
                >
                  New Assessment
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => navigate("/dashboard")}
                  sx={{
                    color: "#8a5a44",
                    borderColor: "#8a5a44",
                    fontWeight: 800,
                    borderRadius: 2,
                  }}
                >
                  Dashboard
                </Button>
              </Stack>
            </Stack>
          </Paper>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 3,
              textAlign: "center",
              color: "#a57a56",
              fontStyle: "italic",
              opacity: 0.8,
            }}
          >
            “Confidence is the best skincare.”
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
