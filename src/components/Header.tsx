import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Trang chủ", "Dịch vụ", "Liên hệ"];

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Tiệm Sửa Chữa Tiến Đạt</Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {menuItems.map((item) => (
            <Typography key={item} sx={{ cursor: "pointer" }}>
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
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <List sx={{ width: 200 }}>
            {menuItems.map((item) => (
              <ListItem button key={item} onClick={() => setOpen(false)}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
