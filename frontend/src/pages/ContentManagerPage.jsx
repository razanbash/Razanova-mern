import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Stack,
  TextField,
  Button,
  Snackbar,
  Alert,
  IconButton,
  CssBaseline,
} from "@mui/material";
import {
  SaveOutlined,
  RestartAlt,
  ArrowBack,
  HistoryEdu,
} from "@mui/icons-material";

const STORAGE_KEY = "razanova_studio_data";

const INITIAL_STATE = {
  heroTitle: "RAZANOVA",
  heroSubtitle: "Beauty that respects your skin.",
  aboutText: "Skincare boutique focused on clean design and luxury routines.",
  footerText: "© 2026 RAZANOVA BOUTIQUE // AMMAN",
};

export default function ContentManagerPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState(INITIAL_STATE);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      setForm({ ...INITIAL_STATE, ...parsed });
    } catch {
      setForm(INITIAL_STATE);
    }
  }, []);

  const updateField = useCallback((key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const manualSave = () => setToastOpen(true);

  const resetForm = () => {
    localStorage.removeItem(STORAGE_KEY);
    setForm(INITIAL_STATE);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        bgcolor: "#FAF7F2",
        overflow: "hidden",
      }}
    >
      <CssBaseline />

      <Box
        sx={{
          width: 80,
          bgcolor: "#1A140F",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
        }}
      >
        <IconButton
          onClick={() => navigate(-1)}
          sx={{ color: "#8E735B", mb: "auto" }}
        >
          <ArrowBack />
        </IconButton>

        <Stack spacing={3}>
          <IconButton
            onClick={manualSave}
            sx={{
              color: "#FAF7F2",
              bgcolor: "rgba(142,115,91,0.2)",
              borderRadius: 0,
            }}
          >
            <SaveOutlined />
          </IconButton>

          <IconButton onClick={resetForm} sx={{ color: "#8E735B" }}>
            <RestartAlt />
          </IconButton>
        </Stack>
      </Box>

      <Grid container sx={{ flex: 1 }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            bgcolor: "#fff",
            p: 5,
            borderRight: "1px solid #E8D8C3",
            overflowY: "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 1000,
              color: "#1A140F",
              mb: 6,
              letterSpacing: -2,
            }}
          >
            Studio_Drafts.
          </Typography>

          <Stack spacing={5}>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 900,
                  letterSpacing: 2,
                  color: "#8E735B",
                  mb: 1,
                }}
              >
                PRIMARY_HEADING
              </Typography>
              <TextField
                fullWidth
                variant="standard"
                value={form.heroTitle}
                onChange={(e) => updateField("heroTitle", e.target.value)}
                InputProps={{ sx: { fontSize: "1.8rem", fontWeight: 1000 } }}
              />
            </Box>

            <Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 900,
                  letterSpacing: 2,
                  color: "#8E735B",
                  mb: 1,
                }}
              >
                NARRATIVE_SUBTEXT
              </Typography>
              <TextField
                fullWidth
                variant="standard"
                value={form.heroSubtitle}
                onChange={(e) => updateField("heroSubtitle", e.target.value)}
              />
            </Box>

            <Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 900,
                  letterSpacing: 2,
                  color: "#8E735B",
                  mb: 1,
                }}
              >
                ABOUT_BODY
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                value={form.aboutText}
                onChange={(e) => updateField("aboutText", e.target.value)}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
              />
            </Box>
          </Stack>

          <Button
            fullWidth
            onClick={manualSave}
            sx={{
              mt: 10,
              py: 2,
              bgcolor: "#1A140F",
              color: "white",
              borderRadius: 0,
              fontWeight: 1000,
              "&:hover": { bgcolor: "#3D2B1F" },
            }}
          >
            DEPLOY_TO_LIVE
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          sx={{
            bgcolor: "#FAF7F2",
            p: 10,
            overflowY: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 800 }}>
            <Paper
              elevation={0}
              sx={{
                p: 10,
                bgcolor: "#fff",
                border: "1px solid #E8D8C3",
                boxShadow: "40px 40px 0px #F2EBE1",
                position: "relative",
              }}
            >
              <HistoryEdu
                sx={{
                  position: "absolute",
                  top: 40,
                  right: 40,
                  fontSize: 50,
                  color: "#FAF7F2",
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 1000,
                  fontSize: "6rem",
                  lineHeight: 0.8,
                  letterSpacing: -8,
                  color: "#1A140F",
                  mb: 6,
                }}
              >
                {form.heroTitle}
              </Typography>

              <Typography sx={{ color: "#8E735B", fontStyle: "italic" }}>
                {form.heroSubtitle}
              </Typography>

              <Box sx={{ width: 40, height: 4, bgcolor: "#1A140F", my: 4 }} />

              <Typography
                sx={{ color: "#3D2B1F", lineHeight: 2.2, fontSize: "1.1rem" }}
              >
                {form.aboutText}
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={toastOpen}
        autoHideDuration={2000}
        onClose={() => setToastOpen(false)}
      >
        <Alert
          severity="success"
          sx={{ bgcolor: "#1A140F", color: "#FAF7F2", borderRadius: 0 }}
        >
          SYNCHRONIZED
        </Alert>
      </Snackbar>
    </Box>
  );
}
