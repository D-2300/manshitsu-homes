import { C } from '../../tokens';

interface Props {
  en: string;
  ja?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}

export default function SectionLabel({ en, ja, align = 'center', dark = false }: Props) {
  const ta = align === 'center' ? 'center' : 'left';
  const labelColor = dark ? 'rgba(255,255,255,0.5)' : C.warmGray;
  return (
    <div style={{ textAlign: ta, marginBottom: 40 }}>
      <div
        style={{
          fontSize: 'clamp(11px, 2.5vw, 13px)',
          fontWeight: 300,
          letterSpacing: '0.2em',
          textTransform: 'uppercase' as const,
          color: labelColor,
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        {en}
      </div>
      {ja && (
        <div
          style={{
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: '0.05em',
            color: labelColor,
            marginTop: 4,
          }}
        >
          {ja}
        </div>
      )}
      <div
        style={{
          width: 32,
          height: 1,
          backgroundColor: C.gold,
          margin: align === 'center' ? '12px auto 0' : '12px 0 0',
        }}
      />
    </div>
  );
}
