import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Trang chủ", "Dịch vụ", "Liên hệ"];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            letterSpacing: 1,
            cursor: "pointer",
            "& span": { color: "#00e676" }, // làm chữ Đạt nổi bật
          }}
        >
        <span>Tiến Đạt</span> - Sửa Chữa Điện Tử & Gia Dụng
        </Typography>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item}
              sx={{
                position: "relative",
                cursor: "pointer",
                fontWeight: 500,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: 0,
                  height: "2px",
                  left: 0,
                  bottom: -4,
                  backgroundColor: "#00e676",
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Mobile Menu */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: { backgroundColor: "#1e293b", color: "white" },
          }}
        >
          <List sx={{ width: 220 }}>
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => setOpen(false)}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(0, 230, 118, 0.1)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
