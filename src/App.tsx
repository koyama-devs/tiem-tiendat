// App.tsx
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./theme";

import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      {/* Hero fullwidth, không dùng Container */}
      <Hero />
      <Services />
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
}
