import { CheckCircle } from 'lucide-react';
import { M, C, LINE_URL } from '../tokens';
import SectionLabel from './ui/SectionLabel';
import ScrollFadeIn from './ui/ScrollFadeIn';

const benefits = [
  '初回1部屋特別価格',
  '施工後修正無料',
  '写真付き施工報告LINE共有',
];

export default function TrialOffer() {
  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${M.main} 0%, ${M.dark} 100%)`,
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <ScrollFadeIn>
          <SectionLabel en="Trial Offer" dark />
          <h2
            style={{
              fontSize: 'clamp(22px, 5.5vw, 30px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.4,
              marginBottom: 20,
            }}
          >
            まず1部屋、試してください。
          </h2>
          <p
            style={{
              fontSize: 'clamp(13px, 3.2vw, 15px)',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.85,
              maxWidth: 480,
              margin: '0 auto 32px',
            }}
          >
            知らない業者にいきなり全部任せるのは不安なはず。
            だから、初回は1部屋限定のお試し価格でご提供します。
            スピードと仕上がりを体感してから、続けるか決めてください。
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(4px)',
              borderRadius: 8,
              padding: 24,
              marginBottom: 32,
              maxWidth: 400,
              margin: '0 auto 32px',
            }}
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 500,
                  marginBottom: i < benefits.length - 1 ? 12 : 0,
                }}
              >
                <CheckCircle size={20} color={C.gold} style={{ flexShrink: 0 }} />
                {b}
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.2}>
          <a
            href={LINE_URL}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: C.lineGreen,
              color: '#fff',
              fontWeight: 700,
              fontSize: 15,
              padding: '14px 40px',
              borderRadius: 4,
              textDecoration: 'none',
              transition: 'filter 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
          >
            LINEで相談する
          </a>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
