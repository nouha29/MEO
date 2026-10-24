import { Link } from 'react-router-dom';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD, CREAM } from '../theme';
import PageHeader from '../components/PageHeader';
import { useLang } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';

/* ─── Styled logo components ─────────────────────────── */

function LogoMassMob({ size = 1 }: { size?: number }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{
        fontSize: 28 * size, fontWeight: 900, letterSpacing: -1 * size,
        color: OFF_WHITE, lineHeight: 1, fontFamily: 'Georgia, serif',
      }}>
        Mass<span style={{ color: GOLD }}>Mob</span>
      </div>
      <div style={{ width: '100%', height: 1.5, background: `linear-gradient(90deg, ${GOLD}, transparent)`, marginTop: 4 }} />
      <div style={{ color: GREY, fontSize: 8 * size, letterSpacing: 3 * size, textTransform: 'uppercase', marginTop: 5, fontWeight: 500 }}>
        Bespoke Furniture · Interior Design
      </div>
    </div>
  );
}


function LogoMobizu({ size = 1 }: { size?: number }) {
  const c = GOLD;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {/* Stylised "M" mark */}
      <div style={{
        width: 32 * size, height: 32 * size,
        border: `2px solid ${c}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 10 * size,
      }}>
        <span style={{ color: c, fontSize: 16 * size, fontWeight: 900, lineHeight: 1 }}>M</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
        <span style={{ fontSize: 22 * size, fontWeight: 900, letterSpacing: 1 * size, color: c, lineHeight: 1 }}>
          MOB<span style={{ fontStyle: 'italic' }}>i</span>ZU
        </span>
      </div>
      <div style={{ color: `${c}88`, fontSize: 7.5 * size, letterSpacing: 2.5 * size, textTransform: 'uppercase', marginTop: 5, fontWeight: 500 }}>
        Custom Furniture · Projects
      </div>
    </div>
  );
}

const LOGOS = [LogoMassMob, LogoMobizu];

/* ─── Data ─────────────────────────────────────────────── */

const featuredPartners = [
  {
    name: 'MassMob',
    tagline: 'Luxury Furniture & Bespoke Interior Design',
    location: 'Istanbul, Turkey · London, UK',
    description: 'MassMob is a premier luxury furniture manufacturer and interior design firm with over 70 years of craftsmanship heritage. Operating from showrooms in Istanbul and London, MassMob delivers bespoke furniture and full interior solutions for residential and hospitality projects worldwide. As a trusted MEO partner, MassMob provides exceptional custom-made furnishings for our most prestigious client projects.',
    url: 'https://massmob.com',
    category: 'Luxury Furniture & Interior Design',
    since: '2023',
    accent: GOLD,
    projects: ['Greenwich Residence', 'French Classical Manor', "Gentleman's Study"],
  },
  {
    name: 'MOBiZU Project',
    tagline: 'Custom Furniture Manufacturing & Project Solutions',
    location: 'Turkey',
    description: 'MOBiZU Project is a specialist custom furniture manufacturer delivering tailored solutions for high-end residential and commercial projects. With a strong focus on precision craftsmanship and project management excellence, MOBiZU Project supports MEO Development in executing complex interior fit-outs with exacting attention to detail, from concept through to final installation.',
    url: 'https://www.mobizu.com.tr/',
    category: 'Custom Furniture & Project Management',
    since: '2024',
    accent: GOLD,
    projects: ['Luxury Residences', 'Hotel Fit-Outs', 'Commercial Spaces'],
  },
];

const partnerTypes = [
  { title: 'Real Estate Developers', desc: 'Strategic partnerships with leading real estate development firms for joint ventures and co-development opportunities.' },
  { title: 'Architecture Firms', desc: 'Collaboration with world-class architectural practices to deliver integrated design and development solutions.' },
  { title: 'Interior Design Studios', desc: 'Partnerships with prestigious design studios to offer comprehensive interior solutions to our clients.' },
  { title: 'Investment Groups', desc: 'Working with private equity and real estate investment firms to identify and execute high-yield opportunities.' },
  { title: 'Luxury Brands', desc: 'Exclusive supply partnerships with leading luxury furniture and materials manufacturers globally.' },
  { title: 'Contractors & Builders', desc: 'A vetted network of specialist contractors ensuring the highest quality of workmanship on every project.' },
];

const benefits = [
  'Access to exclusive project pipeline',
  'Collaborative international opportunities',
  'Shared luxury brand positioning',
  'Joint marketing and global visibility',
];

/* ─── Component ─────────────────────────────────────────── */

export default function Partners() {
  const { t } = useLang();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: CREAM }}>

      <PageHeader
        eyebrow={t('Our Network', 'Ağımız')}
        titleLight={t('Strategic', 'Stratejik')}
        titleBold={t('Partners', 'Ortaklar')}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '48px 16px' : '80px 32px' }}>

        {/* ── INTRO ── */}
        <div style={{ marginBottom: isMobile ? 48 : 72 }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>
            {t('Collaboration', 'İş Birliği')}
          </div>
          <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 28 : 38, fontWeight: 300, marginBottom: 12 }}>
            {t('Built on Trust', 'Güven Üzerine İnşa Edildi')}
          </h2>
          <div style={{ width: 60, height: 2, background: GOLD, marginBottom: 20 }} />
          <p style={{ color: GREY, fontSize: isMobile ? 14 : 15, lineHeight: 1.9, maxWidth: 680 }}>
            {t(
              'Our partners form the foundation of our growth and long-term success. Through collaborations built on trust, transparency, and shared value creation, we deliver more comprehensive and high-quality solutions to our clients.',
              'Ortaklarımız, büyümemizin ve uzun vadeli başarımızın temelini oluşturur. Güven, şeffaflık ve ortak değer yaratma üzerine kurulu iş birlikleri sayesinde müşterilerimize daha kapsamlı ve yüksek kaliteli çözümler sunuyoruz.'
            )}
          </p>
        </div>

        {/* ── LOGO STRIP ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 1, background: DARK_BORDER,
          marginBottom: isMobile ? 48 : 72,
        }}>
          {featuredPartners.map((p, i) => {
            const LogoComp = LOGOS[i];
            return (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: DARK_CARD,
                  padding: isMobile ? '32px 24px' : '48px 40px',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'flex-start', justifyContent: 'space-between',
                  textDecoration: 'none', minHeight: isMobile ? 'auto' : 180,
                  transition: 'background 0.3s',
                  borderLeft: `3px solid ${p.accent}`,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = CHARCOAL)}
                onMouseLeave={e => (e.currentTarget.style.background = DARK_CARD)}
              >
                <LogoComp size={isMobile ? 0.85 : 1} />
                <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 16, height: 1, background: p.accent }} />
                  <span style={{ color: GREY, fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase' }}>
                    {t('Official Partner', 'Resmi Ortak')}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* ── FEATURED PARTNER CARDS ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: isMobile ? 28 : 40 }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}>
            {t('Our Partners', 'Ortaklarımız')}
          </div>
          <div style={{ flex: 1, height: 1, background: DARK_BORDER }} />
        </div>

        <div style={{ marginBottom: isMobile ? 48 : 80 }}>
          {featuredPartners.map((partner, i) => {
            const LogoComp = LOGOS[i];
            const isEven = i % 2 === 0;
            return (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : (isEven ? '5fr 7fr' : '7fr 5fr'),
                marginBottom: isMobile ? 2 : 3,
                border: `1px solid ${DARK_BORDER}`,
                background: DARK_CARD,
                overflow: 'hidden',
              }}>

                {/* Logo / identity panel */}
                <div style={{
                  order: isMobile ? 0 : (isEven ? 0 : 1),
                  background: `linear-gradient(135deg, ${CHARCOAL} 0%, #111 100%)`,
                  padding: isMobile ? '32px 24px' : '52px 44px',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRight: (!isMobile && isEven) ? `1px solid ${DARK_BORDER}` : 'none',
                  borderLeft: (!isMobile && !isEven) ? `1px solid ${DARK_BORDER}` : 'none',
                  borderBottom: isMobile ? `1px solid ${DARK_BORDER}` : 'none',
                  position: 'relative', overflow: 'hidden',
                  minHeight: isMobile ? 'auto' : 280,
                }}>
                  {/* Large faint number behind */}
                  <div style={{
                    position: 'absolute', bottom: -10, right: 16,
                    fontSize: 120, fontWeight: 900, color: `${partner.accent}08`,
                    lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
                    fontFamily: 'Georgia, serif',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div>
                    <div style={{ color: `${partner.accent}66`, fontSize: 9, letterSpacing: 4, fontWeight: 700, marginBottom: 24, textTransform: 'uppercase' }}>
                      Partner {String(i + 1).padStart(2, '0')}
                    </div>
                    <LogoComp size={isMobile ? 0.9 : 1.1} />
                  </div>

                  <div style={{ marginTop: 32 }}>
                    <div style={{ color: GREY, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>
                      📍 {partner.location}
                    </div>
                    <div style={{ color: GREY, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>
                      {t('Partner since', 'Ortak olduğumuz yıl')} {partner.since}
                    </div>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: partner.accent, color: BLACK,
                        padding: '9px 20px', fontSize: 10, fontWeight: 700,
                        letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none',
                      }}
                    >
                      {t('Visit Website', 'Web Sitesi')} →
                    </a>
                  </div>
                </div>

                {/* Description panel */}
                <div style={{
                  order: isMobile ? 1 : (isEven ? 1 : 0),
                  padding: isMobile ? '28px 24px' : '52px 48px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                }}>
                  <div style={{ color: partner.accent, fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 10 }}>
                    {partner.category}
                  </div>
                  <h3 style={{ color: OFF_WHITE, fontSize: isMobile ? 22 : 28, fontWeight: 700, margin: '0 0 6px', lineHeight: 1.2 }}>
                    {partner.name}
                  </h3>
                  <div style={{ color: GREY, fontSize: 12, letterSpacing: 0.3, marginBottom: 20, fontStyle: 'italic' }}>
                    {partner.tagline}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
                    <div style={{ width: 36, height: 2, background: partner.accent }} />
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: `${partner.accent}55`, border: `1px solid ${partner.accent}` }} />
                  </div>
                  <p style={{ color: GREY, fontSize: isMobile ? 13 : 14, lineHeight: 1.9, marginBottom: 28 }}>
                    {partner.description}
                  </p>
                  <div>
                    <div style={{ color: GREY, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
                      {t('Projects in collaboration', 'Ortak Projeler')}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {partner.projects.map((proj, j) => (
                        <span key={j} style={{
                          border: `1px solid ${partner.accent}44`,
                          color: partner.accent, fontSize: 10,
                          letterSpacing: 1, padding: '5px 14px',
                        }}>
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ── PARTNER TYPES GRID ── */}
        <div style={{ marginBottom: isMobile ? 40 : 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: isMobile ? 24 : 36 }}>
            <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}>
              {t('Who We Work With', 'Kimlerle Çalışıyoruz')}
            </div>
            <div style={{ flex: 1, height: 1, background: DARK_BORDER }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 1, background: DARK_BORDER }}>
            {partnerTypes.map((pt, i) => (
              <div key={i} style={{ background: DARK_CARD, padding: isMobile ? '24px 20px' : '36px 32px', borderLeft: `2px solid ${GOLD}22` }}>
                <div style={{
                  width: 32, height: 32, border: `1px solid ${GOLD}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16, color: GOLD, fontSize: 11, fontWeight: 700, letterSpacing: 1,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ color: OFF_WHITE, fontSize: 15, fontWeight: 600, marginBottom: 10, letterSpacing: 0.3 }}>
                  {pt.title}
                </h3>
                <p style={{ color: GREY, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', border: `1px solid ${DARK_BORDER}` }}>
          <div style={{ background: GOLD, padding: isMobile ? '36px 24px' : '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: BLACK, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 14 }}>
              {t('Become a Partner', 'Ortak Olun')}
            </div>
            <h2 style={{ color: BLACK, fontSize: isMobile ? 24 : 32, fontWeight: 700, margin: '0 0 14px', lineHeight: 1.2 }}>
              {t("Let's Build Something Extraordinary Together", 'Birlikte Olağanüstü Bir Şey İnşa Edelim')}
            </h2>
            <p style={{ color: `${BLACK}99`, fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              {t(
                'We are always open to new partnerships that align with our values of excellence, innovation, and integrity.',
                'Mükemmellik, yenilik ve dürüstlük değerlerimizle örtüşen yeni ortaklıklara her zaman açığız.'
              )}
            </p>
            <Link to="/contact" style={{
              background: BLACK, color: GOLD, padding: '14px 32px',
              fontSize: 11, fontWeight: 700, letterSpacing: 2,
              textTransform: 'uppercase', textDecoration: 'none',
              display: 'inline-block', alignSelf: 'flex-start',
            }}>
              {t('Get in Touch', 'İletişime Geç')}
            </Link>
          </div>
          <div style={{ background: CHARCOAL, padding: isMobile ? '32px 24px' : '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, color: OFF_WHITE, fontSize: 14 }}>
                <div style={{ width: 6, height: 6, background: GOLD, flexShrink: 0 }} />
                {b}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
