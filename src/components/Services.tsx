import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

// Nhóm điện tử
const electronicServices = [
  {
    title: "Sửa TV",
    desc: "Khắc phục lỗi hình ảnh, âm thanh, thay linh kiện chính hãng.",
    img: "/service-tv.jpg",
  },
  {
    title: "Sửa loa kéo",
    desc: "Sửa loa di động, kiểm tra mạch điện, bảo trì hệ thống âm thanh.",
    img: "/service-speaker.jpg",
  },
  {
    title: "Sửa lò vi sóng",
    desc: "Sửa lỗi mạch, thay linh kiện, bảo trì lò vi sóng tại nhà.",
    img: "/service-microwave.jpg",
  },
  {
    title: "Sửa bếp từ",
    desc: "Sửa lỗi bo mạch, thay linh kiện, bảo trì bếp từ hiện đại tại nhà.",
    img: "/service-induction.jpg",
  },
  {
    title: "Sửa âm ly",
    desc: "Kiểm tra mạch, thay linh kiện, bảo trì thiết bị âm thanh.",
    img: "/service-amp.jpg",
  },
  {
    title: "Sửa đầu karaoke / CD",
    desc: "Sửa đầu karaoke, đầu CD, các lỗi điện tử và mạch điều khiển.",
    img: "/service-cdplayer.jpg",
  },
];

// Nhóm điện cơ & gia dụng
const mechanicalServices = [
  {
    title: "Sửa máy giặt",
    desc: "Rò nước, thay board, sửa mô-tơ, bảo trì định kỳ.",
    img: "/service-wash.jpg",
  },
  {
    title: "Sửa máy rửa chén bát",
    desc: "Khắc phục sự cố kỹ thuật, thay linh kiện, bảo trì định kỳ tại nhà.",
    img: "/service-dishwasher.jpg",
  },
  {
    title: "Sửa máy xay thịt KitchenAid",
    desc: "Khắc phục hỏng hóc, sửa linh kiện, bảo dưỡng thiết bị tại nhà.",
    img: "/service-meatgrinder.jpg",
  },
  {
    title: "Sửa bàn ủi hơi nước",
    desc: "Sửa lỗi, thay thế phụ kiện và bảo trì bàn ủi hơi nước tại nhà.",
    img: "/service-steamer.jpg",
  },
  {
    title: "Sửa nồi cơm điện",
    desc: "Sửa các lỗi cơ bản, thay linh kiện và bảo trì nồi cơm điện tại nhà.",
    img: "/service-ricecooker.jpg",
  },
  {
    title: "Sửa nồi chiên không dầu",
    desc: "Khắc phục sự cố, kiểm tra mạch và bảo trì nồi chiên không dầu.",
    img: "/service-airfryer.jpg",
  },
];

type Service = {
  title: string;
  desc: string;
  img: string;
};

function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <Grid container spacing={4}>
      {services.map((s, i) => (
        <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card
              sx={{
                height: "100%",
                boxShadow: 3,
                borderRadius: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={s.img}
                alt={s.title}
                sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ mb: 1 }}
                >
                  {s.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.desc}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}

export default function Services() {
  return (
    <Container id="services" sx={{ py: { xs: 6, md: 12 } }}>
      {/* Nhóm điện tử */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Dịch vụ điện tử
      </Typography>
      <ServiceGrid services={electronicServices} />

      <Divider sx={{ my: 6 }} />

      {/* Nhóm điện cơ & gia dụng */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Dịch vụ điện cơ & gia dụng
      </Typography>
      <ServiceGrid services={mechanicalServices} />

      <Divider sx={{ my: 6 }} />

      {/* Nhóm các thiết bị khác - full width */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Các thiết bị khác
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            maxWidth: "100%",
            mx: "auto",
            height: "100%",
            boxShadow: 3,
            borderRadius: 3,
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
          }}
        >
          <CardMedia
            component="img"
            height="250"
            image="/service-other.jpg"
            alt="Sửa các thiết bị khác"
            sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
          />
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
              Sửa các thiết bị điện tử & điện cơ khác
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Liên hệ để trao đổi chi tiết về dịch vụ sửa chữa các thiết bị khác.
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
}
