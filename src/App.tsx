import { C } from './tokens';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ServiceOverview from './components/ServiceOverview';
import Work from './components/Work';
import SListingMockup from './components/SListingMockup';
import Comparison from './components/Comparison';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        backgroundColor: C.warmWhite,
      }}
    >
      <Nav />
      <Hero />
      <ServiceOverview />
      <Work />
      <SListingMockup />
      <Comparison />
      <About />
      <FAQ />
      <FinalCTA />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
