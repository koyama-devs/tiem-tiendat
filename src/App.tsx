import Container from "@mui/material/Container";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Hero />
        <Services />
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
}
