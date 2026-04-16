import { C, LINE_URL, radius, transitions } from "../tokens";

interface LineCTAButtonProps {
  size?: "normal" | "small" | "large";
  label?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
}

const sizeMap = {
  small:  { padding: "10px 24px", fontSize: "13px" },
  normal: { padding: "14px 40px", fontSize: "15px" },
  large:  { padding: "18px 48px", fontSize: "17px" },
} as const;

/**
 * LINE CTA ボタン。
 * - デフォルトで `LINE_URL`（満室公式: @074uzmls）へ遷移
 * - disabled=true で準備中表示
 */
export default function LineCTAButton({
  size = "normal",
  label = "LINEで相談する",
  disabled = false,
  fullWidth = false,
  href,
}: LineCTAButtonProps) {
  const { padding, fontSize } = sizeMap[size];
  const width = fullWidth ? "100%" : undefined;

  if (disabled) {
    return (
      <div
        style={{
          display: fullWidth ? "block" : "inline-block",
          textAlign: "center",
          width,
        }}
      >
        <div
          style={{
            display: fullWidth ? "block" : "inline-block",
            backgroundColor: C.mute,
            color: "#fff",
            borderRadius: radius.md,
            padding,
            fontSize,
            fontWeight: 500,
            cursor: "default",
            width,
            textAlign: "center",
          }}
        >
          {label}
        </div>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>
          ※ 準備中です
        </p>
      </div>
    );
  }

  return (
    <a
      href={href ?? LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: fullWidth ? "block" : "inline-block",
        backgroundColor: C.lineGreen,
        color: "#fff",
        borderRadius: radius.md,
        padding,
        fontSize,
        fontWeight: 500,
        textDecoration: "none",
        transition: `opacity ${transitions.base}, transform ${transitions.base}`,
        textAlign: "center",
        width,
        boxShadow: "0 2px 8px rgba(6,199,85,0.25)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.92";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {label}
    </a>
  );
}
