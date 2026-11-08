import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD, GOLD_MUTED, CREAM } from '../theme';
import { siteImages } from '../images';
import { useResponsive } from '../hooks/useResponsive';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '12', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const services = [
  {
    number: '01',
    title: 'Home Improvement & Renovation',
    description: 'High-quality renovation services transforming properties into aesthetically refined and highly functional living spaces.',
    path: '/services',
    image: siteImages.renovation,
  },
  {
    number: '02',
    title: 'Design & Development',
    description: 'Custom-built luxury furniture and bespoke design solutions for commercial, hospitality, and residential projects.',
    path: '/design',
    image: siteImages.bespokeDesign,
  },
];

const recentProjects = [
  { type: 'Merit Kensington', year: '2025', category: 'Mansion', image: siteImages.meritKensington },
  { type: 'Sinpaş Palas', year: '2025', category: 'Penthouse', image: siteImages.penthouse },
  { type: 'Merit Hotel', year: '2025', category: 'Hotel', image: siteImages.hotel },
  { type: 'Merit Restaurant', year: '2025', category: 'Restaurant', image: siteImages.restaurant },
];

const heroSlides = [
  { image: siteImages.heroVilla, label: 'Luxury Property Development' },
  ...recentProjects.map(project => ({ image: project.image, label: project.type })),
];

export default function Home() {
  const { isMobile } = useResponsive();
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionPad = isMobile ? '48px 16px' : '80px 32px';
  const showPreviousSlide = () => setActiveSlide(index => (index - 1 + heroSlides.length) % heroSlides.length);
  const showNextSlide = () => setActiveSlide(index => (index + 1) % heroSlides.length);

  return (
    <div style={{ background: CREAM }}>

      {/* Hero */}
      <section style={{
        minHeight: isMobile ? 500 : 620,
        background: CHARCOAL,
        display: 'flex', alignItems: 'center',
        borderBottom: `1px solid ${DARK_BORDER}`,
        position: 'relative', overflow: 'hidden',
      }}>
        <img
          key={heroSlides[activeSlide].image}
          src={heroSlides[activeSlide].image}
          alt={heroSlides[activeSlide].label}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', animation: 'hero-photo-fade 0.6s ease both' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          pointerEvents: 'none',
          background: isMobile
            ? 'linear-gradient(180deg, rgba(250,249,245,0.5), rgba(250,249,245,0.68))'
            : 'linear-gradient(90deg, rgba(250,249,245,0.62) 0%, rgba(250,249,245,0.38) 48%, rgba(250,249,245,0.04) 100%)',
        }} />
        {!isMobile && <>
          <div style={{ position: 'absolute', right: 80, top: 0, bottom: 0, width: 1, background: DARK_BORDER }} />
          <div style={{ position: 'absolute', top: 40, left: 0, right: 0, height: 1, background: DARK_BORDER }} />
          <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0, height: 1, background: DARK_BORDER }} />
        </>}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '60px 16px 100px' : '80px 88px', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ color: GOLD, fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 20, fontWeight: 600 }}>
            Luxury Property Development
          </div>
          <h1 style={{ color: OFF_WHITE, fontSize: isMobile ? 38 : 64, fontWeight: 200, margin: 0, lineHeight: 1.05, letterSpacing: -1 }}>
            Innovative
          </h1>
          <h1 style={{ color: GOLD, fontSize: isMobile ? 38 : 64, fontWeight: 700, margin: '0 0 24px', lineHeight: 1.05, letterSpacing: -1 }}>
            Property Solutions.
          </h1>
          <p style={{ color: GREY, fontSize: isMobile ? 14 : 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 36 }}>
            We bring thoughtful renovation, design, and development together to create exceptional spaces for living and business.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/projects" style={{ background: GOLD, color: BLACK, padding: isMobile ? '14px 28px' : '16px 40px', fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', textDecoration: 'none' }}>
              View Projects
            </Link>
            <Link to="/services" style={{ background: 'none', color: OFF_WHITE, border: `1px solid ${DARK_BORDER}`, padding: isMobile ? '14px 28px' : '16px 40px', fontSize: 11, fontWeight: 400, letterSpacing: 2.5, textTransform: 'uppercase', textDecoration: 'none' }}>
              Our Services
            </Link>
          </div>
        </div>
        <button
          type="button"
          aria-label="Previous featured photo"
          onClick={showPreviousSlide}
          style={{ position: 'absolute', zIndex: 2, top: '50%', left: 28, transform: 'translateY(-50%)', width: 44, height: 44, border: `1px solid ${GOLD}`, background: 'rgba(250,249,245,0.82)', color: BLACK, fontSize: 28, cursor: 'pointer', display: isMobile ? 'none' : 'block' }}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next featured photo"
          onClick={showNextSlide}
          style={{ position: 'absolute', zIndex: 2, top: '50%', right: 28, transform: 'translateY(-50%)', width: 44, height: 44, border: `1px solid ${GOLD}`, background: 'rgba(250,249,245,0.82)', color: BLACK, fontSize: 28, cursor: 'pointer', display: isMobile ? 'none' : 'block' }}
        >
          ›
        </button>
        <div style={{ position: 'absolute', zIndex: 2, bottom: isMobile ? 20 : 30, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 18 }}>
          {heroSlides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Show photo ${index + 1}: ${slide.label}`}
              aria-current={index === activeSlide ? 'true' : undefined}
              onClick={() => setActiveSlide(index)}
              style={{ border: 0, borderBottom: `2px solid ${index === activeSlide ? GOLD : `${OFF_WHITE}66`}`, background: 'none', color: index === activeSlide ? OFF_WHITE : `${OFF_WHITE}99`, padding: '6px 0', fontSize: isMobile ? 10 : 12, letterSpacing: 1, cursor: 'pointer', minWidth: isMobile ? 22 : 28 }}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
        <div aria-live="polite" style={{ position: 'absolute', zIndex: 2, right: isMobile ? 16 : 36, bottom: isMobile ? 56 : 34, color: OFF_WHITE, fontSize: 10, letterSpacing: 2 }}>
          {heroSlides[activeSlide].label}
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: CHARCOAL, borderBottom: `1px solid ${DARK_BORDER}`, borderTop: `1px solid ${GOLD}33` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: isMobile ? '24px 16px' : '32px 24px', textAlign: 'center', borderLeft: `1px solid ${DARK_BORDER}`, borderBottom: isMobile && i < 2 ? `1px solid ${DARK_BORDER}` : 'none' }}>
              <div style={{ color: GOLD, fontSize: isMobile ? 36 : 44, fontWeight: 300, lineHeight: 1, letterSpacing: -1 }}>{s.value}</div>
              <div style={{ color: GREY, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: sectionPad }}>
        <div style={{ marginBottom: 36, textAlign: 'center' }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>What We Do</div>
          <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 28 : 38, fontWeight: 300, letterSpacing: 0.5, marginBottom: 12 }}>Bespoke Services</h2>
          <div style={{ width: 60, height: 2, background: GOLD, margin: '0 auto 14px' }} />
          <p style={{ color: GREY, fontSize: 14, lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
            MEO Development LLC offers a comprehensive suite of luxury property and design services tailored to the most discerning clients.
          </p>
        </div>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))', gap: 1, background: DARK_BORDER }}>
          {services.map(svc => (
            <Link key={svc.number} to={svc.path} style={{ background: DARK_CARD, padding: 0, textDecoration: 'none', display: 'block', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#E7E5DA')}
              onMouseLeave={e => (e.currentTarget.style.background = DARK_CARD)}
            >
              <div style={{ height: 160, position: 'relative', overflow: 'hidden' }}>
                <img src={svc.image} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.62) saturate(0.9)' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 20%, ${DARK_CARD} 100%)`, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', left: 20, bottom: 14, color: GOLD_MUTED, fontSize: 42, fontWeight: 700, lineHeight: 1, fontFamily: 'Georgia, serif' }}>{svc.number}</div>
              </div>
              <div style={{ padding: isMobile ? '20px 20px 28px' : '28px 32px 36px' }}>
                <div style={{ width: 32, height: 2, background: GOLD, marginBottom: 16 }} />
                <h3 style={{ color: OFF_WHITE, fontSize: 16, fontWeight: 600, marginBottom: 10, lineHeight: 1.3 }}>{svc.title}</h3>
                <p style={{ color: GREY, fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{svc.description}</p>
                <div style={{ color: GOLD, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>Learn More →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Gold CTA banner */}
      <section style={{ background: GOLD, padding: isMobile ? '32px 16px' : '44px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row' }}>
          <div>
            <div style={{ color: BLACK, fontSize: isMobile ? 22 : 28, fontWeight: 700, letterSpacing: -0.5 }}>Ready to Elevate Your Property?</div>
            <div style={{ color: `${BLACK}99`, fontSize: 14, marginTop: 6 }}>Catering to both local and international clients worldwide.</div>
          </div>
          <Link to="/contact" style={{ background: BLACK, color: GOLD, padding: '14px 32px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none' }}>
            Contact Us
          </Link>
        </div>
      </section>

      {/* Recent Projects */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: sectionPad }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>Portfolio</div>
            <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 28 : 38, fontWeight: 300, marginBottom: 10 }}>Recent Projects</h2>
            <div style={{ width: 60, height: 2, background: GOLD }} />
          </div>
          <Link to="/projects" style={{ background: 'none', color: GOLD, border: `1px solid ${GOLD}`, padding: '12px 24px', fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none' }}>
            View All
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 10 : 16 }}>
          {recentProjects.map((p, i) => (
            <div key={i} style={{ background: DARK_CARD, border: `1px solid ${DARK_BORDER}`, overflow: 'hidden' }}>
              <div style={{ height: isMobile ? 160 : 220, background: CHARCOAL, position: 'relative' }}>
                <img src={p.image} alt={p.type} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.72) saturate(0.9)' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 45%, ${DARK_CARD}B8 100%)`, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: 10, right: 10, background: GOLD, color: BLACK, fontSize: 9, fontWeight: 700, padding: '3px 7px', letterSpacing: 1.5 }}>{p.year}</div>
              </div>
              <div style={{ padding: '12px 14px' }}>
                <div style={{ color: GOLD, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4 }}>{p.category}</div>
                <div style={{ color: OFF_WHITE, fontSize: isMobile ? 13 : 15, fontWeight: 600 }}>{p.type}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
