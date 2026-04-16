import { useEffect } from "react";
import BukkenHero from "./components/bukken/BukkenHero";
import BukkenYourSide from "./components/bukken/BukkenYourSide";
import BukkenSteps from "./components/bukken/BukkenSteps";
import BukkenMidCTA from "./components/bukken/BukkenMidCTA";
import BukkenGuideSection from "./components/bukken/BukkenGuideSection";
import BukkenBeforeAfterCTA from "./components/bukken/BukkenBeforeAfterCTA";
import BukkenFairEval from "./components/bukken/BukkenFairEval";
import BukkenProfiles from "./components/bukken/BukkenProfiles";
import BukkenFAQ from "./components/bukken/BukkenFAQ";
import BukkenBottomCTA from "./components/bukken/BukkenBottomCTA";
import BukkenMailForm from "./components/bukken/BukkenMailForm";
import BukkenFooter from "./components/bukken/BukkenFooter";
import BukkenExitPopup from "./components/bukken/BukkenExitPopup";
import V3FloatingCTA from "./components/v3/V3FloatingCTA";

export default function BukkenLPPage() {
  useEffect(() => {
    document.title = "宮城の収益物件｜ネットに出ない非公開物件情報";
    const description = "宮城県の収益物件・中古アパートを、物件探しから内装改修・客付け支援まで一気通貫で。内装屋だから物件売買で儲けない中立ポジション。非公開の物件情報をLINEで配信中。";
    const ogImage = "https://manshitsu.homes/images/og-bukken-lp.png";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    // OGP
    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    };
    setMeta('meta[property="og:title"]', "宮城の収益物件｜ネットに出ない非公開物件情報");
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[name="twitter:title"]', "宮城の収益物件｜ネットに出ない非公開物件情報");
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);
  }, []);

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333", background: "#fff" }}>
      <BukkenHero />
      <BukkenYourSide />
      <BukkenSteps />
      <BukkenMidCTA />
      <BukkenGuideSection />
      <BukkenBeforeAfterCTA />
      <BukkenFairEval />
      <BukkenProfiles />
      <BukkenFAQ />
      <BukkenBottomCTA />
      <BukkenMailForm />
      <BukkenFooter />
      <V3FloatingCTA />
      <BukkenExitPopup />
    </div>
  );
}
