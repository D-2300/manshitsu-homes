import ManshitsuNav from "../components/hp/ManshitsuNav";
import SmallHero from "../components/hp/SmallHero";
import ManshitsuFooter from "../components/hp/ManshitsuFooter";
import V3FloatingCTA from "../components/v3/V3FloatingCTA";
import { C, typography, spacing } from "../tokens";

const rows: { label: string; value: string }[] = [
  { label: "事業者名称", value: "満室デザインLABO" },
  { label: "運営責任者", value: "KAI & KEN（代表: 非公開。取引開始時に書面で開示します）" },
  { label: "所在地", value: "宮城県仙台市（具体的な住所はお申し込み後に書面でお知らせします）" },
  { label: "連絡先電話番号", value: "080-6900-3314（平日9:00〜18:00）" },
  { label: "連絡先メールアドレス", value: "d.roots001@gmail.com" },
  { label: "LINE公式アカウント", value: "@074uzmls" },
  { label: "事業内容", value: "宮城県のアパート投資オーナー向け物件情報提供・内装改修工事・客付け支援・バーチャルステージング" },
  { label: "販売価格", value: "施工案件ごとの個別見積もりによります。すべて見積書を書面またはPDFで提示し、ご同意いただいてから着工します。詳細は Pricing ページをご参照ください。" },
  { label: "商品代金以外の必要料金", value: "消費税、出張・交通費（宮城県外の現地対応時）、特殊材料費など。すべて見積書に明記します。" },
  { label: "代金の支払い方法", value: "銀行振込。原則として工事完了後、請求書発行からの後払い。大型案件は着手金・中間金・完了金の分割払い。" },
  { label: "代金の支払い時期", value: "請求書発行から30日以内のお振込みをお願いしています。" },
  { label: "サービス提供時期", value: "お申し込み後、現地調査・見積書提示・ご同意を経て、合意した工期にて施工を開始します。" },
  { label: "キャンセル・返品", value: "契約成立後の一方的なキャンセルは、進捗に応じて発生した費用を負担いただきます。施工後のキャンセル・返品は原則として承れません。ただし、当スタジオの瑕疵による場合は無償で是正対応します。" },
  { label: "物件情報提供について", value: "物件情報のご紹介・ご相談・現地内見同行はすべて無料です。仲介手数料は発生しません。当スタジオは宅地建物取引業を行っておりません。" },
];

export default function TokushohoPage() {
  return (
    <div style={{ fontFamily: typography.fontFamily, color: C.textDark }}>
      <ManshitsuNav />
      <SmallHero title="Tokushoho" subtitle="特定商取引法に基づく表記" />

      <section style={{ padding: `${spacing.section.md} ${spacing.pagePadding}`, background: C.warmWhite }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: typography.bodyLarge.size, color: C.textMid, lineHeight: 1.9, marginBottom: 40 }}>
            特定商取引法に基づく表記を以下のとおり掲載いたします。ご不明点がございましたらお問い合わせください。
          </p>

          <div
            style={{
              background: "#fff",
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            {rows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  borderBottom: i === rows.length - 1 ? "none" : `1px solid ${C.borderLight}`,
                }}
              >
                <div
                  style={{
                    background: C.warmWhite,
                    padding: "16px 20px",
                    fontSize: 13,
                    fontWeight: 700,
                    color: C.textDark,
                    borderRight: `1px solid ${C.borderLight}`,
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    padding: "16px 20px",
                    fontSize: 13,
                    color: C.textMid,
                    lineHeight: 1.8,
                  }}
                >
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${C.border}`, textAlign: "right" }}>
            <p style={{ fontSize: 13, color: C.warmGray }}>
              制定日: 2026年4月17日
            </p>
          </div>

          <style>{`
            @media (max-width: 640px) {
              .tokushoho-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      <ManshitsuFooter />
      <V3FloatingCTA />
    </div>
  );
}
