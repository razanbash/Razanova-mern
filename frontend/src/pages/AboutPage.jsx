import React from "react";
import { Box, Paper, Typography, Grid, Stack, Divider } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import InstagramIcon from "@mui/icons-material/Instagram";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function AboutPage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "grid",
        placeItems: "center",
        p: 2,
        background: "linear-gradient(135deg, #f7efe7, #ead7c4)",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: "min(1000px, 96vw)",
          height:800,
          borderRadius: 5,
          overflow: "hidden",
          background: "rgba(255,255,255,0.88)",
          boxShadow: "0 24px 70px rgba(111,78,55,0.22)",
          position: "relative",
        }}
      >
        <SpaIcon
          sx={{
            position: "absolute",
            top: 22,
            right: 24,
            fontSize: 52,
            color: "rgba(138,90,68,0.18)",
          }}
        />
        <AutoAwesomeIcon
          sx={{
            position: "absolute",
            bottom: 18,
            left: 22,
            fontSize: 46,
            color: "rgba(138,90,68,0.16)",
          }}
        />

        <Box
          sx={{
            p: { xs: 3, md: 4 },
            background: "linear-gradient(135deg, #7a553c, #a57a56)",
            color: "white",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <FavoriteBorderIcon />
            <Typography variant="h4" sx={{ fontWeight: 1000 }}>
              About Us
            </Typography>
          </Stack>

          <Typography sx={{ opacity: 0.9, mt: 0.5 }}>
            Simple information about Razanova + how to contact us
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 3, md: 4 } }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.06)",
                  background: "rgba(255,255,255,0.9)",
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <SpaIcon sx={{ color: "#8a5a44" }} />
                  <Typography sx={{ fontWeight: 950, fontSize: 20, color: "#3b2a1e" }}>
                    About Razanova
                  </Typography>
                </Stack>

                <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                  Razanova helps you discover your skin needs and build a simple routine.
                  The goal is to make skincare easier: clear steps, clean choices, and a smooth experience.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Stack spacing={1}>
                  <Typography sx={{ fontWeight: 900, color: "#6f4e37" }}>What we focus on:</Typography>
                  <Typography sx={{ color: "text.secondary" }}>• Simple routine (AM + PM)</Typography>
                  <Typography sx={{ color: "text.secondary" }}>• Products that match your skin</Typography>
                  <Typography sx={{ color: "text.secondary" }}>• Easy experience inside the app</Typography>
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} md={5}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.06)",
                  background: "rgba(255,255,255,0.9)",
                }}
              >
                <Typography sx={{ fontWeight: 950, fontSize: 20, color: "#3b2a1e", mb: 2 }}>
                  Contact Us
                </Typography>

                <Stack spacing={1.6}>
                  <Stack direction="row" spacing={1.2} alignItems="center">
                    <MailOutlineIcon sx={{ color: "#8a5a44" }} />
                    <Typography sx={{ fontWeight: 800 }}>support@razanova.com</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1.2} alignItems="center">
                    <PhoneIphoneIcon sx={{ color: "#8a5a44" }} />
                    <Typography sx={{ fontWeight: 800 }}>+962 792 3331111</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1.2} alignItems="center">
                    <InstagramIcon sx={{ color: "#8a5a44" }} />
                    <Typography sx={{ fontWeight: 800 }}>@razanova</Typography>
                  </Stack>
                </Stack>

                <Box
                  sx={{
                    mt: 3,
                    p: 2,
                    borderRadius: 3,
                    background: "rgba(138,90,68,0.07)",
                    border: "1px dashed rgba(138,90,68,0.25)",
                  }}
                >
                  <Typography sx={{ fontWeight: 900, color: "#6f4e37" }}>
                    Business Hours
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    Sun – Thu: 10:00 AM – 6:00 PM
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}