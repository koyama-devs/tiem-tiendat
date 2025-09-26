import { Box, Button, Container, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: { xs: 6, md: 10 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: "bold" }}
        >
          Dịch vụ sửa chữa điện tử uy tín tại Đà Nẵng
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
          Nhanh chóng – Chuyên nghiệp – Giá hợp lý
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Liên hệ ngay
        </Button>
      </Container>
    </Box>
  );
}
