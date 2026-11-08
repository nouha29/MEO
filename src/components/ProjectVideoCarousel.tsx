import { useState } from 'react';
import { GOLD } from '../theme';

export default function ProjectVideoCarousel({
  videos,
  isMobile,
}: {
  videos: string[];
  isMobile: boolean;
}) {
  const [index, setIndex] = useState(0);
  const total = videos.length;
  if (total === 0) return null;

  const prev = () => setIndex(current => (current - 1 + total) % total);
  const next = () => setIndex(current => (current + 1) % total);

  const arrowStyle = (side: 'left' | 'right'): React.CSSProperties => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [side]: 12,
    background: 'rgba(0,0,0,0.65)',
    border: `1px solid ${GOLD}55`,
    color: GOLD,
    fontSize: 18,
    fontWeight: 300,
    width: isMobile ? 34 : 42,
    height: isMobile ? 34 : 42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
    userSelect: 'none',
  });

  return (
    <div style={{ position: 'relative', height: isMobile ? 260 : 460, overflow: 'hidden', background: '#000' }}>
      <video
        key={videos[index]}
        src={videos[index]}
        autoPlay
        muted
        controls
        playsInline
        preload="none"
        aria-label={`Art Surfside Penthouse project video ${index + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
      />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 56, height: 3, background: GOLD, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 3, height: 56, background: GOLD, pointerEvents: 'none' }} />
      {total > 1 && (
        <>
          <button type="button" aria-label="Previous video" style={arrowStyle('left')} onClick={prev}>‹</button>
          <button type="button" aria-label="Next video" style={arrowStyle('right')} onClick={next}>›</button>
          <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.7)', border: `1px solid ${GOLD}44`, color: GOLD, fontSize: 10, letterSpacing: 1.5, padding: '4px 10px', pointerEvents: 'none' }}>
            {index + 1} / {total}
          </div>
          <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, maxWidth: 'calc(100% - 120px)', overflowX: 'auto', padding: 4 }}>
            {videos.map((video, dotIndex) => (
              <button
                key={video}
                type="button"
                aria-label={`Play project video ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                onClick={() => setIndex(dotIndex)}
                style={{
                  width: dotIndex === index ? 18 : 6,
                  height: 6,
                  background: dotIndex === index ? GOLD : `${GOLD}88`,
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
