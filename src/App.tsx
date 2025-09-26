import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}