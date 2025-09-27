import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "grey.900",
        color: "white",
        py: { xs: 8, md: 12 },
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("./images/hero-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          filter: "brightness(0.4)",
        }}
      />

      {/* Modern overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.4) 60%,
            rgba(58, 66, 86, 0.5) 100%
          )`,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.2rem", md: "3.5rem" },
            fontWeight: 700,
          }}
        >
          Dịch vụ sửa chữa điện tử uy tín tại Đà Nẵng
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: 3,
            mb: 5,
            color: "grey.200",
            fontSize: { xs: "1.1rem", md: "1.3rem" },
          }}
        >
          Nhanh chóng – Chuyên nghiệp – Giá hợp lý
        </Typography>

        <Button
          component={Link}
          to="contact"
          smooth={true}
          duration={600}
          offset={-80}
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "30px",
          }}
        >
          Liên hệ ngay
        </Button>
      </Container>
    </Box>
  );
}
