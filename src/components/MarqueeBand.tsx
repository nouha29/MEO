import { BLACK, GOLD, GOLD_MUTED } from '../theme';

const items = [
  'Luxury Renovation',
  'Bespoke Design',
  'Property Development',
  'Commercial Projects',
  'Fine Interiors',
  'Investment Consultancy',
  'Hotel & Hospitality',
  'Mansion & Penthouse',
];

const SEPARATOR = '◆';

export default function MarqueeBand() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      style={{
        background: GOLD,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '10px 0',
        borderTop: `1px solid ${GOLD_MUTED}`,
        borderBottom: `1px solid ${GOLD_MUTED}`,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          gap: 0,
          animation: 'marquee 28s linear infinite',
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 24,
              color: BLACK,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
              paddingRight: 24,
            }}
          >
            {item}
            <span style={{ color: `${BLACK}66`, fontSize: 8 }}>{SEPARATOR}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
