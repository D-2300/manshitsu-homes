import { M, C } from "../../tokens";
import { LineCTAButton } from "../../shared";

export default function V3BottomCTA() {
  return (
    <section
      data-section="final-cta"
      style={{ background: M.dark, padding: "64px 24px", textAlign: "center" }}
    >
      <h2
        style={{
          fontSize: "clamp(20px, 4.5vw, 28px)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: 10,
          lineHeight: 1.7,
        }}
      >
        情報を持っている人が、<br />
        <em style={{ fontStyle: "normal", color: C.gold }}>勝つ世界</em>です。
      </h2>
      <p
        style={{
          fontSize: "clamp(14px, 3vw, 16px)",
          color: "rgba(255,255,255,.4)",
          marginBottom: 28,
          lineHeight: 1.8,
        }}
      >
        非公開のアパート投資物件情報 +<br />
        改修診断を無料でお届けします。
      </p>
      <LineCTAButton size="large" label="非公開の物件情報を見る" />
      <p style={{ fontSize: 12, color: "rgba(255,255,255,.25)", marginTop: 14 }}>
        1分で完了・営業なし・いつでもブロック可能
      </p>
    </section>
  );
}
