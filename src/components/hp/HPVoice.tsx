import { C, M } from "../../tokens";

/**
 * HPVoice — LP トーン統一版
 * 顔写真にゴールドリング・◆ オーナメント・金ヘアラインで豪華化
 */
export default function HPVoice() {
  return (
    <section style={{ padding: "64px 20px", background: "#fff" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
        {/* ◆ オーナメント見出し */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            maxWidth: "380px",
            margin: "0 auto 20px",
          }}
        >
          <span
            style={{
              flex: 1,
              height: "1px",
              background: `linear-gradient(90deg, transparent, rgba(201,168,76,.5), transparent)`,
            }}
          />
          <span style={{ color: C.gold, fontSize: "7px" }}>◆</span>
          <span
            style={{
              fontSize: "11px",
              letterSpacing: ".3em",
              color: C.gold,
              fontWeight: 600,
              textTransform: "uppercase" as const,
              whiteSpace: "nowrap",
            }}
          >
            Our Voice
          </span>
          <span style={{ color: C.gold, fontSize: "7px" }}>◆</span>
          <span
            style={{
              flex: 1,
              height: "1px",
              background: `linear-gradient(90deg, transparent, rgba(201,168,76,.5), transparent)`,
            }}
          />
        </div>

        {/* 顔写真 (ゴールドリング) */}
        <div style={{ display: "flex", justifyContent: "center", gap: "18px", marginBottom: "14px" }}>
          {[
            { img: "/images/about-kai-sm.webp", name: "KAI", role: "元不動産" },
            { img: "/images/about-ken-sm.webp", name: "KEN", role: "職人" },
          ].map((p) => (
            <div key={p.name} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "50%",
                  border: `2px solid ${C.gold}`,
                  padding: "2px",
                  background: `rgba(201,168,76,.08)`,
                  margin: "0 auto 6px",
                }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: M.main,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                }}
              >
                {p.name}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: C.warmGray,
                  letterSpacing: ".05em",
                  marginTop: "1px",
                }}
              >
                {p.role}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "11px",
            color: C.warmGray,
            marginBottom: "24px",
            letterSpacing: ".08em",
          }}
        >
          KAI &amp; KEN ／ 満室デザインLABO
        </p>

        {/* 金ヘアライン区切り */}
        <div
          style={{
            width: "40px",
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
            margin: "0 auto 24px",
          }}
        />

        <p
          style={{
            fontSize: "clamp(17px, 3.8vw, 22px)",
            fontWeight: 700,
            color: M.dark,
            lineHeight: 1.8,
            marginBottom: "18px",
            letterSpacing: ".02em",
          }}
        >
          アパート経営を始めたい人が、<br />
          <em style={{ fontStyle: "normal", color: C.gold }}>物件選びで失敗しなくていい</em>ように。
        </p>
        <p
          style={{
            fontSize: "clamp(13px, 2.8vw, 15px)",
            color: C.textMid,
            lineHeight: 1.9,
            marginBottom: "14px",
          }}
        >
          不動産屋の都合ではなく、大家さんの利益で物件を選ぶこと。<br />
          築古でも、改修で利回りを変えられること。
        </p>
        <p
          style={{
            fontSize: "clamp(13px, 2.8vw, 15px)",
            color: C.textMid,
            lineHeight: 1.9,
          }}
        >
          それが、<strong style={{ color: M.dark, fontWeight: 700 }}>満室デザインLABO</strong>のやり方です。
        </p>
      </div>
    </section>
  );
}
