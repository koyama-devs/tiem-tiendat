// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#0097a7", // cyan chủ đạo
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e65100", // nếu muốn thêm màu nhấn khác
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true, // tắt padding mặc định của Container
        maxWidth: false,       // tắt maxWidth mặc định
      },
    },
  },
});

export default theme;
