import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "本当に2日で終わりますか？",
    a: "1K〜1LDKの標準的な原状回復は最短2日で完了します。広さや施工内容次第で3〜5日の場合もありますが、事前にLINEで正確な日数をお伝えします。",
  },
  {
    q: "管理会社を通さないで工事して問題ないですか？",
    a: "問題ありません。オーナー様には発注先を自由に選ぶ権利があります。施工品質・コスト・スピードで比較していただければ幸いです。",
  },
  {
    q: "施工後に気になるところがあったら？",
    a: "LINEで連絡いただければすぐ対応します。管理会社を通さず直接やり取りするから、対応が速い。これが直接取引の強みです。",
  },
  {
    q: "見積もりは無料ですか？",
    a: "完全無料です。管理会社の見積書をLINEで送っていただくだけで、比較用の見積もりをお出しします。",
  },
  {
    q: "遠方の物件でも対応できますか？",
    a: "仙台市・宮城県全域に対応しています。写真付き施工報告をLINEで共有するので、現地に来られなくても進捗を確認いただけます。",
  },
  {
    q: "急ぎの工事にも対応できますか？",
    a: "得意です。退去立会い後、当日中に現地確認・概算をお出しすることも可能です。翌日着工も対応しています。",
  },
  {
    q: "初回お試しって何ですか？",
    a: "初回1部屋限定の特別価格です。スピードと仕上がりを体感していただいてから、継続するかどうかを判断してください。",
  },
];

export default function MFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-m-bg py-14 px-5">
      <div className="max-w-[720px] mx-auto">
        <p className="text-m-main text-xs font-semibold tracking-widest text-center mb-3">
          FAQ
        </p>
        <h2 className="text-[clamp(20px,5vw,28px)] font-bold text-c-text text-center leading-snug mb-8">
          よくあるご質問
        </h2>

        <div className="bg-white rounded-lg border border-m-light/20 divide-y divide-m-light/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-3 p-4 text-left bg-transparent border-none cursor-pointer hover:bg-m-bg/30 transition-colors"
              >
                <div className="flex gap-3 items-start">
                  <span className="text-m-main font-bold text-sm flex-shrink-0 mt-0.5">Q</span>
                  <span className="text-sm font-medium text-c-text leading-relaxed">{faq.q}</span>
                </div>
                <span className="flex-shrink-0 text-m-mid mt-0.5">
                  {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              {open === i && (
                <div className="px-4 pb-4 pl-11 flex gap-3">
                  <span className="text-m-light font-bold text-sm flex-shrink-0 mt-0.5">A</span>
                  <p className="text-sm text-c-text-md leading-[1.85] m-0">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
