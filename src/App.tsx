import V3Hero from "./components/v3/V3Hero";
import V3HPProblem from "./components/v3/V3HPProblem";
import V3HPReframe from "./components/v3/V3HPReframe";
import V3HPPhilosophy from "./components/v3/V3HPPhilosophy";
import V3MidCTA from "./components/v3/V3MidCTA";
import V3HPSolution from "./components/v3/V3HPSolution";
import V3BeforeAfter from "./components/v3/V3BeforeAfter";
import V3Price from "./components/v3/V3Price";
import V3HPWhyUs from "./components/v3/V3HPWhyUs";
import V3Flow from "./components/v3/V3Flow";
import V3Profiles from "./components/v3/V3Profiles";
import V3FAQ from "./components/v3/V3FAQ";
import V3BottomCTA from "./components/v3/V3BottomCTA";
import V3Footer from "./components/v3/V3Footer";
import V3FloatingCTA from "./components/v3/V3FloatingCTA";
import V3ExitPopup from "./components/v3/V3ExitPopup";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        color: "#333",
      }}
    >
      <V3Hero />
      <V3HPProblem />
      <V3HPReframe />
      <V3HPPhilosophy />
      <V3MidCTA />
      <V3HPSolution />
      <V3BeforeAfter />
      <V3Price />
      <V3HPWhyUs />
      <V3Flow />
      <V3Profiles />
      <V3FAQ variant="hp" />
      <V3BottomCTA />
      <V3Footer />
      <V3FloatingCTA />
      <V3ExitPopup />
    </div>
  );
}
