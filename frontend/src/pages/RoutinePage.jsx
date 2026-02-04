import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Divider,
  Tabs,
  Tab,
  Checkbox,
  LinearProgress,
} from "@mui/material";
import {
  Spa,
  AutoAwesome,
  WaterDrop,
  FavoriteBorder,
} from "@mui/icons-material";

const ROUTINES = {
  Dry: {
    am: ["Cream Cleanser", "HA Serum", "Rich Moisturizer", "SPF 30+"],
    pm: ["Cream Cleanser", "Hydrating Serum", "Facial Oil"],
    tip: "Focus on lipid replacement and moisture retention.",
  },
  Oily: {
    am: [
      "Gel Cleanser",
      "Niacinamide Serum",
      "Oil-Free Hydrator",
      "Matte SPF 30+",
    ],
    pm: ["Gel Cleanser", "BHA Exfoliant", "Lightweight Moisturizer"],
    tip: "Maintain hydration to prevent sebum overproduction.",
  },
  Combination: {
    am: [
      "Gentle Cleanser",
      "Hydrating Serum",
      "Targeted Moisturizer",
      "SPF 30+",
    ],
    pm: ["Gentle Cleanser", "T-Zone Treatment", "Moisturizer"],
    tip: "Address oiliness and dryness independently.",
  },
  Normal: {
    am: ["Gentle Cleanser", "Daily Moisturizer", "Sunscreen SPF 30+"],
    pm: ["Gentle Cleanser", "Night Moisturizer"],
    tip: "Keep it simple and consistent.",
  },
};

export default function RoutinePage() {
  const navigate = useNavigate();
  const [profile] = useState(() =>
    JSON.parse(localStorage.getItem("skinProfile") || "null"),
  );
  const [tab, setTab] = useState(0);
  const [done, setDone] = useState({});

  if (!profile)
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          bgcolor: "#F3E9DC",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => navigate("/assessment")}
          sx={{
            color: "#3d2b1f",
            borderColor: "#3d2b1f",
            borderRadius: 0,
            fontWeight: 700,
          }}
        >
          Access Assessment
        </Button>
      </Box>
    );

  const type = profile.type || "Normal",
    routine = ROUTINES[type] || ROUTINES.Normal;
  const currentSteps = tab === 0 ? routine.am : routine.pm;
  const progress =
    (currentSteps.filter((_, i) => done[`${tab}-${i}`]).length /
      currentSteps.length) *
    100;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F3E9DC",
        py: 6,
        px: 2,
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
            color: "#dcd0c0",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />
      ))}

      <Box sx={{ maxWidth: 650, mx: "auto", position: "relative", zIndex: 1 }}>
        <Box sx={{ mb: 4, textAlign: "left" }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 3, color: "#8c7b6c", fontWeight: 700 }}
          >
            Dermatological Regimen
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, color: "#3d2b1f", mb: 1 }}
          >
            {type.toUpperCase()} SKIN
          </Typography>
          <Divider sx={{ width: 50, height: 3, bgcolor: "#3d2b1f", mb: 2 }} />
        </Box>

        <Paper
          elevation={0}
          sx={{
            bgcolor: "#fff",
            border: "1px solid #dcd7d1",
            p: { xs: 3, md: 5 },
            borderRadius: 0,
          }}
        >
          <Box sx={{ mb: 4 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 4,
                bgcolor: "#f4f1ee",
                "& .MuiLinearProgress-bar": { bgcolor: "#3d2b1f" },
              }}
            />
          </Box>
          <Tabs
            value={tab}
            onChange={(e, val) => setTab(val)}
            sx={{
              mb: 3,
              borderBottom: "1px solid #f4f1ee",
              "& .MuiTabs-indicator": { bgcolor: "#3d2b1f" },
              "& .MuiTab-root": {
                color: "#8c7b6c",
                fontWeight: 700,
                "&.Mui-selected": { color: "#3d2b1f" },
              },
            }}
          >
            <Tab label="Morning" />
            <Tab label="Evening" />
          </Tabs>
          <Typography
            variant="body2"
            sx={{
              mb: 4,
              color: "#5c4d42",
              fontStyle: "italic",
              borderLeft: "3px solid #8c7b6c",
              pl: 2,
            }}
          >
            Protocol: {routine.tip}
          </Typography>
          <Stack spacing={0}>
            {currentSteps.map((step, i) => (
              <Box
                key={`${tab}-${i}`}
                onClick={() =>
                  setDone({ ...done, [`${tab}-${i}`]: !done[`${tab}-${i}`] })
                }
                sx={{
                  py: 2,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  borderBottom: "1px solid #f4f1ee",
                  opacity: done[`${tab}-${i}`] ? 0.4 : 1,
                }}
              >
                <Checkbox
                  checked={!!done[`${tab}-${i}`]}
                  sx={{
                    color: "#dcd7d1",
                    "&.Mui-checked": { color: "#3d2b1f" },
                    p: 0,
                    mr: 2,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    color: "#3d2b1f",
                    textDecoration: done[`${tab}-${i}`]
                      ? "line-through"
                      : "none",
                  }}
                >
                  {step}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate("/products")}
              sx={{
                bgcolor: "#3d2b1f",
                color: "#fff",
                borderRadius: 0,
                fontWeight: 700,
                py: 1.5,
                "&:hover": { bgcolor: "#2a1e15" },
              }}
            >
              Recommended Products
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => {
                localStorage.removeItem("skinProfile");
                navigate("/assessment");
              }}
              sx={{
                color: "#3d2b1f",
                borderColor: "#3d2b1f",
                borderRadius: 0,
                fontWeight: 700,
              }}
            >
              Reset Protocol
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
