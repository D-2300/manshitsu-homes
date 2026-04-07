import { MessageCircle, Camera, FileCheck } from 'lucide-react';
import { M, C, LINE_URL } from '../tokens';
import ScrollFadeIn from './ui/ScrollFadeIn';
import { pushEvent } from '../utils/pushEvent';

const steps = [
  { icon: <MessageCircle size={20} color="#fff" />, title: 'LINEで友だち追加', time: '30秒' },
  { icon: <Camera size={20} color="#fff" />, title: '空室の写真を送る', time: '何枚でもOK' },
  { icon: <FileCheck size={20} color="#fff" />, title: '画像+提案書が届く', time: '最短翌日' },
];

const badges = ['🔒 断ってOK', '💰 完全無料', '🚫 営業電話なし', '📱 写真送るだけ'];

export default function FinalCTA() {
  return (
    <section
      data-section="final-cta"
      style={{
        backgroundColor: M.dark,
        padding: '56px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <ScrollFadeIn>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.28em',
              color: C.gold,
              fontWeight: 500,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Get Started
          </div>

          <h2
            style={{
              fontSize: 'clamp(20px, 4.5vw, 28px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.7,
              marginBottom: 8,
            }}
          >
            まずは、空室の写真を
            <br />
            <span style={{ color: C.gold }}>1枚</span>送ってみてください。
          </h2>

          <p
            style={{
              fontSize: 'clamp(13px, 2.3vw, 15px)',
              color: 'rgba(255,255,255,.4)',
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            ステージング画像＋改善提案書を、無料でお届けします。
          </p>
        </ScrollFadeIn>

        {/* 3 Steps */}
        <ScrollFadeIn delay={0.1}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 'clamp(8px, 2vw, 16px)', marginBottom: 24 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ flex: '0 1 140px', textAlign: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: M.main, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                  {s.icon}
                </div>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 4, lineHeight: 1.4 }}>{s.title}</p>
                <span style={{ fontSize: 11, fontWeight: 600, color: C.gold, background: C.goldPale, padding: '2px 8px', borderRadius: 100 }}>{s.time}</span>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* Trust badges */}
        <ScrollFadeIn delay={0.15}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            {badges.map((b) => (
              <span key={b} style={{ fontSize: 12, fontWeight: 600, color: '#555', background: '#fff', borderRadius: 999, padding: '4px 10px' }}>
                {b}
              </span>
            ))}
          </div>
        </ScrollFadeIn>

        {/* CTA Button */}
        <ScrollFadeIn delay={0.2}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => pushEvent("line_cta_click_staging")}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              backgroundColor: C.lineGreen,
              color: '#fff',
              fontWeight: 700,
              fontSize: 'clamp(15px, 3vw, 19px)',
              padding: '16px 36px',
              borderRadius: 999,
              textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(6,199,85,.4)',
              width: '100%',
              maxWidth: 400,
            }}
          >
            LINEでステージング画像をもらう
          </a>

          <p style={{ fontSize: 12, color: 'rgba(255,255,255,.2)', marginTop: 12, lineHeight: 1.7 }}>
            無料・営業なし・施工しなくてもOK
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
