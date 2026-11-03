import { Link } from 'react-router-dom';
import { GOLD, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL } from '../theme';
import { useResponsive } from '../hooks/useResponsive';

const footerLinks = {
  Services: [
    { label: 'Home Improvement', path: '/services' },
    { label: 'Design & Development', path: '/design' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'In Progress', path: '/projects/ongoing' },
    { label: 'Completed', path: '/projects/completed' },
    { label: 'Partners', path: '/partners' },
    { label: 'Contact', path: '/contact' },
  ],
  Markets: [
    { label: 'Residential', path: '/services' },
    { label: 'Commercial', path: '/design' },
    { label: 'Hotels & Hospitality', path: '/design' },
    { label: 'Restaurants', path: '/design' },
    { label: 'International', path: '/contact' },
  ],
};

export default function Footer() {
  const { isMobile, isTablet } = useResponsive();

  return (
    <footer style={{ background: CHARCOAL, borderTop: `1px solid ${DARK_BORDER}`, padding: isMobile ? '40px 16px 24px' : '60px 32px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : isTablet ? '1fr 1fr 1fr' : '2fr 1fr 1fr 1fr',
          gap: isMobile ? 32 : 48,
          marginBottom: 40,
        }}>
          {/* Brand */}
          <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
            <Link to="/" aria-label="MEO Development LLC home" style={{ display: 'inline-flex', textDecoration: 'none', marginBottom: 16 }}>
              <img
                src="/images/meo-development-logo.png"
                alt="MEO Development LLC"
                style={{ width: 190, height: 'auto', display: 'block' }}
              />
            </Link>
            <p style={{ color: GREY, fontSize: 13, lineHeight: 1.8, maxWidth: 280 }}>
              A leading provider of bespoke property development and home improvement solutions.
            </p>
            <div style={{ color: GOLD, fontSize: 14, marginTop: 16, fontWeight: 600 }}>+1 754 284 91 10</div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div style={{ color: GOLD, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>{category}</div>
              {links.map(link => (
                <Link key={link.label} to={link.path} style={{
                  display: 'block', color: GREY, fontSize: 12, marginBottom: 10,
                  letterSpacing: 0.5, textDecoration: 'none', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = OFF_WHITE)}
                  onMouseLeave={e => (e.currentTarget.style.color = GREY)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: `1px solid ${DARK_BORDER}`, paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ color: GREY, fontSize: 11 }}>© 2025 MEO Development LLC. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
