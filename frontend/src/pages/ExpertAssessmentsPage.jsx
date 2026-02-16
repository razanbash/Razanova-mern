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
  Avatar,
} from "@mui/material";

import {
  ArrowBack,
  SendOutlined,
  HistoryEduOutlined,
  Fingerprint,
  PersonSearchOutlined,
  AssignmentIndOutlined,
  AutoAwesomeOutlined,
  RestoreOutlined,
} from "@mui/icons-material";

export default function ExpertFeedbackPage() {
  const navigate = useNavigate();

  const [targetUser, setTargetUser] = useState("USR_9921");
  const [feedback, setFeedback] = useState("");

  const handleSend = () => {
    alert(`FEEDBACK_DEPLOYED: Notes sent to ${targetUser} ✅`);
    setFeedback("");
  };

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
              FEEDBACK_ENGINE
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
          <Stack spacing={6}>
            <Box>
              <Typography
                variant="overline"
                sx={{ color: "#8E735B", fontWeight: 900 }}
              >
                [01] TARGET_SELECTION
              </Typography>
              <TextField
                fullWidth
                variant="standard"
                label="Client Reference ID"
                value={targetUser}
                onChange={(e) => setTargetUser(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <PersonSearchOutlined
                      sx={{ color: "#8E735B", mr: 1, fontSize: 20 }}
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
                [02] CLINICAL_GUIDANCE
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={10}
                placeholder="Write professional advice..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                sx={{
                  mt: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    bgcolor: "rgba(255,255,255,0.03)",
                    color: "#D4B499",
                    "& fieldset": { borderColor: "#5C4033" },
                    "&:hover fieldset": { borderColor: "#8E735B" },
                  },
                }}
              />
            </Box>
          </Stack>
        </Box>

        <Box sx={{ p: 3, bgcolor: "#2D1F16", borderTop: "1px solid #5C4033" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleSend}
            startIcon={<SendOutlined />}
            sx={{
              bgcolor: "#8E735B",
              color: "#FAF7F2",
              fontWeight: 1000,
              borderRadius: 0,
              py: 2,
            }}
          >
            DEPLOY FEEDBACK
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
        <Paper
          elevation={0}
          sx={{
            maxWidth: "900px",
            mx: "auto",
            bgcolor: "#fff",
            border: "1px solid #E8D8C3",
            p: 8,
            position: "relative",
            boxShadow: "40px 40px 0px #E8D8C3",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: 8,
              bgcolor: "#3D2B1F",
            }}
          />

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Stack direction="row" spacing={3} alignItems="center" mb={4}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "#FAF7F2",
                    border: "1px solid #E8D8C3",
                  }}
                >
                  <AssignmentIndOutlined
                    sx={{ color: "#3D2B1F", fontSize: 40 }}
                  />
                </Avatar>
                <Box>
                  <Typography
                    variant="h4"
                    fontWeight={1000}
                    color="#3D2B1F"
                    sx={{ letterSpacing: -1 }}
                  >
                    {targetUser}
                  </Typography>
                  <Chip
                    label="High Sensitivity Profile"
                    size="small"
                    sx={{ bgcolor: "#F5F0E9", fontWeight: 800 }}
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
              <Typography
                variant="caption"
                sx={{ color: "#8E735B", fontWeight: 1000 }}
              >
                LAST_ASSESSMENT
              </Typography>
              <Typography variant="h6" fontWeight={1000}>
                Feb 11, 2026
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{ color: "#8E735B", fontWeight: 900 }}
              >
                DETECTION_LOG
              </Typography>
              <Stack spacing={2} mt={2}>
                <Box
                  sx={{ p: 2, bgcolor: "#FAF7F2", border: "1px solid #E8D8C3" }}
                >
                  <Typography
                    variant="caption"
                    display="block"
                    fontWeight={1000}
                  >
                    SKIN_TYPE
                  </Typography>
                  <Typography variant="body1" fontWeight={1000}>
                    Oily / Reactive
                  </Typography>
                </Box>
                <Box
                  sx={{ p: 2, bgcolor: "#FAF7F2", border: "1px solid #E8D8C3" }}
                >
                  <Typography
                    variant="caption"
                    display="block"
                    fontWeight={1000}
                  >
                    HYDRATION_LEVEL
                  </Typography>
                  <Typography variant="body1" fontWeight={1000} color="orange">
                    Critical Low (32%)
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{ color: "#8E735B", fontWeight: 900 }}
              >
                ACTIVE_CONCERNS
              </Typography>
              <Stack spacing={1} mt={2}>
                {[
                  "Post-Inflammatory Hyperpigmentation",
                  "Barrier Impairment",
                  "Texture Irregularity",
                ].map((tag) => (
                  <Stack
                    key={tag}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <AutoAwesomeOutlined
                      sx={{ fontSize: 14, color: "#8E735B" }}
                    />
                    <Typography variant="body2" fontWeight={700}>
                      {tag}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} sx={{ mt: 4 }}>
              <Box
                sx={{
                  p: 3,
                  borderLeft: "4px solid #3D2B1F",
                  bgcolor: "#F5F0E9",
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <RestoreOutlined sx={{ color: "#3D2B1F" }} />
                  <Typography variant="body2" fontWeight={800}>
                    Previous Expert Note: "Focus on calming actives before
                    introducing retinoids."
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 10, textAlign: "center", opacity: 0.2 }}>
            <Typography
              variant="caption"
              sx={{ fontWeight: 1000, letterSpacing: 8 }}
            >
              SECURE_EXPERT_SESSION // RAZANOVA_V2
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

