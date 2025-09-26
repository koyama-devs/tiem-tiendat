import { Grid, Card, CardContent, Typography, Container } from "@mui/material";

const services = [
  { title: "Sửa tivi", desc: "Khắc phục mọi lỗi hình ảnh, âm thanh" },
  { title: "Sửa máy giặt", desc: "Thay thế linh kiện chính hãng" },
  { title: "Sửa tủ lạnh", desc: "Bảo dưỡng & sửa chữa nhanh chóng" },
  { title: "Thiết bị điện khác", desc: "Sửa chữa đa dạng các thiết bị" },
];

export default function Services() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Dịch vụ của chúng tôi
      </Typography>
      <Grid container spacing={3}>
        {services.map((s, i) => (
          <Grid key={i} item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {s.title}
                </Typography>
                <Typography variant="body2">{s.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
