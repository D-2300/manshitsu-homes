import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

export default function MProfile() {
  return (
    <section style={{ backgroundColor: C.white, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader label="ABOUT" heading={"記憶荘について"} />

        {/* Logo below heading - centered */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="/images/logo-manshitsu-mark-gold.webp"
            alt="満室デザインLABO"
            loading="lazy"
            style={{ width: "72px", height: "72px", objectFit: "contain", display: "block", margin: "0 auto" }}
          />
        </div>

        {/* CSO KEN + Description (speech bubble style) */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "flex-start",
            padding: "24px",
            border: `1px solid rgba(107,64,102,0.1)`,
            borderRadius: "4px",
            backgroundColor: M.bg,
          }}
        >
          {/* KEN avatar */}
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <img
              src="/images/about-dai-sm.webp"
              alt="KEN"
              width="56"
              height="56"
              loading="lazy"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <p style={{ margin: "6px 0 0", fontSize: "11px", letterSpacing: "0.06em", color: M.mid, fontWeight: 500 }}>
              CSO
            </p>
            <p style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: C.textDark }}>
              KEN
            </p>
          </div>

          {/* Comment text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: "clamp(13px, 3.2vw, 14px)", color: C.textMid, lineHeight: 1.9 }}>
              カフェやバー、美容室など年間50件以上の店舗内装を手がけてきた経験から、「空間の印象が人の行動を変える」と確信しています。その知見を賃貸の原状回復に応用し、"ただ戻す"のではなく"選ばれる部屋"をつくるのが私たちの仕事です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
