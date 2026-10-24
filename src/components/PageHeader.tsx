import { GOLD, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL } from '../theme';
import { useResponsive } from '../hooks/useResponsive';

interface PageHeaderProps {
  eyebrow: string;
  titleLight: string;
  titleBold: string;
  watermark?: string;
  boldFirst?: boolean;
}

export default function PageHeader({ eyebrow, titleLight, titleBold, boldFirst = false }: PageHeaderProps) {
  const { isMobile } = useResponsive();

  const watermarkLetter = (titleBold || titleLight).charAt(0).toUpperCase();

  return (
    <section style={{
      background: CHARCOAL,
      borderBottom: `1px solid ${DARK_BORDER}`,
      padding: isMobile ? '32px 16px 28px' : '44px 32px 36px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Gold left accent bar — thick */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: 5, height: '100%',
        background: GOLD,
      }} />

      {/* Huge faint watermark letter */}
      <div style={{
        position: 'absolute',
        right: isMobile ? -10 : 40,
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: isMobile ? 120 : 180,
        fontWeight: 900,
        color: `${GOLD}07`,
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        fontFamily: 'Georgia, serif',
        letterSpacing: -8,
      }}>
        {watermarkLetter}
      </div>

      {/* Diagonal gold stripe (decorative) */}
      <div style={{
        position: 'absolute',
        top: 0, right: isMobile ? 60 : 180,
        width: 1, height: '100%',
        background: `linear-gradient(180deg, transparent, ${GOLD}22, transparent)`,
        transform: 'skewX(-20deg)',
      }} />
      <div style={{
        position: 'absolute',
        top: 0, right: isMobile ? 80 : 210,
        width: 1, height: '100%',
        background: `linear-gradient(180deg, transparent, ${GOLD}10, transparent)`,
        transform: 'skewX(-20deg)',
      }} />

      {/* Content — horizontal layout on desktop */}
      <div style={{
        maxWidth: 1280, margin: '0 auto', position: 'relative',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? 10 : 32,
        paddingLeft: 20,
      }}>

        {/* Eyebrow badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: `${GOLD}14`,
          border: `1px solid ${GOLD}33`,
          padding: '5px 14px',
          flexShrink: 0,
        }}>
          <div style={{ width: 4, height: 4, background: GOLD, borderRadius: '50%' }} />
          <span style={{ color: GOLD, fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 700 }}>
            {eyebrow}
          </span>
        </div>

        {/* Separator line (desktop only) */}
        {!isMobile && (
          <div style={{ width: 1, height: 36, background: DARK_BORDER, flexShrink: 0 }} />
        )}

        {/* Title */}
        <h1 style={{
          margin: 0,
          fontSize: isMobile ? 'clamp(26px, 7vw, 36px)' : 'clamp(28px, 3.5vw, 46px)',
          fontWeight: 200,
          lineHeight: 1.15,
          color: OFF_WHITE,
          letterSpacing: -0.5,
        }}>
          {boldFirst ? (
            <>
              <span style={{ color: GOLD, fontWeight: 800 }}>{titleBold}</span>
              {titleLight ? <span style={{ color: GREY }}> {titleLight}</span> : null}
            </>
          ) : (
            <>
              {titleLight ? <span>{titleLight} </span> : null}
              <span style={{ color: GOLD, fontWeight: 800 }}>{titleBold}</span>
            </>
          )}
        </h1>

        {/* Desktop right accent */}
        {!isMobile && (
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <div style={{ width: 24, height: 1, background: `${GOLD}44` }} />
            <div style={{ width: 5, height: 5, background: GOLD, transform: 'rotate(45deg)' }} />
            <div style={{ width: 40, height: 1, background: `${GOLD}22` }} />
          </div>
        )}
      </div>

      {/* Bottom gold line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 5, right: 0,
        height: 1, background: `linear-gradient(90deg, ${GOLD}66, transparent 60%)`,
      }} />
    </section>
  );
}
