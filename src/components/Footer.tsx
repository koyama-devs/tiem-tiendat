import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "grey.900",
        color: "white",
        py: 3,
        textAlign: "center",
        mt: 4,
      }}
    >
      <Typography variant="body2">
        © 2025 Tiệm Sửa Chữa Tiến Đạt. All rights reserved.
      </Typography>
    </Box>
  );
}
