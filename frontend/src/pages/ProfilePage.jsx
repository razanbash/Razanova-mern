import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Divider,
  TextField,
  CircularProgress,
  Avatar,
} from "@mui/material";
import {
  Spa,
  AutoAwesome,
  WaterDrop,
  FavoriteBorder,
  VerifiedUser,
} from "@mui/icons-material";

const API = "http://localhost:5000/api";

export default function ProfilePage() {
  const navigate = useNavigate(),
    token = localStorage.getItem("token");
  const [user, setUser] = useState(null),
    [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [pass, setPass] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${API}/users/me`, headers);
      setUser(res.data.user);
      setForm({ name: res.data.user.name, email: res.data.user.email });
    } catch (err) {
      console.log(err);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) return navigate("/login");
    fetchProfile();
  }, []);

  const updateProfile = async () => {
    try {
      await axios.put(`${API}/users/me`, form, headers);
      fetchProfile();
      setEditMode(false);
      alert("Profile Updated 🤎");
    } catch (err) {
      console.log(err);
      alert("Update failed");
    }
  };

  const updatePass = async () => {
    if (pass.newPassword !== pass.confirmPassword) return alert("Mismatch");
    try {
      await axios.put(`${API}/users/change-password`, pass, headers);
      setPass({ oldPassword: "", newPassword: "", confirmPassword: "" });
      alert("Security Updated");
    } catch (err) {
      console.log(err);
      alert("Security update failed");
    }
  };

  if (loading)
    return (
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          minHeight: "100vh",
          bgcolor: "#f3eadf",
        }}
      >
        <CircularProgress sx={{ color: "#5a3e2b" }} />
      </Box>
    );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e7d2bd 0%, #d4b499 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {[
        { I: Spa, t: "5%", l: "8%", c: "#5a3e2b" },
        { I: AutoAwesome, b: "10%", r: "5%", c: "#8a5a44" },
        { I: WaterDrop, t: "20%", r: "12%", c: "#3d2b1f" },
        { I: FavoriteBorder, b: "15%", l: "10%", c: "#5a3e2b" },
      ].map((d, i) => (
        <d.I
          key={i}
          sx={{
            position: "absolute",
            top: d.t,
            left: d.l,
            right: d.r,
            bottom: d.b,
            fontSize: 130,
            color: d.c,
            opacity: 0.12,
          }}
        />
      ))}

      <Paper
        elevation={0}
        sx={{
          width: "min(850px, 100%)",
          borderRadius: 0,
          border: "1px solid #5a3e2b",
          overflow: "hidden",
          bgcolor: "#fffdfb",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            p: 5,
            background: "linear-gradient(135deg, #3d2b1f, #5a3e2b)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Avatar
            sx={{
              width: 80,
              height: 80,
              mx: "auto",
              mb: 2,
              bgcolor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <VerifiedUser sx={{ fontSize: 40, color: "#d4b499" }} />
          </Avatar>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 6, opacity: 0.8, fontWeight: 700 }}
          >
            Exclusive Member Profile
          </Typography>
          <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: -1 }}>
            {user.name.split(" ")[0]}.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 4, md: 6 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
              gap: 6,
            }}
          >
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#3d2b1f",
                  fontWeight: 900,
                  mb: 3,
                  borderBottom: "1px solid #e7d2bd",
                  pb: 1,
                }}
              >
                SECTION I: IDENTITY
              </Typography>
              {editMode ? (
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <Stack direction="row" spacing={2} pt={2}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={updateProfile}
                      sx={{
                        bgcolor: "#5a3e2b",
                        borderRadius: 0,
                        "&:hover": { bgcolor: "#3d2b1f" },
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      fullWidth
                      onClick={() => setEditMode(false)}
                      sx={{ color: "#5a3e2b" }}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </Stack>
              ) : (
                <Box>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="caption"
                      sx={{ color: "#8c7b6c", fontWeight: 800 }}
                    >
                      LEGAL NAME
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "#3d2b1f", fontWeight: 900 }}
                    >
                      {user.name}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="caption"
                      sx={{ color: "#8c7b6c", fontWeight: 800 }}
                    >
                      REGISTERED EMAIL
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#3d2b1f", fontWeight: 700 }}
                    >
                      {user.email}
                    </Typography>
                  </Box>
                  <Button
                    onClick={() => setEditMode(true)}
                    sx={{
                      color: "#8a5a44",
                      fontWeight: 900,
                      p: 0,
                      textDecoration: "underline",
                    }}
                  >
                    Modify Account Information
                  </Button>
                </Box>
              )}
            </Box>

            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#3d2b1f",
                  fontWeight: 900,
                  mb: 3,
                  borderBottom: "1px solid #e7d2bd",
                  pb: 1,
                }}
              >
                SECTION II: ACCESS
              </Typography>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  variant="standard"
                  type="password"
                  label="Current Password"
                  value={pass.oldPassword}
                  onChange={(e) =>
                    setPass({ ...pass, oldPassword: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  variant="standard"
                  type="password"
                  label="New Password"
                  value={pass.newPassword}
                  onChange={(e) =>
                    setPass({ ...pass, newPassword: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  variant="standard"
                  type="password"
                  label="Confirm Password"
                  value={pass.confirmPassword}
                  onChange={(e) =>
                    setPass({ ...pass, confirmPassword: e.target.value })
                  }
                />
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={updatePass}
                  sx={{
                    mt: 2,
                    borderColor: "#5a3e2b",
                    color: "#5a3e2b",
                    borderRadius: 0,
                    fontWeight: 900,
                  }}
                >
                  Reset Security Key
                </Button>
              </Stack>
            </Box>
          </Box>

          <Divider sx={{ my: 6, borderColor: "#e7d2bd" }} />

          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              onClick={() => navigate("/dashboard")}
              sx={{ color: "#8c7b6c", fontWeight: 900 }}
            >
              &larr; Return to Dashboard
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate("/routine")}
              sx={{
                px: 4,
                borderRadius: 0,
                bgcolor: "#8a5a44",
                fontWeight: 900,
              }}
            >
              Signature Routine
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
