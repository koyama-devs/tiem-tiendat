import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // gửi dữ liệu lên backend / Firestore
    alert("Đã gửi!");
  };

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 4 }}>
          <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
            Liên hệ nhanh
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Họ tên"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Số điện thoại"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Mô tả lỗi / yêu cầu"
              name="message"
              value={form.message}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Gửi liên hệ
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
