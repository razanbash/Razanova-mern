import React, { useState } from "react";
import api from "../../api.js";
import toast from "react-hot-toast";

import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";

import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/register", { name, email, password });
      toast.success("Account created 🤎");
    } catch (err) {
      const msg = err?.response?.data?.message || "Register failed";
      toast.error(msg);
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #e7d2bd, #c9a27c)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.25)",
          top: -140,
          left: -140,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(111,78,55,0.18)",
          bottom: -220,
          right: -220,
        }}
      />

      <Paper
        elevation={10}
        sx={{
          width: "min(900px, 92vw)",
          borderRadius: 5,
          overflow: "hidden",
          display: "flex",
          background: "rgba(248,241,231,0.92)",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            p: 6,
            background: "linear-gradient(135deg, #7a553c, #a57a56)",
            color: "white",
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 3,
              display: "grid",
              placeItems: "center",
              background: "rgba(255,255,255,0.18)",
              mb: 2,
            }}
          >
            <StorefrontOutlinedIcon sx={{ fontSize: 34 }} />
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 900, mb: 1 }}>
            Razanova Products Tailored To Your Skin
          </Typography>

          <Typography sx={{ opacity: 0.9, lineHeight: 1.7 }}>
            Smart Recommendations 🤎 <br />
            Real Results
          </Typography>
        </Box>

        <Box sx={{ flex: 1, p: { xs: 4, md: 5 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              mb: 2,
              color: "#6f4e37",
            }}
          >
            <SpaOutlinedIcon />
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Register Account
            </Typography>
          </Box>

          <Typography sx={{ color: "text.secondary", mb: 3 }}>
            Fill your details to continue
          </Typography>

          <form onSubmit={handleRegister}>
            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: "#6f4e37" }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: "#6f4e37" }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#6f4e37" }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#6f4e37" }} />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                py: 1.2,
                fontWeight: 800,
                borderRadius: 3,
                background: "#6f4e37",
                "&:hover": { background: "#5a3e2b" },
              }}
            >
              Register
            </Button>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}
