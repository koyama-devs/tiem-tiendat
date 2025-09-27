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
import theme from "../theme"; // import theme để lấy màu

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Trang chủ", "Dịch vụ", "Liên hệ"];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: `linear-gradient(90deg, ${theme.palette.primary.main}CC, #004d57, #006978)`,
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
        }}
        >
        <span style={{ color: "#ffffffCC" }}>Tiến Đạt - Sửa Chữa Điện Tử & Gia Dụng</span>
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
                color: "#fff",
                transition: "color 0.3s ease",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: 0,
                  height: "2px",
                  left: 0,
                  bottom: -4,
                  backgroundColor: theme.palette.primary.main,
                  transition: "width 0.3s ease",
                },
                "&:hover": {
                  color: theme.palette.primary.main,
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
          <MenuIcon sx={{ color: "#fff" }} />
        </IconButton>
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: "#004d57",
              color: "#fff",
            },
          }}
        >
          <List sx={{ width: 220 }}>
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => setOpen(false)}
                  sx={{
                    "&:hover": {
                      backgroundColor: `${theme.palette.primary.main}22`, // hover nhẹ cyan
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      color: "#fff",
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
