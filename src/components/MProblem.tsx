import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

const items = [
  <>管理会社の見積もり、<em>毎回なんか高い</em>気がする。でも相場がわからないから、そのまま通してしまう。</>,
  <>退去が出るたびに<em>10万、15万</em>と出ていく。家賃収入が右から左に消えていく感覚。</>,
  <>自分で業者を探せばコストは下がるらしい。でも<em>どこに頼めばいいのかわからない</em>し、管理会社の機嫌を損ねるのも怖い。</>,
  <>3月の繁忙期、管理会社から<em>見積もりが出てくるのが遅い</em>。その間にも空室が続いて家賃が入らない。</>,
];

export default function MProblem() {
  return (
    <section style={{ backgroundColor: C.white, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader label="PROBLEM" heading={"退去のたびに、利益が\n削られていく気がする。"} />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                padding: "16px 18px",
                backgroundColor: "#FAFAFA",
                borderRadius: "4px",
                border: "1px solid #F0EDE8",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: M.main,
                  flexShrink: 0,
                  marginTop: "7px",
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "clamp(14px, 3.5vw, 15px)",
                  color: C.textDark,
                  lineHeight: 1.85,
                }}
              >
                <style>{`
                  .problem-item em {
                    font-style: normal;
                    color: ${M.main};
                    font-weight: 500;
                  }
                `}</style>
                <span className="problem-item">{item}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
