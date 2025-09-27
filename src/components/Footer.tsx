import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import YoutubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Grid, IconButton, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#222", color: "white", py: { xs: 6, md: 8 } }}>
      <Container>
        <Grid container spacing={4}>
          {/* Thông tin cửa hàng */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Tiến Đạt – Sửa Chữa Điện Tử & Gia Dụng
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
              35/25A Thái Thị Bôi, tổ 31, Phường Thanh Khê, Đà Nẵng
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
              0822.165.197  – 0766.631.191
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon fontSize="small" sx={{ mr: 1 }} />
              suachuatiendat@gmail.com
            </Typography>
          </Grid>

          {/* Liên kết nhanh */}
          <Grid size={{ xs: 12, md: 3.5 }} sx={{ pl: { md: 10 } }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Liên kết nhanh
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1, "&:hover": { color: "#f50057" } }}>
              Trang chủ
            </Link>
            <Link href="#services" color="inherit" display="block" sx={{ mb: 1, "&:hover": { color: "#f50057" } }}>
              Dịch vụ
            </Link>
            <Link href="#contact" color="inherit" display="block" sx={{ "&:hover": { color: "#f50057" } }}>
              Liên hệ
            </Link>
          </Grid>

          {/* Mạng xã hội */}
          <Grid size={{ xs: 12, md: 3.5 }}>
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
        <Typography variant="body2" align="center" sx={{ mt: 6, color: "grey.500" }}>
          © {new Date().getFullYear()} Tiến Đạt – Sửa Chữa Điện Tử & Gia Dụng. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
