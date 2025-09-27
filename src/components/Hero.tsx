import { Box, Button, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",           // fullwidth
        minHeight: "100vh",      // full height
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        pt: { xs: 8, md: 12 },
        backgroundColor: "#242424",
        overflow: "hidden",      // cho dây treo ra ngoài
      }}
    >
      {/* Dây treo trái */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "30%",
          width: "4px",
          height: "97px",
          backgroundColor: "#ccc",
          borderRadius: "2px",
          transform: "rotate(-5deg)",
          zIndex: 3,
        }}
      />
      {/* Dây treo phải */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: "30%",
          width: "4px",
          height: "97px",
          backgroundColor: "#ccc",
          borderRadius: "2px",
          transform: "rotate(5deg)",
          zIndex: 3,
        }}
      />

      {/* Hero bảng */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "95%", md: "80%" },
          minHeight: { xs: "65vh", md: "75vh" },
          backgroundColor: "grey.900",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          zIndex: 2,
          color: "white",
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
            filter: "brightness(0.4)",
            zIndex: 0,
          }}
        />

        {/* Overlay */}
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

        {/* Nội dung */}
        <Box sx={{ position: "relative", zIndex: 2, px: 3 }}>
          <Typography
            variant="h2"
            sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 900,
                color: "#242424",                  // màu chữ chính (tối để viền nổi bật)
                WebkitTextStroke: "1.5px #00bcd4", // viền cyan
                textShadow: `
                0 0 5px #00bcd4,
                0 0 10px #00bcd4,
                0 0 20px #00bcd4,
                0 0 30px rgba(0,188,212,0.5)
                `,
                textAlign: "center",
            }}
            >
            Dịch vụ sửa chữa điện tử
            <br />
            & gia dụng uy tín tại Đà Nẵng
            </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 3,
              mb: 5,
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "white",
            }}
          >
            Nhanh chóng – Chuyên nghiệp – Giá cả hợp lý
          </Typography>

          <Button
  component="a"
  href="tel:+84822165197" // đổi thành số Hotline của bạn
  variant="contained"
  size="large"
  sx={{
    px: 4,
    py: 1.5,
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "30px",
    backgroundColor: "secondary.main",
    color: "primary.contrastText",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "primary.main",
      boxShadow: "0 6px 20px rgba(255, 152, 0, 0.5)",
      transform: "translateY(-2px)",
    },
  }}
>
  Liên hệ ngay Hotline 0822.165.197
</Button>


        </Box>
      </Box>
    </Box>
  );
}
