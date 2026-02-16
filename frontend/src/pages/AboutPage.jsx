import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Divider,
  Button,
  Grid,
} from "@mui/material";

import Spa from "@mui/icons-material/Spa";
import MailOutline from "@mui/icons-material/MailOutline";
import Instagram from "@mui/icons-material/Instagram";
import PhoneIphone from "@mui/icons-material/PhoneIphone";
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import WaterDrop from "@mui/icons-material/WaterDrop";
import WorkspacePremiumOutlined from "@mui/icons-material/WorkspacePremiumOutlined";
import ScienceOutlined from "@mui/icons-material/ScienceOutlined";
import SpeedOutlined from "@mui/icons-material/SpeedOutlined";
import ShieldOutlined from "@mui/icons-material/ShieldOutlined";

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
        p: { xs: 2, md: 4 },
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

      <Paper
        elevation={20}
        sx={{
          width: "min(700px, 100%)",
          maxHeight: "85vh",
          overflowY: "auto",
          bgcolor: "#fff",
          zIndex: 2,
          border: "1px solid #dcd7d1",
          "&::-webkit-scrollbar": { width: "4px" },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: "#dcd0c0",
            borderRadius: "10px",
          },
        }}
      >
        <Box
          sx={{ p: 5, bgcolor: "#5a3e2b", color: "#fff", textAlign: "center" }}
        >
          <Spa sx={{ fontSize: 45, mb: 1 }} />
          <Typography variant="h4" fontWeight={900}>
            Razanova.
          </Typography>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 3, opacity: 0.8 }}
          >
            Intelligence • Purity • Protocol
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 3, md: 6 } }}>
          <Typography variant="h6" fontWeight={800} color="#3d2b1f" mb={1.5}>
            Our Philosophy
          </Typography>
          <Typography variant="body2" color="#5c4d42" lineHeight={1.8} mb={4}>
            At Razanova, we believe skincare is an exact science. We eliminate
            the noise of the beauty industry to provide precision-led protocols.
            By analyzing your unique biometric profile, we deliver essential
            routines that prioritize barrier health above all else.
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography variant="h6" fontWeight={800} color="#3d2b1f" mb={2.5}>
            Core Intelligence
          </Typography>
          <Grid container spacing={3} mb={5}>
            <Grid item xs={12} sm={6}>
              <Stack direction="row" spacing={2}>
                <SpeedOutlined sx={{ color: "#8a5a44" }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight={800}>
                    Real-time Analysis
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Instant skin metrics via our expert command studio.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack direction="row" spacing={2}>
                <ShieldOutlined sx={{ color: "#8a5a44" }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight={800}>
                    Barrier Defense
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Formulas designed to reinforce the acid mantle.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack direction="row" spacing={2}>
                <ScienceOutlined sx={{ color: "#8a5a44" }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight={800}>
                    Bio-Matched
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Ingredients tuned to your skin's specific pH level.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack direction="row" spacing={2}>
                <WorkspacePremiumOutlined sx={{ color: "#8a5a44" }} />
                <Typography variant="subtitle2" fontWeight={800}>
                  Clinical Grade
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Pure ceramides and actives with zero synthetic fillers.
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ mb: 4 }} />

          <Typography variant="h6" fontWeight={800} color="#3d2b1f" mb={1.5}>
            The Razanova Standard
          </Typography>
          <Typography variant="body2" color="#5c4d42" lineHeight={1.8} mb={4}>
            Every protocol we deploy is iteratively adjusted based on your
            skin's progress. We are not just a brand; we are a continuous
            feedback loop between expert knowledge and your personal skin
            journey. Based in the heart of Jordan, we understand the
            environmental stressors unique to our region.
          </Typography>

          <Stack
            spacing={2.5}
            mb={5}
            sx={{ bgcolor: "#faf7f2", p: 3, borderRadius: 3 }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <MailOutline sx={{ color: "#8a5a44", fontSize: 20 }} />
              <Typography variant="body2" fontWeight={700}>
                support@razanova.com
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Instagram sx={{ color: "#8a5a44", fontSize: 20 }} />
              <Typography variant="body2" fontWeight={700}>
                @razanova.skin
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <PhoneIphone sx={{ color: "#8a5a44", fontSize: 20 }} />
              <Typography variant="body2" fontWeight={700}>
                +962 792 33311
              </Typography>
            </Stack>
          </Stack>

          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate("/")}
              sx={{
                bgcolor: "#5a3e2b",
                color: "#fff",
                fontWeight: 800,
                borderRadius: 2.5,
                py: 1.5,
                mb: 2,
                "&:hover": { bgcolor: "#3d2b1f" },
              }}
            >
              Back to Studio
            </Button>
            <Typography
              variant="caption"
              color="#a57a56"
              fontWeight={700}
              sx={{ letterSpacing: 1 }}
            >
              IRBID, JORDAN • EST. 2024
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
