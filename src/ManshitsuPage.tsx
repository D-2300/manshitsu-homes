import MHero from "./components/MHero";
import MVacancyCost from "./components/MVacancyCost";
import MService from "./components/MService";
import MWorks from "./components/MWorks";
import MTrialOffer from "./components/MTrialOffer";
import MComparison from "./components/MComparison";
import MFlow from "./components/MFlow";
import MPrice from "./components/MPrice";
import MAbout from "./components/MAbout";
import MFAQ from "./components/MFAQ";
import MContactCTA from "./components/MContactCTA";
import MFooter from "./components/MFooter";
import MFloatingCTA from "./components/MFloatingCTA";

export default function ManshitsuPage() {
  return (
    <div className="font-['Noto_Sans_JP',sans-serif] bg-white max-w-[720px] mx-auto pb-16">
      <MHero />
      <MVacancyCost />
      <MService />
      <MWorks />
      <MTrialOffer />
      <MComparison />
      <MFlow />
      <MPrice />
      <MAbout />
      <MFAQ />
      <MContactCTA />
      <MFooter />
      <MFloatingCTA />
    </div>
  );
}
