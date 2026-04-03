import { MessageCircle, Camera, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle size={20} />,
    title: "LINEで相談",
    time: "即日",
    desc: "管理会社の見積書の写真、または物件の状況を送るだけでOK。",
  },
  {
    icon: <Camera size={20} />,
    title: "現地調査・見積もり",
    time: "即日〜翌日",
    desc: "退去当日の現場確認も可能。写真付き明細見積書をLINEでお送りします。",
  },
  {
    icon: <Wrench size={20} />,
    title: "施工",
    time: "最短2日",
    desc: "店舗施工で鍛えた段取りで、スピーディーに仕上げます。",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "完了・引き渡し",
    time: "即日対応",
    desc: "写真付き完了報告をLINEで共有。ポータル掲載写真にもそのまま使えます。",
  },
];

export default function MFlow() {
  return (
    <section className="bg-white py-14 px-5">
      <div className="max-w-[720px] mx-auto">
        <p className="text-amber-600 text-xs font-semibold tracking-widest text-center mb-3">
          FLOW
        </p>
        <h2 className="text-[clamp(20px,5vw,28px)] font-bold text-slate-900 text-center leading-snug mb-10">
          ご依頼の流れ
        </h2>

        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-px bg-amber-300/40" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start relative">
                {/* Circle icon */}
                <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
                  {step.icon}
                </div>

                <div className="pt-0.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-[15px] font-bold text-slate-900">{step.title}</h3>
                    <span className="text-[11px] font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
