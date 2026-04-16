/**
 * 週単位で固定される非公開収益物件数を返す。
 * 同じ週（月曜〜日曜）の間は同じ値を返し、週が変わると別の値になる。
 * 範囲: 30〜45件（宮城県のアパート投資物件は店舗より少なめ）
 */
export function getWeeklyPropertyCount(): number {
  const now = new Date();
  const year = now.getFullYear();
  const jan1 = new Date(year, 0, 1);
  const dayOfYear = Math.floor(
    (now.getTime() - jan1.getTime()) / (24 * 60 * 60 * 1000)
  );
  const weekNumber = Math.floor((dayOfYear + jan1.getDay()) / 7);

  const seed = year * 100 + weekNumber;
  const hash = ((seed * 2654435761) >>> 0) % 16; // 0〜15

  return 30 + hash;
}
