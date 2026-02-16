import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  IconButton,
  Divider,
  Grid,
  Chip,
} from "@mui/material";

import {
  ArrowBack,
  SaveOutlined,
  HistoryEduOutlined,
  SearchOutlined,
  PushPinOutlined,
  ScheduleOutlined,
  BookmarkBorderOutlined,
  GroupsOutlined,
  FactCheckOutlined,
} from "@mui/icons-material";

export default function ExpertNotesPage() {
  const navigate = useNavigate();

  const [recentNotes] = useState([
    {
      id: "LOG_902",
      user: "lama Omer",
      date: "Feb 11",
      snippet: "Skin barrier shows significant recovery. Continuing ceramides.",
    },
    {
      id: "LOG_901",
      user: "Laila Haddad",
      date: "Feb 11",
      snippet:
        "Severe sensitivity in the orbital area. Adjusting active levels.",
    },
    {
      id: "LOG_900",
      user: "Zaid Abu-Hamdan",
      date: "Feb 10",
      snippet: "Post-acne marking remains. Introduced Azelaic Acid protocol.",
    },
    {
      id: "LOG_899",
      user: "Sarah J. Miller",
      date: "Feb 10",
      snippet:
        "Oily T-zone stabilized. Transitioning to lightweight hydrators.",
    },
    {
      id: "LOG_898",
      user: "Hassan Al-Zoubi",
      date: "Feb 09",
      snippet: "Photosensitivity reported. Increased SPF baseline to 50+.",
    },
    {
      id: "LOG_897",
      user: "Nour Irshaid",
      date: "Feb 09",
      snippet: "Morning routine optimized. Removed physical exfoliants.",
    },
    {
      id: "LOG_896",
      user: "Emily Watson",
      date: "Feb 08",
      snippet: "Excellent response to Vitamin C. Brightening progress +15%.",
    },
  ]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        overflow: "hidden",
        bgcolor: "#FAF7F2",
      }}
    >
      <Box
        sx={{
          width: { md: "400px", lg: "450px" },
          bgcolor: "#3D2B1F",
          borderRight: "1px solid #5C4033",
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            p: 3,
            borderBottom: "1px solid rgba(142,115,91,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <HistoryEduOutlined sx={{ color: "#8E735B" }} />
            <Typography
              variant="button"
              sx={{ color: "#FAF7F2", letterSpacing: 3, fontWeight: 1000 }}
            >
              NOTE_ENTRY_v1
            </Typography>
          </Stack>
          <IconButton
            onClick={() => navigate("/expert/dashboard")}
            sx={{ color: "#8E735B" }}
          >
            <ArrowBack fontSize="small" />
          </IconButton>
        </Box>

        <Box sx={{ p: 4, flex: 1, overflowY: "auto" }}>
          <Stack spacing={5}>
            <Box>
              <Typography
                variant="overline"
                sx={{ color: "#8E735B", fontWeight: 900 }}
              >
                [01] CLIENT_IDENTITY
              </Typography>
              <TextField
                fullWidth
                variant="standard"
                placeholder="Target User Name"
                InputProps={{
                  startAdornment: (
                    <SearchOutlined
                      sx={{ color: "#8E735B", mr: 1, fontSize: 18 }}
                    />
                  ),
                  style: {
                    color: "#FAF7F2",
                    fontWeight: 900,
                    fontSize: "1.2rem",
                  },
                }}
                InputLabelProps={{ style: { color: "#5C4033" } }}
                sx={{ mt: 1 }}
              />
            </Box>

            <Box>
              <Typography
                variant="overline"
                sx={{ color: "#8E735B", fontWeight: 900 }}
              >
                [02] LOG_BODY
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={8}
                placeholder="Type clinical observations..."
                sx={{
                  mt: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    bgcolor: "rgba(255,255,255,0.02)",
                    color: "#D4B499",
                    "& fieldset": { borderColor: "#5C4033" },
                    "&:hover fieldset": { borderColor: "#8E735B" },
                  },
                }}
              />
            </Box>

            <Box>
              <Typography
                variant="overline"
                sx={{ color: "#8E735B", fontWeight: 900 }}
              >
                [03] PRIORITY_LEVEL
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <Chip
                  label="HIGH_PRIORITY"
                  size="small"
                  sx={{
                    bgcolor: "#5C4033",
                    color: "#FAF7F2",
                    fontWeight: 900,
                    borderRadius: 0,
                  }}
                />
                <Chip
                  label="ROUTINE"
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: "#8E735B",
                    color: "#8E735B",
                    fontWeight: 900,
                    borderRadius: 0,
                  }}
                />
              </Stack>
            </Box>
          </Stack>
        </Box>

        <Box sx={{ p: 3, bgcolor: "#2D1F16", borderTop: "1px solid #5C4033" }}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<SaveOutlined />}
            sx={{
              bgcolor: "#8E735B",
              color: "#FAF7F2",
              fontWeight: 1000,
              borderRadius: 0,
              py: 2,
            }}
          >
            PUSH TO MASTER LOG
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          bgcolor: "#F5F0E9",
          p: { xs: 2, md: 8 },
          overflowY: "auto",
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E8D8C3",
                  borderRadius: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <GroupsOutlined sx={{ color: "#8E735B" }} />
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#8E735B", fontWeight: 1000 }}
                  >
                    TOTAL_CLIENTS
                  </Typography>
                  <Typography variant="h6" fontWeight={1000}>
                    1,284
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid #E8D8C3",
                  borderRadius: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <FactCheckOutlined sx={{ color: "#8E735B" }} />
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#8E735B", fontWeight: 1000 }}
                  >
                    RESOLVED_LOGS
                  </Typography>
                  <Typography variant="h6" fontWeight={1000}>
                    8,940
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Typography
            variant="h2"
            fontWeight={1000}
            color="#3D2B1F"
            sx={{ letterSpacing: -3, mb: 4 }}
          >
            System Registry.
          </Typography>

          <Grid container spacing={2}>
            {recentNotes.map((log) => (
              <Grid item xs={12} key={log.id}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    px: 4,
                    bgcolor: "#fff",
                    border: "1px solid #E8D8C3",
                    borderRadius: 0,
                    boxShadow: "10px 10px 0px #E8D8C3",
                    transition: "0.2s",
                    "&:hover": {
                      transform: "translateX(8px)",
                      boxShadow: "15px 15px 0px #3D2B1F",
                    },
                  }}
                >
                  <Grid container alignItems="center">
                    <Grid item xs={12} md={3}>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 1000,
                          color: "#8E735B",
                          display: "block",
                        }}
                      >
                        {log.id}
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight={1000}
                        color="#3D2B1F"
                      >
                        {log.user}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={7}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#5C4033",
                          borderLeft: "2px solid #F5F0E9",
                          pl: 3,
                        }}
                      >
                        {log.snippet}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={2} sx={{ textAlign: "right" }}>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 1000,
                          color: "#8E735B",
                          display: "block",
                        }}
                      >
                        {log.date}
                      </Typography>
                      <IconButton size="small">
                        <BookmarkBorderOutlined sx={{ fontSize: 18 }} />
                      </IconButton>
                      <IconButton size="small">
                        <PushPinOutlined sx={{ fontSize: 18 }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 10, textAlign: "center", opacity: 0.3 }}>
            <Typography
              variant="caption"
              sx={{ fontWeight: 1000, letterSpacing: 10 }}
            >
              RAZANOVA_EXPERT_SESSION // IRBID_UNIT_01
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
