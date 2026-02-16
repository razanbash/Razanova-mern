import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Stack,
  IconButton,
  Container,
} from "@mui/material";

import {
  Inventory2Outlined,
  TuneOutlined,
  ArticleOutlined,
  LogoutOutlined,
  AdminPanelSettingsOutlined,
  ArrowForward,
} from "@mui/icons-material";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!token || user?.role !== "admin") navigate("/login");
  }, [navigate]);

  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f5eee6 0%, #e8d8c3 50%, #d6c2ad 100%)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 6, md: 12 },
          pb: 10,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{ mb: 10 }}
        >
          <Box>
            <Stack direction="row" spacing={1.5} alignItems="center" mb={1.5}>
              <AdminPanelSettingsOutlined
                sx={{ color: "#6F4E37", fontSize: 24 }}
              />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 900,
                  letterSpacing: 4,
                  color: "#6F4E37",
                }}
              >
                ADMIN PANEL
              </Typography>
            </Stack>

            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                background: "linear-gradient(90deg,#4b2e2e,#6F4E37,#8b5e3c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: -2,
                lineHeight: 1,
              }}
            >
              Dashboard
            </Typography>
          </Box>

          <Stack direction="row" spacing={3} alignItems="center">
            <Box
              sx={{ textAlign: "right", display: { xs: "none", sm: "block" } }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 800, color: "#4b2e2e" }}
              >
                {user?.name?.toUpperCase() || "ROOT_ADMIN"}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#8b5e3c", fontWeight: 700 }}
              >
                AUTHENTICATED
              </Typography>
            </Box>

            <IconButton
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
              sx={{
                background: "linear-gradient(135deg,#6F4E37,#4b2e2e)",
                color: "#fff",
                p: 1.5,
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <LogoutOutlined fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              num: "01",
              title: "Products",
              desc: "Manage all products, pricing, stock levels, and visibility across the store.",
              icon: <Inventory2Outlined fontSize="large" />,
              path: "/products",
            },
            {
              num: "02",
              title: "Content Manager",
              desc: "Control homepage sections, text content, banners, and brand storytelling.",
              icon: <ArticleOutlined fontSize="large" />,
              path: "/admin/content",
            },
            {
              num: "03",
              title: "Settings",
              desc: "Update admin credentials, system preferences, and security configurations.",
              icon: <TuneOutlined fontSize="large" />,
              path: "/admin/settings",
            },
          ].map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item.num}
              sx={{ display: "flex" }}
            >
              <Box
                onClick={() => navigate(item.path)}
                sx={{
                  cursor: "pointer",
                  width: "100%",
                  p: 4,
                  borderRadius: "22px",
                  background: "linear-gradient(145deg,#6F4E37,#8b5e3c)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "0.4s",
                  boxShadow: "0 15px 35px rgba(75,46,46,0.25)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 25px 50px rgba(75,46,46,0.35)",
                  },
                }}
              >
                <Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={4}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 900,
                        letterSpacing: 3,
                        opacity: 0.9,
                      }}
                    >
                      {item.num}
                    </Typography>
                    {item.icon}
                  </Stack>

                  <Typography variant="h5" fontWeight={900} sx={{ mb: 2 }}>
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.9,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mt: 6 }}
                >
                  <Typography
                    variant="button"
                    sx={{
                      fontWeight: 900,
                      fontSize: "0.75rem",
                      letterSpacing: 1,
                    }}
                  >
                    OPEN MODULE
                  </Typography>
                  <ArrowForward sx={{ fontSize: 18 }} />
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            mt: 15,
            pt: 4,
            borderTop: "1px solid rgba(75,46,46,0.2)",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 800,
              color: "#4b2e2e",
              letterSpacing: 2,
            }}
          >
            RAZANOVA © 2026
          </Typography>

          <Typography
            variant="caption"
            sx={{
              fontWeight: 800,
              color: "#6F4E37",
              letterSpacing: 2,
            }}
          >
            SYSTEM VERSION: 2.0.4
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
