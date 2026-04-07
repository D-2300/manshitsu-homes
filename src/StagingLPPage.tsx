import Nav from "./components/Nav";
import SHero from "./components/SHero";
import SProblem from "./components/SProblem";
import SZeitgeist from "./components/SZeitgeist";
import SSolution from "./components/SSolution";
import SListingMockup from "./components/SListingMockup";
import SWhatYouGet from "./components/SWhatYouGet";
import SIfRenovate from "./components/SIfRenovate";
import SCTA from "./components/SCTA";
import ContactForm from "./components/ContactForm";
import STrust from "./components/STrust";
import SFooter from "./components/SFooter";
import SFloatingCTA from "./components/SFloatingCTA";

export default function StagingLPPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      <Nav />
      <SHero />
      <SProblem />
      <SZeitgeist />
      <SSolution />
      <SListingMockup />
      <SWhatYouGet />
      <SIfRenovate />
      <SCTA />
      <ContactForm />
      <STrust />
      <SFooter />
      <SFloatingCTA />
    </div>
  );
}
