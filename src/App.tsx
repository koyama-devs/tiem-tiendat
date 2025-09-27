// App.tsx
import { CssBaseline, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";

import theme from "./theme";

import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> reset CSS mặc định trình duyệt
      <Header />

      {/* Hero fullwidth, không dùng Container */}
      <Hero />

      {/* Các section còn lại vẫn dùng Container để căn lề */}
      <Container sx={{ mt: 4, mb: 4 }}>
        <Services />
        <ContactForm />
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
