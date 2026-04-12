import { M, C } from "../../tokens";

export default function V3HPPhilosophy() {
  return (
    <section style={{ padding: "64px 20px", background: M.dark }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {/* Gold divider */}
        <div
          style={{
            width: "1px",
            height: "40px",
            background: C.gold,
            margin: "0 auto 32px",
          }}
        />

        {/* Core philosophy */}
        <blockquote
          style={{
            textAlign: "center",
            fontSize: "clamp(18px, 4vw, 24px)",
            fontWeight: 700,
            color: "#f0ede8",
            lineHeight: 1.8,
            marginBottom: "32px",
            padding: 0,
            border: "none",
          }}
        >
          不動産屋は冷たい。<br />
          うちは、<em style={{ fontStyle: "normal", color: C.gold }}>どこの物件になってもいい。</em>
        </blockquote>

        <div
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(255,255,255,.15)",
            margin: "0 auto 32px",
          }}
        />

        {/* Paragraphs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.9,
              textAlign: "center",
            }}
          >
            不動産屋には「売りたい物件」がある。<br />
            仲介手数料が高い物件、回転率がいい物件。<br />
            お客さんの利益と、自分たちの利益が一致しないことがある。
          </p>

          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.9,
              textAlign: "center",
            }}
          >
            私たちは内装工事の会社です。<br />
            物件の売買で儲ける立場にいない。<br />
            だから、<strong style={{ color: "#f0ede8" }}>どの物件を選んでもらっても構わない。</strong>
          </p>

          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.9,
              textAlign: "center",
            }}
          >
            大家さんにとって本当にいい物件を、一緒に探す。<br />
            その物件を、一緒に良くする。<br />
            それが、私たちの仕事のかたちです。
          </p>
        </div>

        <div
          style={{
            width: "1px",
            height: "40px",
            background: C.gold,
            margin: "40px auto 32px",
          }}
        />

        {/* Second philosophy block */}
        <h3
          style={{
            textAlign: "center",
            fontSize: "clamp(18px, 4vw, 24px)",
            fontWeight: 700,
            color: "#f0ede8",
            lineHeight: 1.8,
            marginBottom: "24px",
          }}
        >
          入居者が「自分の部屋」を<br />
          選べる世界をつくる。
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.9,
              textAlign: "center",
            }}
          >
            賃貸の部屋は、どこも同じ白い壁紙。<br />
            退去のたびに同じ色に戻して、また募集して、また白く戻す。<br />
            そのサイクルの中で、誰も「自分の部屋」だと思えない。
          </p>

          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "rgba(255,255,255,.7)",
              lineHeight: 1.9,
              textAlign: "center",
            }}
          >
            もし入居者が、自分で壁紙の色を選べたら。<br />
            その部屋は「借りている部屋」から「自分の部屋」に変わる。<br />
            長く住みたくなる。大切にしたくなる。
          </p>

          <p
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "rgba(255,255,255,.85)",
              lineHeight: 1.9,
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            入居者の満足は、大家さんの安定収益につながる。<br />
            <strong style={{ color: C.gold }}>「入居後リフォーム」</strong>は、<br />
            その循環を生むための仕組みです。
          </p>
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: "1px",
            height: "40px",
            background: C.gold,
            margin: "40px auto 0",
          }}
        />
      </div>
    </section>
  );
}
