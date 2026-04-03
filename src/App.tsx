import { C } from './tokens';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ServiceOverview from './components/ServiceOverview';
import Work from './components/Work';
import ArticlePreview from './components/ArticlePreview';
import WhySection from './components/WhySection';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import TrialOffer from './components/TrialOffer';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
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
      <ArticlePreview />
      <WhySection />
      <Comparison />
      <Pricing />
      <TrialOffer />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
