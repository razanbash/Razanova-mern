import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  Chip,
  Grid,
  Avatar,
} from "@mui/material";

import {
  SendOutlined,
  SearchOutlined,
  VerifiedUserOutlined,
  AutoAwesomeOutlined,
} from "@mui/icons-material";

export default function PositiveFeedbackCenter() {
  const [comments] = useState([
    {
      id: "REV_01",
      user: "Rana K.",
      text: "The barrier repair serum is literally a miracle in a bottle. My skin has never felt this calm.",
      tag: "Miracle Results",
    },
    {
      id: "REV_02",
      user: "Omar S.",
      text: "Best architectural skincare line I've used. The design and the results are both 10/10.",
      tag: "Design & Function",
    },
    {
      id: "REV_03",
      user: "Lina M.",
      text: "I'm seeing a massive difference in my hydration levels. 55% index achieved today!",
      tag: "Hydration Success",
    },
    {
      id: "REV_04",
      user: "Zaid T.",
      text: "The night cream texture is so premium. It feels like a spa treatment every evening.",
      tag: "Texture",
    },
    {
      id: "REV_05",
      user: "Nour H.",
      text: "Finally found a brand that respects sensitive skin. No stinging, just pure glow.",
      tag: "Sensitive Safe",
    },
    {
      id: "REV_06",
      user: "Faisal B.",
      text: "The expert feedback I got yesterday was so helpful. Real professional advice!",
      tag: "Consultation",
    },
    {
      id: "REV_07",
      user: "Sara J.",
      text: "Obsessed with the minimalism. My vanity looks as good as my skin does now.",
      tag: "Aesthetic",
    },
    {
      id: "REV_08",
      user: "Maya L.",
      text: "The Vitamin C formulation is so stable. No oxidation at all after 2 months.",
      tag: "Formulation",
    },
    {
      id: "REV_09",
      user: "Hani Q.",
      text: "My acne scarring is almost gone. Razanova is the only thing that worked for me.",
      tag: "Acne Scarring",
    },
    {
      id: "REV_10",
      user: "Dana W.",
      text: "Love the transparency about ingredients. Every active is explained perfectly.",
      tag: "Transparency",
    },
    {
      id: "REV_11",
      user: "Kareem A.",
      text: "Quick shipping to Amman! And the packaging was beautiful.",
      tag: "Logistics",
    },
    {
      id: "REV_12",
      user: "Tala G.",
      text: "The eye cream actually works on dark circles. I look awake for once!",
      tag: "Results",
    },
    {
      id: "REV_13",
      user: "Ahmad V.",
      text: "Highly recommend the cleanser for oily skin. Cleans without stripping.",
      tag: "Cleansing",
    },
    {
      id: "REV_14",
      user: "Layla P.",
      text: "My skin barrier was destroyed by other brands. Razanova saved it in one week.",
      tag: "Barrier Repair",
    },
    {
      id: "REV_15",
      user: "Samir E.",
      text: "The subscription model is so convenient. Never running out of my staples again.",
      tag: "Subscription",
    },
    {
      id: "REV_16",
      user: "Jana R.",
      text: "Architectural beauty indeed. The science behind the brand is clearly visible.",
      tag: "Science",
    },
    {
      id: "REV_17",
      user: "Yousef K.",
      text: "Subtle scent, non-greasy, and high performance. Perfect for men's skin too.",
      tag: "Unisex",
    },
    {
      id: "REV_18",
      user: "Reem D.",
      text: "Every time I use the serum, I get compliments on my glow. Thank you!",
      tag: "The Glow",
    },
  ]);

  const [activeComment, setActiveComment] = useState(comments[0]);
  const [reply, setReply] = useState("");

  const handleSend = () => {
    alert(
      `RESPONSE_SENT: Professional gratitude transmitted to ${activeComment.user}`,
    );
    setReply("");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        bgcolor: "#F0E6D2",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: 450,
          bgcolor: "#fff",
          borderRight: "1px solid #E8D8C3",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ p: 3, borderBottom: "1px solid #E8D8C3" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 2 }}
          >
            <Typography
              variant="button"
              sx={{ fontWeight: 1000, color: "#3D2B1F" }}
            >
              COMMUNITY_REPORTS
            </Typography>
            <Chip
              label={`${comments.length} NEW`}
              size="small"
              sx={{
                bgcolor: "#3D2B1F",
                color: "white",
                borderRadius: 0,
                fontWeight: 900,
              }}
            />
          </Stack>
          <TextField
            fullWidth
            size="small"
            placeholder="Search comments..."
            InputProps={{
              startAdornment: (
                <SearchOutlined
                  sx={{ fontSize: 18, mr: 1, color: "#8E735B" }}
                />
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
                bgcolor: "#FAF7F2",
              },
            }}
          />
        </Box>

        <Box sx={{ flex: 1, overflowY: "auto" }}>
          {comments.map((c) => (
            <Box
              key={c.id}
              onClick={() => setActiveComment(c)}
              sx={{
                p: 3,
                cursor: "pointer",
                borderBottom: "1px solid #F5F0E9",
                bgcolor: activeComment.id === c.id ? "#FAF7F2" : "transparent",
                borderLeft: `4px solid ${activeComment.id === c.id ? "#3D2B1F" : "transparent"}`,
                transition: "0.2s",
                "&:hover": { bgcolor: "#FAF7F2" },
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ mb: 1 }}
              >
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 1000, color: "#3D2B1F" }}
                >
                  {c.user}
                </Typography>
                <Typography variant="caption" sx={{ color: "#8E735B" }}>
                  {c.id}
                </Typography>
              </Stack>
              <Typography
                variant="body2"
                sx={{ color: "#3D2B1F", mb: 1, fontWeight: 500 }}
              >
                {c.text.substring(0, 60)}...
              </Typography>
              <Chip
                label={c.tag}
                size="small"
                sx={{
                  height: 16,
                  fontSize: "9px",
                  fontWeight: 800,
                  bgcolor: "#E8D8C3",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ flex: 1, p: 8, overflowY: "auto", bgcolor: "#f0e2da" }}>
        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 6 }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                bgcolor: "#3D2B1F",
                fontSize: "2rem",
                fontWeight: 1000,
              }}
            >
              {activeComment.user[0]}
            </Avatar>
            <Box>
              <Typography
                variant="h3"
                sx={{ fontWeight: 1000, color: "#3D2B1F", letterSpacing: -2 }}
              >
                {activeComment.user}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                <VerifiedUserOutlined sx={{ fontSize: 16, color: "#4caf50" }} />
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 900, color: "#4caf50" }}
                >
                  LOYAL_CLIENT
                </Typography>
              </Stack>
            </Box>
          </Stack>

          <Paper
            elevation={0}
            sx={{
              p: 5,
              bgcolor: "#FAF7F2",
              border: "1px solid #E8D8C3",
              borderRadius: 0,
              position: "relative",
            }}
          >
            <AutoAwesomeOutlined
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                color: "#E8D8C3",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                fontStyle: "italic",
                lineHeight: 1.4,
                color: "#3D2B1F",
              }}
            >
              "{activeComment.text}"
            </Typography>
          </Paper>

          <Box sx={{ mt: 6 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Typography
                variant="button"
                sx={{ fontWeight: 1000, color: "#8E735B" }}
              >
                EXPERT_RESPONSE
              </Typography>
              <Stack direction="row" spacing={1}>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    borderRadius: 0,
                    fontSize: 10,
                    borderColor: "#E8D8C3",
                    color: "#3D2B1F",
                  }}
                >
                  TEMPLATE_GRATITUDE
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    borderRadius: 0,
                    fontSize: 10,
                    borderColor: "#E8D8C3",
                    color: "#3D2B1F",
                  }}
                >
                  TEMPLATE_ROUTINE
                </Button>
              </Stack>
            </Stack>
            <TextField
              fullWidth
              multiline
              rows={8}
              placeholder="Acknowledge this positive feedback..."
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  bgcolor: "#fff",
                },
              }}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleSend}
              startIcon={<SendOutlined />}
              sx={{
                mt: 3,
                py: 2,
                bgcolor: "#3D2B1F",
                borderRadius: 0,
                fontWeight: 1000,
              }}
            >
              TRANSMIT_RESPONSE
            </Button>
          </Box>

          <Grid container spacing={4} sx={{ mt: 8 }}>
            <Grid item xs={4}>
              <Typography
                variant="caption"
                display="block"
                sx={{ fontWeight: 900, color: "#8E735B" }}
              >
                CLIENT_RATING
              </Typography>
              <Typography variant="h5" fontWeight={1000}>
                5.0 / 5.0
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="caption"
                display="block"
                sx={{ fontWeight: 900, color: "#8E735B" }}
              >
                SKIN_GOALS
              </Typography>
              <Typography variant="h5" fontWeight={1000}>
                92% MET
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="caption"
                display="block"
                sx={{ fontWeight: 900, color: "#8E735B" }}
              >
                SENTIMENT
              </Typography>
              <Chip
                label="EXCEPTIONALLY_POSITIVE"
                size="small"
                sx={{
                  bgcolor: "#E8F5E9",
                  color: "#2E7D32",
                  fontWeight: 1000,
                  borderRadius: 0,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
