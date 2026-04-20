import ManshitsuNav from "../components/hp/ManshitsuNav";
import HPHero from "../components/hp/HPHero";
import HPWhatWeDo from "../components/hp/HPWhatWeDo";
import HPVoice from "../components/hp/HPVoice";
import HPWorksPreview from "../components/hp/HPWorksPreview";
import HPArticlesPreview from "../components/hp/HPArticlesPreview";
import HPPropertyTeaser from "../components/hp/HPPropertyTeaser";
import HPTrustTestimonials from "../components/hp/HPTrustTestimonials";
import ManshitsuFooter from "../components/hp/ManshitsuFooter";
import V3FloatingCTA from "../components/v3/V3FloatingCTA";

export default function HPTop() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333" }}>
      <ManshitsuNav />
      <HPHero />
      <HPWhatWeDo />
      <HPPropertyTeaser />
      <HPTrustTestimonials />
      <HPVoice />
      <HPWorksPreview />
      <HPArticlesPreview />
      <ManshitsuFooter />
      <V3FloatingCTA />
    </div>
  );
}
