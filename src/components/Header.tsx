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
import { Link as ScrollLink } from "react-scroll"; // import Link từ react-scroll
import theme from "../theme";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Đặt id section trùng với to của Link
  const menuItems = [
    // { label: "Trang chủ", to: "hero" },
    { label: "Dịch vụ", to: "services" },
    { label: "Liên hệ", to: "contact" },
  ];

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
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <Box
            component="img"
            src="/images/logo.png"
            alt="Tiến Đạt Logo"
            sx={{ height: 50, width: "auto", mr: 2 }}
          />
        </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {menuItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={600}
              offset={-80} // trừ header height
            >
              <Typography
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
                {item.label}
              </Typography>
            </ScrollLink>
          ))}
        </Box>

        {/* Mobile Menu */}
        <IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={() => setOpen(true)}>
          <MenuIcon sx={{ color: "#fff" }} />
        </IconButton>
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{ sx: { backgroundColor: "#004d57", color: "#fff" } }}
        >
          <List sx={{ width: 220 }}>
            {menuItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ScrollLink
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  style={{ width: "100%", textDecoration: "none", color: "inherit" }}
                >
                  <ListItemButton
                    sx={{
                      "&:hover": { backgroundColor: `${theme.palette.primary.main}22` },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontWeight: 500 }}
                    />
                  </ListItemButton>
                </ScrollLink>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
