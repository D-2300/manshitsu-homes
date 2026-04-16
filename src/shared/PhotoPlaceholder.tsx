import { C } from "../tokens";

interface PhotoPlaceholderProps {
  aspect?: string;
  label?: string;
  className?: string;
  /** 背景色（デフォルト M.bg のベージュ系） */
  background?: string;
}

/**
 * 写真のダミープレースホルダー。
 * 本番画像が未入稿のレイアウト検証用。
 */
export default function PhotoPlaceholder({
  aspect = "16/9",
  label = "PHOTO",
  className = "",
  background = "#E5E0DB",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={className}
      style={{
        aspectRatio: aspect,
        background,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          color: C.mute,
          fontSize: 13,
          fontWeight: 300,
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </span>
    </div>
  );
}
