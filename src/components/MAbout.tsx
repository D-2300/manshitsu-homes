export default function MAbout() {
  return (
    <section className="bg-white py-14 px-5">
      <div className="max-w-[720px] mx-auto">
        <p className="text-m-main text-xs font-semibold tracking-widest text-center mb-3">
          ABOUT
        </p>
        <h2 className="text-[clamp(20px,5vw,28px)] font-bold text-c-text text-center leading-snug mb-8">
          私たちについて
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 items-start bg-m-bg rounded-lg p-6">
          <div className="flex-shrink-0 text-center mx-auto sm:mx-0">
            <img
              src="/images/about-dai-sm.webp"
              alt="代表"
              loading="lazy"
              className="w-16 h-16 rounded-full object-cover mx-auto"
            />
            <p className="text-[11px] text-m-mid mt-1.5 tracking-wide">CSO</p>
            <p className="text-sm font-semibold text-c-text">KEN</p>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm text-c-text-md leading-[1.9] mb-4">
              カフェやバー、美容室など年間50件以上の店舗内装を手がけてきた経験から、「空間の印象が人の行動を変える」と確信しています。
              その知見を賃貸の原状回復に応用し、"ただ戻す"のではなく"選ばれる部屋"をつくるのが私たちの仕事です。
            </p>
            <p className="text-sm text-m-main font-medium leading-relaxed border-l-2 border-c-gold pl-3">
              空室の1日を短くする——それがオーナー様の利益に直結するから、私たちはスピードにこだわります。
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <img
            src="/images/logo-manshitsu-mark-gold.webp"
            alt="満室デザインLABO"
            loading="lazy"
            className="w-14 h-14 object-contain mx-auto opacity-60"
          />
        </div>
      </div>
    </section>
  );
}
