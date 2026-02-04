import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        background: "#6f4e37",
        color: "#fff",
      }}
    >
      <Typography sx={{ fontSize: 20, opacity: 0.9 }}>
        ©2026 Razanova. All rights reserved.
      </Typography>
    </Box>
  );
}
