import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Stack, Divider, Button } from "@mui/material";

import Spa from "@mui/icons-material/Spa";
import MailOutline from "@mui/icons-material/MailOutline";
import Instagram from "@mui/icons-material/Instagram";
import PhoneIphone from "@mui/icons-material/PhoneIphone";
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import WaterDrop from "@mui/icons-material/WaterDrop";

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f3eadf",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Spa
        sx={{
          position: "absolute",
          top: "5%",
          left: "5%",
          fontSize: 100,
          color: "#dcd0c0",
          opacity: 0.6,
        }}
      />
      <AutoAwesome
        sx={{
          position: "absolute",
          top: "15%",
          right: "8%",
          fontSize: 70,
          color: "#dcd0c0",
          opacity: 0.6,
        }}
      />
      <WaterDrop
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          fontSize: 90,
          color: "#dcd0c0",
          opacity: 0.5,
        }}
      />
      <FavoriteBorder
        sx={{
          position: "absolute",
          bottom: "12%",
          right: "12%",
          fontSize: 80,
          color: "#dcd0c0",
          opacity: 0.5,
        }}
      />
      <Spa
        sx={{
          position: "absolute",
          top: "45%",
          left: "-2%",
          fontSize: 60,
          color: "#dcd0c0",
          opacity: 0.4,
        }}
      />
      <AutoAwesome
        sx={{
          position: "absolute",
          top: "40%",
          right: "1%",
          fontSize: 70,
          color: "#dcd0c0",
          opacity: 0.4,
        }}
      />
      <WaterDrop
        sx={{
          position: "absolute",
          top: "10%",
          left: "45%",
          fontSize: 50,
          color: "#dcd0c0",
          opacity: 0.4,
        }}
      />
      <FavoriteBorder
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "45%",
          fontSize: 60,
          color: "#dcd0c0",
          opacity: 0.4,
        }}
      />

      <Paper
        elevation={20}
        sx={{
          width: "min(500px, 100%)",
          borderRadius: 4,
          overflow: "hidden",
          bgcolor: "#fff",
          zIndex: 2,
          border: "1px solid #dcd7d1",
        }}
      >
        <Box
          sx={{ p: 4, bgcolor: "#5a3e2b", color: "#fff", textAlign: "center" }}
        >
          <Spa sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h4" fontWeight={900}>
            Razanova.
          </Typography>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 2, opacity: 0.8 }}
          >
            Pure Skin Intelligence
          </Typography>
        </Box>

        <Box sx={{ p: 4 }}>
          <Typography variant="h6" fontWeight={800} color="#3d2b1f" mb={1}>
            Philosophy
          </Typography>
          <Typography variant="body2" color="#5c4d42" lineHeight={1.8} mb={3}>
            We provide precision-led skincare protocols. By analyzing your
            unique profile, we deliver essential routines that prioritize health
            and simplicity above all else.
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Contact Details */}
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <MailOutline sx={{ color: "#8a5a44" }} />
              <Typography variant="body2" fontWeight={700}>
                support@razanova.com
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Instagram sx={{ color: "#8a5a44" }} />
              <Typography variant="body2" fontWeight={700}>
                @razanova.skin
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <PhoneIphone sx={{ color: "#8a5a44" }} />
              <Typography variant="body2" fontWeight={700}>
                +962 792 33311
              </Typography>
            </Stack>
          </Stack>

          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={() => navigate("/")}
              sx={{
                bgcolor: "#5a3e2b",
                color: "#fff",
                fontWeight: 800,
                borderRadius: 2,
                textTransform: "none",
                width: "100%",
                py: 1.2,
                "&:hover": { bgcolor: "#3d2b1f" },
              }}
            >
              Return Home
            </Button>
            <Typography
              variant="caption"
              display="block"
              mt={2}
              color="#a57a56"
              fontWeight={700}
            >
              SUN — THU | 10:00 — 18:00
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
