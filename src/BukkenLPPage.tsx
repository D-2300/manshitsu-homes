import BukkenHero from "./components/bukken/BukkenHeroV2";
import BukkenSteps from "./components/bukken/BukkenSteps";
import BukkenGuideSection from "./components/bukken/BukkenGuideSection";
import BukkenBeforeAfterCTA from "./components/bukken/BukkenBeforeAfterCTA";
import BukkenProfiles from "./components/bukken/BukkenProfiles";
import BukkenFAQ from "./components/bukken/BukkenFAQ";
import BukkenBottomCTA from "./components/bukken/BukkenBottomCTA";
import BukkenMailForm from "./components/bukken/BukkenMailForm";
import BukkenFooter from "./components/bukken/BukkenFooter";

/**
 * BukkenLPPage — Phase 2 トリム版（9セクション）
 *
 * 削除したセクション（冗長・CTA過多の解消）:
 *  - BukkenYourSide（V2 Hero 三角形が代替）
 *  - BukkenMidCTA（CTA数削減）
 *  - BukkenFairEval（Profiles/LINE配信に移管）
 *  - HPTrustTestimonials（Voice系はHP側）
 *  - V3FloatingCTA（押し付け感削減）
 *  - BukkenExitPopup（押し付け感削減）
 *
 * CTA は3箇所に圧縮: Hero CTA → BottomCTA → MailForm
 */
export default function BukkenLPPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333", background: "#fff" }}>
      <BukkenHero />
      <BukkenSteps />
      <BukkenGuideSection />
      <BukkenBeforeAfterCTA />
      <BukkenProfiles />
      <BukkenFAQ />
      <BukkenBottomCTA />
      <BukkenMailForm />
      <BukkenFooter />
    </div>
  );
}
