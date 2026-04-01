import { C } from "./tokens";
import MHero from "./components/MHero";
import MBridge from "./components/MBridge";
import MProblem from "./components/MProblem";
import MAgitate from "./components/MAgitate";
import MSolve from "./components/MSolve";
import MBeforeAfter from "./components/MBeforeAfter";
import MOneStop from "./components/MOneStop";
import MPrice from "./components/MPrice";
import MFlow from "./components/MFlow";
import MFAQ from "./components/MFAQ";
import MLastPush from "./components/MLastPush";
import MCTA from "./components/MCTA";
import MProfile from "./components/MProfile";
import MFooter from "./components/MFooter";
import MContactForm from "./components/MContactForm";
import MFloatingCTA from "./components/MFloatingCTA";

export default function ManshitsuPage() {
  return (
    <div
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        backgroundColor: C.warmWhite,
        maxWidth: "720px",
        margin: "0 auto",
        paddingBottom: "64px",
      }}
    >
      <MHero />
      <MBridge text="──こんなこと、思っていませんか。" />
      <MProblem />
      <MBridge text="これ、仕組みの問題です。" />
      <MAgitate />
      <MBridge text="でも、安いだけじゃありません。" />
      <MSolve />
      <MBridge text="実際に、こうなりました。" />
      <MBeforeAfter />
      <MBridge text="分離発注の手間は、かかりません。" />
      <MOneStop />
      <MBridge text="料金は、すべて明記します。" />
      <MPrice />
      <MBridge text="ご依頼は、これだけです。" />
      <MFlow />
      <MBridge text="不安、ありますよね。" />
      <MFAQ />
      <MLastPush />
      <MCTA />
      <MContactForm />
      <MProfile />
      <MFooter />
      <MFloatingCTA />
    </div>
  );
}
