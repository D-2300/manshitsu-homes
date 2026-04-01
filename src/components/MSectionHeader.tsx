import { M, C } from "../tokens";

interface Props {
  label: string;
  heading: string;
  headingColor?: string;
  labelColor?: string;
}

export default function MSectionHeader({ label, heading, headingColor = C.textDark, labelColor = M.light }: Props) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, opacity: 0.5, margin: "0 auto 12px" }} />
      <p
        style={{
          margin: "0 0 10px",
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: "12px",
          fontWeight: 400,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: labelColor,
          textAlign: "center",
        }}
      >
        {label}
      </p>
      <h2
        style={{
          margin: 0,
          fontFamily: "'Noto Serif JP', serif",
          fontSize: "clamp(18px, 4.5vw, 24px)",
          fontWeight: 600,
          color: headingColor,
          lineHeight: 1.55,
          textAlign: "center",
          letterSpacing: "0.02em",
        }}
      >
        {heading}
      </h2>
    </div>
  );
}
