import { C } from './tokens';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import WhySection from './components/WhySection';
import Work from './components/Work';
import Diagnostic from './components/Diagnostic';
import Pricing from './components/Pricing';
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
      <Problem />
      <Solution />
      <WhySection />
      <Work />
      <Diagnostic />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
