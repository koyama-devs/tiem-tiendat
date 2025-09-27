import {
    Alert,
    Box,
    Button,
    Container,
    MenuItem,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    serviceType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    "Sửa TV",
    "Sửa loa kéo",
    "Sửa lò vi sóng",
    "Sửa bếp từ",
    "Sửa âm ly",
    "Sửa đầu karaoke / CD",
    "Sửa máy hút bụi", // cập nhật
    "Sửa máy rửa chén bát",
    "Sửa quạt điện",
    "Sửa nồi cơm điện",
    "Sửa nồi chiên không dầu",
    "Sửa các thiết bị điện tử & điện cơ khác",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setForm({
      name: "",
      phone: "",
      email: "",
      address: "",
      serviceType: "",
      message: "",
    });
  };

  return (
    <Box
      id="contact"
      sx={{ backgroundColor: "#f9f9f9", py: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="sm">
        <Paper
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            boxShadow: 5,
            borderTop: "6px solid",
            borderColor: "primary.main",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            Liên hệ với chúng tôi
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            Hãy để lại thông tin, chúng tôi sẽ liên hệ lại trong thời gian sớm
            nhất.
          </Typography>

          {submitted && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Cảm ơn bạn! Chúng tôi đã nhận được yêu cầu và sẽ liên hệ sớm.
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Họ tên"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nhập tên của bạn"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Số điện thoại"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Số điện thoại để chúng tôi liên hệ"
              fullWidth
              margin="normal"
              inputMode="tel"
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email nếu muốn nhận thông tin"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Địa chỉ"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Địa chỉ để hỗ trợ sửa chữa tại nhà"
              fullWidth
              margin="normal"
            />
            <TextField
              select
              label="Loại dịch vụ"
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            >
              <MenuItem value="">Chọn dịch vụ</MenuItem>
              {servicesList.map((s, idx) => (
                <MenuItem key={idx} value={s}>
                  {s}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Mô tả lỗi / yêu cầu"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Mô tả chi tiết vấn đề hoặc yêu cầu của bạn"
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
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              Gửi liên hệ
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
