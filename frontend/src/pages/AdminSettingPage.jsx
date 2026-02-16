import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  Grid,
  Divider,
  Switch,
  FormControlLabel,
  IconButton,
  Alert,
  Chip,
} from "@mui/material";
import {
  ArrowBack,
  SaveOutlined,
  DnsOutlined,
  SecurityOutlined,
  RestartAlt,
  SyncLockOutlined,
  ManageHistoryOutlined,
  SettingsInputComponent,
  CloudDoneOutlined,
  StorageOutlined,
  BackupOutlined,
} from "@mui/icons-material";

export default function AdminSettingsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("general");
  const [dbLatency, setDbLatency] = useState(14.2);
  const [serverOnline, setServerOnline] = useState(true);
  const [activeUsers, setActiveUsers] = useState(142);

  useEffect(() => {
    const interval = setInterval(() => {
      setDbLatency((Math.random() * 5 + 12).toFixed(2));
      setServerOnline(Math.random() > 0.05);
      setActiveUsers(Math.floor(Math.random() * 50) + 120);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: "general", label: "General Registry", icon: SettingsInputComponent },
    { id: "network", label: "Endpoints & API", icon: DnsOutlined },
    { id: "security", label: "Security & Keys", icon: SecurityOutlined },
    { id: "logs", label: "System Audit Logs", icon: ManageHistoryOutlined },
  ];

  const brownButton = {
    bgcolor: "#5C4033",
    color: "#FAF7F2",
    borderRadius: 0,
    fontWeight: 900,
    boxShadow: "none",
    "&:hover": {
      bgcolor: "#3D2B1F",
      boxShadow: "none",
    },
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FAF7F2", display: "flex" }}>
      <Box
        sx={{
          width: 280,
          bgcolor: "#3D2B1F",
          borderRight: "1px solid #5C4033",
          position: "fixed",
          height: "100vh",
          boxShadow: "0 0 40px rgba(0,0,0,0.3)",
          zIndex: 1100,
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography
            variant="h6"
            sx={{ color: "#FAF7F2", fontWeight: 1000, letterSpacing: 2 }}
          >
            SYSTEM_CORE
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#8E735B", fontWeight: 700 }}
          >
            Version 2.0.4 Rev.88
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Chip
              label="ROLE: SUPER_ADMIN"
              size="small"
              sx={{
                bgcolor: "#8E735B",
                color: "#fff",
                fontWeight: 700,
                borderRadius: 0,
              }}
            />
          </Box>
        </Box>

        <Stack>
          {tabs.map((item) => (
            <Box
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              sx={{
                p: 2.5,
                px: 4,
                display: "flex",
                alignItems: "center",
                gap: 2,
                cursor: "pointer",
                bgcolor:
                  activeTab === item.id
                    ? "rgba(142,115,91,0.15)"
                    : "transparent",
                borderLeft: `4px solid ${activeTab === item.id ? "#8E735B" : "transparent"}`,
                transition: "0.2s",
                "&:hover": { bgcolor: "rgba(142,115,91,0.1)" },
              }}
            >
              <item.icon
                sx={{
                  color: activeTab === item.id ? "#FAF7F2" : "#8E735B",
                  fontSize: 20,
                }}
              />
              <Typography
                sx={{
                  color: activeTab === item.id ? "#FAF7F2" : "#8E735B",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Box sx={{ position: "absolute", bottom: 0, width: "100%", p: 4 }}>
          <Button
            fullWidth
            onClick={() => navigate("/admin/dashboard")}
            startIcon={<ArrowBack />}
            sx={{
              color: "#8E735B",
              justifyContent: "flex-start",
              fontWeight: 800,
              textTransform: "none",
            }}
          >
            Exit Core
          </Button>
        </Box>
      </Box>

      <Box sx={{ flex: 1, ml: "280px", p: { xs: 4, md: 8 } }}>
        <Stack direction="row" justifyContent="space-between" sx={{ mb: 6 }}>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: 1000, color: "#3D2B1F" }}
            >
              SYSTEM_CONFIG :: {activeTab.toUpperCase()}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#8E735B", fontWeight: 700 }}
            >
              Last sync: {new Date().toLocaleTimeString()}
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            <IconButton sx={{ border: "1px solid #E8D8C3", borderRadius: 0 }}>
              <RestartAlt />
            </IconButton>
            <Button
              variant="contained"
              startIcon={<SaveOutlined />}
              sx={{ ...brownButton, px: 4 }}
            >
              Save Changes
            </Button>
          </Stack>
        </Stack>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{ p: 3, border: "1px solid #E8D8C3", borderRadius: 0 }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#8E735B", fontWeight: 800 }}
              >
                DB_LATENCY
              </Typography>
              <Typography
                variant="h5"
                fontWeight={1000}
                sx={{ color: "#3D2B1F" }}
              >
                {dbLatency} ms
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{ p: 3, border: "1px solid #E8D8C3", borderRadius: 0 }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#8E735B", fontWeight: 800 }}
              >
                SERVER_STATUS
              </Typography>
              <Typography
                variant="h6"
                fontWeight={1000}
                color={serverOnline ? "#4caf50" : "#d32f2f"}
              >
                {serverOnline ? "ONLINE" : "OFFLINE"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{ p: 3, border: "1px solid #E8D8C3", borderRadius: 0 }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#8E735B", fontWeight: 800 }}
              >
                ACTIVE_USERS
              </Typography>
              <Typography
                variant="h5"
                fontWeight={1000}
                sx={{ color: "#3D2B1F" }}
              >
                {activeUsers}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {activeTab === "general" && (
          <Paper
            elevation={0}
            sx={{ p: 4, border: "1px solid #E8D8C3", mb: 4, borderRadius: 0 }}
          >
            <Typography
              variant="button"
              sx={{ fontWeight: 1000, color: "#8E735B" }}
            >
              SYSTEM_CONTROLS
            </Typography>
            <Stack spacing={3} sx={{ mt: 3 }}>
              <FormControlLabel
                control={<Switch color="warning" />}
                label={
                  <Typography fontWeight={700}>Maintenance Mode</Typography>
                }
              />
              <FormControlLabel
                control={<Switch defaultChecked color="success" />}
                label={
                  <Typography fontWeight={700}>Enable Auto-Deploy</Typography>
                }
              />
              <FormControlLabel
                control={<Switch defaultChecked color="primary" />}
                label={
                  <Typography fontWeight={700}>
                    Global API Throttling
                  </Typography>
                }
              />
            </Stack>

            <Divider sx={{ my: 4 }} />

            <Stack direction="row" spacing={2}>
              <Button
                startIcon={<BackupOutlined />}
                variant="contained"
                sx={brownButton}
              >
                Backup Now
              </Button>
              <Button
                startIcon={<StorageOutlined />}
                variant="contained"
                sx={brownButton}
              >
                Clear Cache
              </Button>
              <Button
                startIcon={<CloudDoneOutlined />}
                variant="contained"
                sx={brownButton}
              >
                Force Deploy
              </Button>
            </Stack>
          </Paper>
        )}

        {activeTab === "security" && (
          <Alert
            icon={<SyncLockOutlined />}
            severity="info"
            sx={{
              borderRadius: 0,
              bgcolor: "#E8D8C3",
              color: "#3D2B1F",
              border: "1px solid #D4B499",
              fontWeight: 700,
            }}
          >
            Your encryption keys were last rotated 14 days ago. Recommended
            rotation interval: 30 days.
          </Alert>
        )}

        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: "1px solid #E8D8C3",
            textAlign: "center",
            opacity: 0.5,
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontWeight: 1000, letterSpacing: 10, color: "#3D2B1F" }}
          >
            RAZANOVA // CORE_MANAGEMENT_INTERFACE // 2026
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}



