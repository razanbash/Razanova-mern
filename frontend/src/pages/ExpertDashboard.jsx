import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Button, Stack, Chip } from "@mui/material";

export default function ExpertDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!token) {
      navigate("/login");
      return;
    }

    if (!user || user.role !== "expert") {
      navigate("/dashboard");
      return;
    }
  }, [navigate]);

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
            background: "linear-gradient(135deg, #7a553c, #a57a56)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -60,
              left: -60,
              width: 160,
              height: 160,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.12)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -70,
              right: -70,
              width: 220,
              height: 220,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.10)",
            }}
          />

          <Typography sx={{ fontWeight: 900, fontSize: 26, letterSpacing: 1 }}>
            RAZANOVA
          </Typography>

          <Typography
            sx={{ mt: 2, fontSize: 34, fontWeight: 900, lineHeight: 1.1 }}
          >
            Expert Dashboard
          </Typography>

          <Typography sx={{ mt: 1, opacity: 0.9 }}>
            Review assessments and help build routines.
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
            <Chip
              label={`Role: ${user?.role || "expert"}`}
              sx={{
                bgcolor: "rgba(255,255,255,0.18)",
                color: "#fff",
                fontWeight: 700,
              }}
            />
            <Chip
              label="Skin Care Tips "
              sx={{
                bgcolor: "rgba(5, 4, 4, 0.18)",
                color: "#fff",
                fontWeight: 700,
              }}
            />
          </Stack>
        </Box>

        <Box sx={{ p: { xs: 3, md: 4 }, bgcolor: "rgba(255,255,255,0.65)" }}>
          <Typography variant="h4" sx={{ fontWeight: 900, mb: 1 }}>
            Expert Actions
          </Typography>
          <Typography sx={{ opacity: 0.75, mb: 3 }}>
            Go to routine and guidance pages.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              bgcolor: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <Stack spacing={1.5}>
              <Button
                variant="contained"
                onClick={() => navigate("/routine")}
                sx={{
                  fontWeight: 800,
                  borderRadius: 3,
                  bgcolor: "#6f4e37",
                  "&:hover": { bgcolor: "#5a3e2b" },
                }}
              >
                View Routines
              </Button>

              <Button
                variant="outlined"
                onClick={() => navigate("/assessment")}
                sx={{
                  fontWeight: 800,
                  borderRadius: 3,
                  borderColor: "#6f4e37",
                  color: "#6f4e37",
                  "&:hover": {
                    borderColor: "#5a3e2b",
                    backgroundColor: "rgba(111,78,55,0.08)",
                  },
                }}
              >
                View Assessment Page
              </Button>

              <Button
                variant="outlined"
                onClick={() => navigate("/dashboard")}
                sx={{
                  fontWeight: 800,
                  borderRadius: 3,
                  borderColor: "#6f4e37",
                  color: "#6f4e37",
                  "&:hover": {
                    borderColor: "#5a3e2b",
                    backgroundColor: "rgba(111,78,55,0.08)",
                  },
                }}
              >
                Go to User Dashboard
              </Button>
            </Stack>
          </Paper>

          <Typography sx={{ mt: 2, fontSize: 13, opacity: 0.7 }}>
            Tip: For the project, expert features can be simple UI + navigation
            ✅
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
