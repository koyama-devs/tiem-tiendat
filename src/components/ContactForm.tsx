import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function ContactForm() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Liên hệ với chúng tôi
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 500,
          mx: "auto",
        }}
      >
        <TextField label="Họ và tên" fullWidth required />
        <TextField label="Số điện thoại" fullWidth required />
        <TextField label="Nội dung" fullWidth multiline rows={4} />
        <Button type="submit" variant="contained" size="large">
          Gửi ngay
        </Button>
      </Box>
    </Container>
  );
}
