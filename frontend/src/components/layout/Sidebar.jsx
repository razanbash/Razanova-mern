import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar({ open, onClose, onLogout }) {
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 280, p: 2 }}>
        <Typography sx={{ fontWeight: 900, fontSize: 20, color: "#6f4e37" }}>
          RAZANOVA
        </Typography>
        <Typography sx={{ opacity: 0.7, fontSize: 13 }}>Menu</Typography>

        <Divider sx={{ my: 2 }} />

        <List sx={{ p: 0 }}>
          <ListItemButton onClick={() => go("/dashboard")}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#6f4e37" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton onClick={() => go("/profile")}>
            <ListItemIcon>
              <PersonIcon sx={{ color: "#6f4e37" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>

          <ListItemButton onClick={() => go("/routine")}>
            <ListItemIcon>
              <AutoAwesomeIcon sx={{ color: "#6f4e37" }} />
            </ListItemIcon>
            <ListItemText primary="Routine" />
          </ListItemButton>

          <ListItemButton onClick={() => go("/products")}>
            <ListItemIcon>
              <ShoppingBagIcon sx={{ color: "#6f4e37" }} />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>

          <Divider sx={{ my: 1.5 }} />

          <ListItemButton
            onClick={() => {
              onLogout();
              onClose();
            }}
            sx={{
              bgcolor: "rgba(111,78,55,0.08)",
              borderRadius: 2,
            }}
          >
            <ListItemIcon>
              <LogoutIcon sx={{ color: "#6f4e37" }} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}
