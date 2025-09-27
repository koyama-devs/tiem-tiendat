import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import YoutubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Grid, IconButton, Link, Typography } from "@mui/material";
import theme from "../theme";

export default function Footer() {
  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: "white",
        py: { xs: 6, md: 8 },
        px: 2, // thêm padding ngang để tránh dính lề
        borderTop: `4px solid ${theme.palette.secondary.main}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Thông tin cửa hàng */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            {/* Logo image */}
            <Box
                component="img"
                src="/images/logo.png" // đường dẫn tới file logo
                alt="Tiến Đạt Logo"
                sx={{
                height: 50,         // chiều cao logo
                width: "auto",
                mr: 2,              // khoảng cách với chữ
                mb: 2,
                }}
            />
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
              35/25A Thái Thị Bôi, tổ 31, Phường Thanh Khê, Đà Nẵng
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
              0822.165.197 – 0766.631.191
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon fontSize="small" sx={{ mr: 1 }} />
              suachuatiendat@gmail.com
            </Typography>
          </Grid>

          {/* Liên kết nhanh */}
          <Grid size={{ xs: 12, md: 3.5 }} sx={{ pl: { md: 6 } }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Liên kết nhanh
            </Typography>
            <Link
              href="#"
              color="inherit"
              display="block"
              sx={{ mb: 1, "&:hover": { color: theme.palette.secondary.main } }}
            >
              Trang chủ
            </Link>
            <Link
              href="#services"
              color="inherit"
              display="block"
              sx={{ mb: 1, "&:hover": { color: theme.palette.secondary.main } }}
            >
              Dịch vụ
            </Link>
            <Link
              href="#contact"
              color="inherit"
              display="block"
              sx={{ "&:hover": { color: theme.palette.secondary.main } }}
            >
              Liên hệ
            </Link>
          </Grid>

          {/* Mạng xã hội */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Mạng xã hội
            </Typography>
            <Box>
              <IconButton href="#" sx={{ color: "white", "&:hover": { color: "#4267B2" } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "white", "&:hover": { color: "#E1306C" } }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "white", "&:hover": { color: "#FF0000" } }}>
                <YoutubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 6, color: "grey.300" }}
        >
          © {new Date().getFullYear()} Tiến Đạt – Sửa Chữa Điện Tử & Gia Dụng. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
