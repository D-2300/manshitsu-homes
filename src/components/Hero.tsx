import { Camera, Gift, ShieldCheck } from 'lucide-react';
import { M, C, LINE_URL } from '../tokens';
import { pushEvent } from '../utils/pushEvent';

const colorVariations = [
  { src: '/images/vs-color-blue.jpeg', label: 'ブルー' },
  { src: '/images/vs-color-green.jpeg', label: 'グリーン' },
  { src: '/images/vs-color-black.jpeg', label: 'ブラック' },
  { src: '/images/vs-color-wine.jpeg', label: 'ワイン' },
];

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px 48px',
        backgroundColor: M.dark,
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <img
        src="/images/hero-bg.webp"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.85,
          zIndex: 0,
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: `linear-gradient(to top, ${M.dark}cc 0%, ${M.dark}66 40%, ${M.dark}33 100%)`,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 640 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.25em',
            color: C.gold,
            fontWeight: 300,
            textTransform: 'uppercase',
            marginBottom: 12,
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
          }}
        >
          Manshitsu Design LABO
        </div>

        <p
          style={{
            fontSize: 'clamp(14px, 3vw, 18px)',
            fontWeight: 700,
            letterSpacing: '.12em',
            color: '#fff',
            marginBottom: 8,
            lineHeight: 1.6,
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
          }}
        >
          アパート・マンション<br />オーナー様へ
        </p>

        <div style={{ width: 40, height: 2, backgroundColor: C.gold, margin: '0 auto 16px', opacity: 0.6 }} />

        <h1
          style={{
            fontSize: 'clamp(24px, 5.5vw, 38px)',
            fontWeight: 700,
            lineHeight: 1.6,
            color: '#fff',
            letterSpacing: '0.04em',
            marginBottom: 12,
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
          }}
        >
          空室写真を送るだけで、
          <br />
          <em style={{ color: C.gold, fontStyle: 'normal' }}>無料</em>で集客を始められます。
        </h1>

        <p
          style={{
            fontSize: 'clamp(13px, 3vw, 15px)',
            lineHeight: 2,
            color: 'rgba(255,255,255,0.75)',
            fontWeight: 300,
            maxWidth: 520,
            margin: '0 auto 20px',
            textShadow: '0 1px 6px rgba(0,0,0,0.4)',
          }}
        >
          AIがカラーバリエーションと家具配置イメージを生成。
          <br />
          入居者に好みのデザインを選んでもらい、
          <br />
          選ばれた内装をそのまま施工します。
        </p>

        {/* Before → 4 Color variations */}
        <div style={{ maxWidth: 480, margin: '0 auto 20px' }}>
          <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', marginBottom: 4 }}>
            <img
              src="/images/vs-before.jpeg"
              alt="退去直後の空室"
              style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', filter: 'brightness(0.85)' }}
              loading="lazy"
            />
            <span
              style={{
                position: 'absolute', top: 8, left: 8,
                fontSize: 10, fontWeight: 600, color: '#fff',
                background: 'rgba(55,65,81,0.85)', padding: '3px 8px',
                borderRadius: 4, letterSpacing: '.05em',
              }}
            >
              退去後そのまま…
            </span>
          </div>

          <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 600, color: C.gold, margin: '6px 0', letterSpacing: '.08em' }}>
            ▼ AIがカラーバリエーションを生成
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 5 }}>
            {colorVariations.map((img, i) => (
              <div key={i}>
                <div style={{ borderRadius: 6, overflow: 'hidden' }}>
                  <img src={img.src} alt={img.label} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }} loading="lazy" />
                </div>
                <p style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,.6)', textAlign: 'center', marginTop: 3 }}>
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          {[
            { icon: Camera, label: '写真送るだけ' },
            { icon: Gift, label: '完全無料' },
            { icon: ShieldCheck, label: '営業なし' },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 12, fontWeight: 600, letterSpacing: '0.06em',
                color: C.gold, backgroundColor: 'rgba(201,168,76,0.15)',
                border: `1px solid rgba(201,168,76,0.3)`,
                padding: '6px 14px', borderRadius: 4,
              }}
            >
              <Icon size={14} />
              {label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => pushEvent("line_cta_click_staging")}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            backgroundColor: C.lineGreen, color: '#fff',
            fontSize: 'clamp(14px, 3vw, 17px)', fontWeight: 700,
            padding: '14px 36px', borderRadius: 999, textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(6,199,85,0.35)',
            width: '100%', maxWidth: 360,
          }}
        >
          無料でステージング画像をもらう
        </a>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 10 }}>
          断ってOK・施工しなくても画像だけもらえます
        </p>
      </div>

      {/* Scroll arrow */}
      <div
        style={{
          marginTop: 24,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          animation: 'scrollBounce 2s ease-in-out infinite',
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.3)' }}>↓</span>
      </div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}
