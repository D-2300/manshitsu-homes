import V3Hero from "./components/v3/V3Hero";
import V3LPProblem from "./components/v3/V3LPProblem";
import V3LPReframe from "./components/v3/V3LPReframe";
import V3MidCTA from "./components/v3/V3MidCTA";
import V3LPSolution from "./components/v3/V3LPSolution";
import V3BeforeAfter from "./components/v3/V3BeforeAfter";
import V3Flow from "./components/v3/V3Flow";
import V3FAQ from "./components/v3/V3FAQ";
import V3BottomCTA from "./components/v3/V3BottomCTA";
import V3Footer from "./components/v3/V3Footer";
import V3FloatingCTA from "./components/v3/V3FloatingCTA";
import V3ExitPopup from "./components/v3/V3ExitPopup";

export default function StagingLPPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333" }}>
      <V3Hero />
      <V3LPProblem />
      <V3LPReframe />
      <V3MidCTA />
      <V3LPSolution />
      <V3BeforeAfter />
      <V3Flow />
      <V3FAQ variant="lp" />
      <V3BottomCTA />
      <V3Footer />
      <V3FloatingCTA />
      <V3ExitPopup />
    </div>
  );
}
