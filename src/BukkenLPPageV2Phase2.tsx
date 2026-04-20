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
 * BukkenLPPageV2Phase2 — Phase 2 トリム版モック
 *
 * 削除したセクション:
 *  - BukkenYourSide（V2 Hero の三角形が代替）
 *  - BukkenMidCTA（CTA数削減）
 *  - BukkenFairEval（Profiles に統合 or LINE配信に移管予定）
 *  - HPTrustTestimonials（任意・優先度低）
 *  - V3FloatingCTA（CTA数削減）
 *  - BukkenExitPopup（押し付け感削減）
 *
 * 残したセクション（9コンポーネント）:
 *  1. BukkenHero V2  — 楔・三角形・物件ちら見せ・パターンインタラプト・CTA
 *  2. BukkenSteps    — 相談〜施工の流れ
 *  3. BukkenGuide    — ガイド配布（LINE誘導の強い理由）
 *  4. BukkenBeforeAfterCTA — 施工実績のビジュアル証明
 *  5. BukkenProfiles — KAI & KEN の詳細プロフィール
 *  6. BukkenFAQ      — 反論処理
 *  7. BukkenBottomCTA — 最終CTA
 *  8. BukkenMailForm — メール問い合わせ（LINE以外の選択肢）
 *  9. BukkenFooter
 *
 * CTA は3箇所に圧縮:
 *  - Hero CTA（LINE）
 *  - BottomCTA
 *  - MailForm
 */
export default function BukkenLPPageV2Phase2() {
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
