import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

export default function RoutinePage() {
  const navigate = useNavigate();

  let skinProfile = null;
  try {
    skinProfile = JSON.parse(localStorage.getItem("skinProfile") || "null");
  } catch {
    skinProfile = null;
  }

  const reset = () => {
    localStorage.removeItem("skinProfile");
    navigate("/assessment");
  };

  let routine = null;

  if (skinProfile) {
    const type = skinProfile.type || "Normal";
    const sensitive = !!skinProfile.sensitive;
    const sensNote = sensitive ? " (Sensitive-friendly)" : "";

    if (type === "Dry") {
      routine = {
        title: "Dry Skin Routine",
        chips: ["Dry", sensitive ? "Sensitive" : "Normal"],
        am: [
          "Cream cleanser",
          "Hydrating serum (Hyaluronic acid)",
          "Rich moisturizer",
          "Sunscreen SPF 30+",
        ],
        pm: [
          "Cream cleanser",
          "Hydrating serum",
          sensitive
            ? "Barrier repair moisturizer"
            : "Moisturizer + face oil (optional)",
        ],
        tip: "Focus on hydration and avoid harsh foaming cleansers." + sensNote,
      };
    } else if (type === "Oily") {
      routine = {
        title: "Oily Skin Routine",
        chips: ["Oily", sensitive ? "Sensitive" : "Normal"],
        am: [
          "Gel cleanser",
          sensitive ? "Niacinamide (optional)" : "Niacinamide serum",
          "Light moisturizer (gel)",
          "Sunscreen SPF 30+",
        ],
        pm: [
          "Gel cleanser",
          sensitive ? "Simple moisturizer" : "BHA 2–3x/week OR retinol slowly",
          "Moisturizer (light)",
        ],
        tip: "Don’t over-wash. Add active ingredients slowly." + sensNote,
      };
    } else if (type === "Combination") {
      routine = {
        title: "Combination Skin Routine",
        chips: ["Combination", sensitive ? "Sensitive" : "Normal"],
        am: [
          "Gentle cleanser",
          "Light hydrating serum",
          "Moisturizer (focus on dry areas)",
          "Sunscreen SPF 30+",
        ],
        pm: [
          "Gentle cleanser",
          sensitive
            ? "Moisturizer (simple)"
            : "Niacinamide OR BHA on T-zone 2–3x/week",
          "Moisturizer",
        ],
        tip: "Treat T-zone and cheeks differently if needed." + sensNote,
      };
    } else {
      routine = {
        title: "Normal Skin Routine",
        chips: ["Normal", sensitive ? "Sensitive" : "Normal"],
        am: ["Gentle cleanser", "Moisturizer", "Sunscreen SPF 30+"],
        pm: ["Gentle cleanser", "Moisturizer"],
        tip: "Keep it simple and consistent." + sensNote,
      };
    }
  }

  if (!skinProfile) {
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
            width: "min(900px, 96vw)",
            borderRadius: 5,
            overflow: "hidden",
            background: "rgba(255,255,255,0.88)",
            boxShadow: "0 24px 70px rgba(111,78,55,0.22)",
          }}
        >
          <Box
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #7a553c, #a57a56)",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 1000 }}>
              Routine
            </Typography>
            <Typography sx={{ opacity: 0.9 }}>
              You don’t have a skin type yet
            </Typography>
          </Box>

          <Box sx={{ p: 3 }}>
            <Typography sx={{ mb: 2 }}>
              Please take the assessment first, then come back here.
            </Typography>

            <Button
              variant="contained"
              onClick={() => navigate("/assessment")}
              sx={{
                bgcolor: "#8a5a44",
                "&:hover": { bgcolor: "#734735" },
                borderRadius: 3,
                fontWeight: 900,
              }}
            >
              Go to Assessment
            </Button>
          </Box>
        </Paper>
      </Box>
    );
  }

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
          width: "min(1100px, 96vw)",
          borderRadius: 5,
          overflow: "hidden",
          background: "rgba(255,255,255,0.88)",
          boxShadow: "0 24px 70px rgba(111,78,55,0.22)",
        }}
      >
        <Box
          sx={{
            p: 3,
            background: "linear-gradient(135deg, #7a553c, #a57a56)",
            color: "white",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 1000 }}>
            {routine.title}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: "wrap" }}>
            {routine.chips.map((c) => (
              <Chip
                key={c}
                label={c}
                sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }}
              />
            ))}
          </Stack>
        </Box>

        <Box sx={{ p: 3 }}>
          <Typography sx={{ mb: 2, color: "#6f4e37", fontWeight: 900 }}>
            {routine.tip}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 2,
            }}
          >
            <Paper
              sx={{ p: 2.5, borderRadius: 4, border: "1px solid #eadfd6" }}
            >
              <Typography sx={{ fontWeight: 950, color: "#6f4e37", mb: 1 }}>
                AM Routine
              </Typography>
              {routine.am.map((s, i) => (
                <Typography key={i} sx={{ mb: 0.7 }}>
                  • {s}
                </Typography>
              ))}
            </Paper>

            <Paper
              sx={{ p: 2.5, borderRadius: 4, border: "1px solid #eadfd6" }}
            >
              <Typography sx={{ fontWeight: 950, color: "#6f4e37", mb: 1 }}>
                PM Routine
              </Typography>
              {routine.pm.map((s, i) => (
                <Typography key={i} sx={{ mb: 0.7 }}>
                  • {s}
                </Typography>
              ))}
            </Paper>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Button
              variant="outlined"
              onClick={() => navigate("/profile")}
              sx={{
                borderRadius: 3,
                borderColor: "rgba(111,78,55,0.45)",
                color: "#6f4e37",
                fontWeight: 900,
              }}
            >
              Back to Profile
            </Button>

            <Button
              variant="outlined"
              onClick={reset}
              sx={{
                borderRadius: 3,
                borderColor: "rgba(180,80,80,0.55)",
                color: "#b24a4a",
                fontWeight: 900,
              }}
            >
              Reset
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/products")}
              sx={{
                borderRadius: 3,
                bgcolor: "#8a5a44",
                "&:hover": { bgcolor: "#734735" },
                fontWeight: 900,
              }}
            >
              Products
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
