import ManshitsuNav from "../components/hp/ManshitsuNav";
import HPHero from "../components/hp/HPHeroV2";
import HPWhatWeDo from "../components/hp/HPWhatWeDo";
import HPVoice from "../components/hp/HPVoice";
import HPWorksPreview from "../components/hp/HPWorksPreview";
import HPArticlesPreview from "../components/hp/HPArticlesPreview";
import HPPropertyTeaser from "../components/hp/HPPropertyTeaser";
import ManshitsuFooter from "../components/hp/ManshitsuFooter";

/**
 * HPTop — Phase 2 トーン統一版
 *
 * 削除: HPTrustTestimonials / V3FloatingCTA（LP と整合）
 */
export default function HPTop() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333" }}>
      <ManshitsuNav />
      <HPHero />
      <HPWhatWeDo />
      <HPPropertyTeaser />
      <HPVoice />
      <HPWorksPreview />
      <HPArticlesPreview />
      <ManshitsuFooter />
    </div>
  );
}
