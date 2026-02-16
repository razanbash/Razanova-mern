import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Avatar,
  IconButton,
} from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function ExpertDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!token) return navigate("/login");
    if (!user || user.role !== "expert") return navigate("/dashboard");
  }, [navigate]);

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const [bgIcons] = useState([
    { Icon: SpaOutlinedIcon, top: "6%", left: "6%", size: 140, rotate: -10 },
    {
      Icon: AutoAwesomeOutlinedIcon,
      top: "18%",
      right: "8%",
      size: 100,
      rotate: 8,
    },
    {
      Icon: WaterDropOutlinedIcon,
      bottom: "10%",
      left: "10%",
      size: 120,
      rotate: -6,
    },
    {
      Icon: FavoriteBorderOutlinedIcon,
      bottom: "8%",
      right: "12%",
      size: 110,
      rotate: 10,
    },
  ]);

  const cards = [
    {
      title: "Assessments",
      desc: "Review client skin assessments & status.",
      icon: <AssignmentTurnedInOutlinedIcon />,
      path: "/expert/assessments",
    },
    {
      title: "Notes",
      desc: "Write quick notes for each client.",
      icon: <NoteAltOutlinedIcon />,
      path: "/expert/notes",
    },
    {
      title: "Feedback",
      desc: "Send tips & feedback after review.",
      icon: <RateReviewOutlinedIcon />,
      path: "/expert/feedback",
    },
  ];

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FAF7F2 0%, #E8D8C3 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 2, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {bgIcons.map((b, i) => (
        <b.Icon
          key={i}
          sx={{
            position: "absolute",
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
            fontSize: b.size,
            color: "#8E735B",
            opacity: 0.12,
            transform: `rotate(${b.rotate}deg)`,
            animation: `floatExpert${i} ${6 + i}s ease-in-out infinite alternate`,
            [`@keyframes floatExpert${i}`]: {
              from: { transform: `translateY(0px) rotate(${b.rotate}deg)` },
              to: { transform: `translateY(-28px) rotate(${b.rotate + 8}deg)` },
            },
          }}
        />
      ))}

      <Paper
        elevation={0}
        sx={{
          width: "min(1100px, 96vw)",
          borderRadius: 8,
          overflow: "hidden",
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow: "0 40px 90px rgba(90, 62, 43, 0.12)",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderBottom: "1px solid rgba(142,115,91,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box>
            <Typography
              sx={{ fontWeight: 1000, letterSpacing: 2, color: "#3D2B1F" }}
            >
              RAZANOVA • EXPERT
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: { xs: 28, md: 38 },
                fontWeight: 1000,
                color: "#3D2B1F",
                letterSpacing: -1,
              }}
            >
              Expert Command Studio
            </Typography>

            <Typography sx={{ opacity: 0.75, color: "#5C4033", mt: 0.5 }}>
              Review • Notes • Feedback — keep it simple & clean.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
              <Chip
                label={`Role: ${user?.role || "expert"}`}
                sx={{
                  bgcolor: "rgba(61,43,31,0.08)",
                  color: "#3D2B1F",
                  fontWeight: 800,
                }}
              />
              <Chip
                label={`Name: ${user?.name || user?.fullName || "Expert"}`}
                sx={{
                  bgcolor: "rgba(142,115,91,0.10)",
                  color: "#5C4033",
                  fontWeight: 800,
                }}
              />
            </Stack>
          </Box>

          <IconButton
            onClick={logout}
            sx={{
              bgcolor: "#3D2B1F",
              color: "#fff",
              "&:hover": { bgcolor: "#5C4033" },
              width: 44,
              height: 44,
            }}
          >
            <LogoutIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box sx={{ p: { xs: 3, md: 4 } }}>
          <Grid container spacing={2.5}>
            {cards.map((c) => (
              <Grid item xs={12} md={4} key={c.title}>
                <Card
                  onClick={() => navigate(c.path)}
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 5,
                    cursor: "pointer",
                    bgcolor: "#fff",
                    border: "1px solid rgba(142,115,91,0.18)",
                    transition: "0.25s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 22px 40px rgba(90, 62, 43, 0.12)",
                      borderColor: "rgba(61,43,31,0.35)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Avatar
                      sx={{
                        bgcolor: "rgba(142,115,91,0.12)",
                        color: "#6f4e37",
                        width: 56,
                        height: 56,
                        borderRadius: 3,
                        mb: 2.5,
                      }}
                    >
                      {c.icon}
                    </Avatar>

                    <Typography
                      sx={{ fontWeight: 1000, color: "#3D2B1F", fontSize: 18 }}
                    >
                      {c.title}
                    </Typography>
                    <Typography
                      sx={{ mt: 0.6, color: "#8E735B", lineHeight: 1.6 }}
                    >
                      {c.desc}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 2.2,
                        fontWeight: 900,
                        color: "#6f4e37",
                        letterSpacing: 0.2,
                      }}
                    >
                      Open →
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography
            sx={{ mt: 3, fontSize: 12.5, opacity: 0.7, color: "#5C4033" }}
          ></Typography>
        </Box>
      </Paper>
    </Box>
  );
}
