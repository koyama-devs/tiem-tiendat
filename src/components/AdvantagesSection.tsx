import CircleIcon from "@mui/icons-material/Circle";
import { Box, Container, Typography } from "@mui/material";

export default function AdvantagesTimelineDetailed() {
  const advantages = [
    {
      title: "Kỹ thuật viên với hơn 30 năm kinh nghiệm",
      description: "Tay nghề vững vàng, xử lý mọi thiết bị điện tử và gia dụng nhanh chóng, chính xác.",
    },
    {
      title: "Sửa chữa tại nhà / tận nơi",
      description: "Kỹ thuật viên đến tận nhà, tiết kiệm thời gian và tiện lợi.",
    },
    {
      title: "Nhận và giao hàng tận nhà",
      description: "Với thiết bị cồng kềnh hoặc cần kiểm tra kỹ, chúng tôi nhận và giao tận nơi.",
    },
    {
      title: "Báo giá rõ ràng, minh bạch",
      description: "Không phát sinh chi phí bất ngờ, khách hàng đồng ý mới thực hiện.",
    },
    {
      title: "Nhanh chóng – xử lý kịp thời",
      description: "Giúp thiết bị hoạt động lại ngay, giảm thời gian chờ.",
    },
    {
      title: "Chế độ bảo hành chu đáo",
      description: "Kiểm tra, bảo hành rõ ràng, đảm bảo quyền lợi khách hàng.",
    },
    {
      title: "Tư vấn miễn phí",
      description: "Hướng dẫn sử dụng, mẹo bảo quản thiết bị, giảm hỏng hóc sau này.",
    },
    {
      title: "Uy tín lâu năm tại Đà Nẵng",
      description: "Khách hàng cũ đánh giá tốt, nhiều khách quay lại nhờ sự tin cậy.",
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#f0f8ff" }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ textAlign: "center", mb: 6, fontWeight: "bold", color: "#242424" }}>
          Quy trình & Ưu điểm nổi bật
        </Typography>

        <Box sx={{ position: "relative", pl: 4 }}>
          {/* Vertical line */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 16,
              width: 4,
              height: "100%",
              backgroundColor: "#00bcd4",
              borderRadius: 2,
            }}
          />

          {advantages.map((item, index) => (
            <Box key={index} sx={{ display: "flex", mb: 6, position: "relative" }}>
              <CircleIcon
                sx={{
                  color: "#00bcd4",
                  fontSize: 24,
                  position: "absolute",
                  left: -4,
                  top: 0,
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                }}
              />
              <Box sx={{ ml: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#242424" }}>
                  {index + 1}. {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
