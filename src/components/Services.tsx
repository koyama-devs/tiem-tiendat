import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Grid"; // dùng Grid

const services = [
  {
    title: "Sửa TV",
    desc: "Khắc phục lỗi hình ảnh, âm thanh, thay linh kiện.",
    img: "/service-tv.jpg",
  },
  {
    title: "Sửa máy giặt",
    desc: "Rò nước, thay board, sửa mô tơ, bảo trì.",
    img: "/service-wash.jpg",
  },
  {
    title: "Sửa tủ lạnh / lạnh",
    desc: "Nạp gas, sửa block, bảo trì định kỳ.",
    img: "/service-fridge.jpg",
  },
];

export default function Services() {
  return (
    <Container id="services" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Dịch vụ chính
      </Typography>
      <Grid container spacing={4}>
        {services.map((s, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: "100%", boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="180"
                image={s.img}
                alt={s.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {s.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
