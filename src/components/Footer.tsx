import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import {
    Box,
    Container,
    Grid,
    IconButton,
    Link,
    Typography,
} from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#333", color: "white", py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Tiệm Điện Tín Đạt
            </Typography>
            <Typography>Địa chỉ: …, Đà Nẵng</Typography>
            <Typography>
              <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
              0909-123-456
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Liên kết nhanh
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Trang chủ
            </Link>
            <Link href="#services" color="inherit" display="block" sx={{ mb: 1 }}>
              Dịch vụ
            </Link>
            <Link href="#contact" color="inherit" display="block">
              Liên hệ
            </Link>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Mạng xã hội
            </Typography>
            <IconButton href="#" sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
            {/* thêm icon khác nếu muốn */}
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Tiệm Điện Tín Đạt. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
