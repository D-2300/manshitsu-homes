import { Zap, MessageCircle, Wrench } from "lucide-react";

const services = [
  {
    icon: <MessageCircle className="text-c-gold" size={28} />,
    title: "直接取引、中間ロスゼロ",
    desc: "管理会社を通さず直接やり取り。伝言ゲームがないから判断が速い。",
    img: "/images/service-direct.webp",
    placeholder: "LINEで直接やり取り",
  },
  {
    icon: <Zap className="text-c-gold" size={28} />,
    title: "少数精鋭、即判断即着工",
    desc: "稟議・承認プロセスゼロ。現場を見てその場で概算。",
    img: "/images/service-speed.webp",
    placeholder: "手際よく施工する職人",
  },
  {
    icon: <Wrench className="text-c-gold" size={28} />,
    title: "完了後もすぐフォロー",
    desc: "施工後の細かい修正もすぐ対応。やりっぱなしにしない。",
    img: "/images/service-aftercare.webp",
    placeholder: "細部をチェック・修正",
  },
];

function ImageOrPlaceholder({ src, alt, placeholder }: { src: string; alt: string; placeholder: string }) {
  return (
    <div className="relative w-full aspect-[4/3] bg-m-bg rounded-lg overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = "none";
          const next = target.nextElementSibling as HTMLElement;
          if (next) next.style.display = "flex";
        }}
      />
      <div className="absolute inset-0 bg-m-bg items-center justify-center text-m-mid text-sm hidden">
        {placeholder}
      </div>
    </div>
  );
}

export default function MService() {
  return (
    <section className="bg-c-warm py-14 px-5">
      <div className="max-w-[720px] mx-auto">
        <p className="text-m-main text-xs font-semibold tracking-widest text-center mb-3">
          SERVICE
        </p>
        <h2 className="text-[clamp(20px,5vw,28px)] font-bold text-c-text text-center leading-snug mb-10">
          なぜ、最短2日で<br className="sm:hidden" />終わるのか。
        </h2>

        <div className="flex flex-col gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row gap-5 items-center ${
                i % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full sm:w-1/2">
                <ImageOrPlaceholder src={s.img} alt={s.title} placeholder={s.placeholder} />
              </div>
              <div className="w-full sm:w-1/2">
                <div className="flex items-center gap-3 mb-2">
                  {s.icon}
                  <h3 className="text-lg font-bold text-c-text">{s.title}</h3>
                </div>
                <p className="text-sm text-c-text-md leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
