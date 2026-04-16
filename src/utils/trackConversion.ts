/**
 * Google Ads コンバージョン計測 & GA4 dataLayer push を 1 関数で。
 * LINE CTA クリック時に必ず呼ぶ。
 *
 * コンバージョン: LINE登録（満室収益物件LP）
 * - AW-18072645905 (Google Ads コンバージョンタグ)
 * - CD-gCl6nhJ0cEJHi2qlD (このアクションのラベル)
 *
 * 仕様詳細: docs/AD_ACCOUNT_SETUP.md §1
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONVERSION_SEND_TO = "AW-18072645905/CD-gCl6nhJ0cEJHi2qlD";
const CONVERSION_VALUE = 3000;
const CONVERSION_CURRENCY = "JPY";

/**
 * LINE CTA クリック時の計測。
 * - dataLayer に `line_cta_click` イベント push（GA4/GTM向け）
 * - gtag で Google Ads コンバージョン発火
 *
 * @param location どのCTAから発火したか（Google Ads検索語句分析で使用）
 */
export function trackLineCtaClick(location: string): void {
  if (typeof window === "undefined") return;

  // GA4 / GTM 向け dataLayer push
  window.dataLayer?.push({
    event: "line_cta_click",
    cta_location: location,
  });

  // Google Ads コンバージョン発火
  window.gtag?.("event", "conversion", {
    send_to: CONVERSION_SEND_TO,
    value: CONVERSION_VALUE,
    currency: CONVERSION_CURRENCY,
    transaction_id: `${location}-${Date.now()}`, // 重複計測防止
  });
}

/**
 * 電話CTAクリック（Google Adsではコンバージョンにしない方針）
 */
export function trackPhoneCtaClick(location: string): void {
  if (typeof window === "undefined") return;
  window.dataLayer?.push({
    event: "phone_cta_click",
    cta_location: location,
  });
}
