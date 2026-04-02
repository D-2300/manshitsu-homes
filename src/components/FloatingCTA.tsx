import { C, LINE_URL, TEL } from '../tokens';

export default function FloatingCTA() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'rgba(68,41,64,0.95)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        padding: '10px 16px',
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 1,
          maxWidth: 240,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          backgroundColor: C.lineGreen,
          color: '#fff',
          borderRadius: 4,
          padding: '12px 12px',
          fontSize: 14,
          fontWeight: 700,
          textDecoration: 'none',
          letterSpacing: '0.03em',
          boxShadow: '0 2px 8px rgba(6,199,85,0.3)',
        }}
      >
        LINEで相談
      </a>
      <a
        href={`tel:${TEL}`}
        style={{
          flex: 1,
          maxWidth: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          backgroundColor: 'transparent',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.35)',
          borderRadius: 4,
          padding: '11px 12px',
          fontSize: 14,
          fontWeight: 500,
          textDecoration: 'none',
          letterSpacing: '0.02em',
        }}
      >
        📞 電話する
      </a>
    </div>
  );
}
