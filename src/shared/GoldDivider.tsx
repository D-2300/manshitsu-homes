import { C } from "../tokens";

interface GoldDividerProps {
  /** 線の方向。vertical=縦線（default）、horizontal=横線 */
  direction?: "vertical" | "horizontal";
  /** 長さ（縦なら高さ、横なら幅）。デフォルト 40 */
  length?: number;
  /** 上下 margin。デフォルト "32px auto" */
  margin?: string;
  /** 色（デフォルトはゴールド） */
  color?: string;
}

/**
 * 満室HP/LPで多用されている 1px ゴールド仕切り線。
 * 縦 40px / 中央寄せ がデフォルト。
 */
export default function GoldDivider({
  direction = "vertical",
  length = 40,
  margin = "32px auto",
  color = C.gold,
}: GoldDividerProps) {
  const isVertical = direction === "vertical";
  return (
    <div
      style={{
        width: isVertical ? 1 : length,
        height: isVertical ? length : 1,
        background: color,
        margin,
      }}
    />
  );
}
