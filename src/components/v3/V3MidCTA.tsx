import { LineCTAButton } from "../../shared";

export default function V3MidCTA() {
  return (
    <section style={{ background: "#fff", padding: "48px 24px", textAlign: "center" }}>
      <p
        style={{
          fontSize: "clamp(14px, 2.5vw, 16px)",
          fontWeight: 500,
          color: "#555",
          marginBottom: 8,
          lineHeight: 1.7,
        }}
      >
        ここまで読んで気になった方へ
      </p>
      <p
        style={{
          fontSize: "clamp(13px, 2.3vw, 15px)",
          color: "#888",
          marginBottom: 20,
          lineHeight: 1.7,
        }}
      >
        非公開のアパート投資物件情報を<br />今すぐお届けします。
      </p>
      <LineCTAButton size="large" label="非公開の物件情報を見る" />
      <p style={{ fontSize: 12, color: "#bbb", marginTop: 14 }}>
        1分で完了・営業なし・いつでもブロック可能
      </p>
    </section>
  );
}
