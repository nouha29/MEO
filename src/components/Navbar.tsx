import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD } from '../theme';
import { useLang } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';

const navLinks = [
  { path: '/',          en: 'Home',        tr: 'Ana Sayfa' },
  { path: '/about',     en: 'About',       tr: 'Hakkımızda' },
  { path: '/services',  en: 'Services',    tr: 'Hizmetler' },
  { path: '/design',    en: 'Design & Dev',tr: 'Tasarım' },
  { path: '/partners',  en: 'Partners',    tr: 'Ortaklar' },
  { path: '/contact',   en: 'Contact',     tr: 'İletişim' },
];

const projectsDropdown = [
  { path: '/projects/ongoing',   en: 'In Progress',   tr: 'Devam Eden' },
  { path: '/projects/completed', en: 'Completed',     tr: 'Tamamlanan' },
];

const FlagButtons = ({ lang, setLang }: { lang: string; setLang: (l: 'en' | 'tr') => void }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
    {([{ code: 'en', flag: '🇺🇸', label: 'EN' }, { code: 'tr', flag: '🇹🇷', label: 'TR' }] as const).map(({ code, flag, label }) => (
      <button
        key={code}
        onClick={() => setLang(code)}
        style={{
          display: 'flex', alignItems: 'center', gap: 4,
          background: lang === code ? `${GOLD}18` : 'transparent',
          border: `1px solid ${lang === code ? GOLD : DARK_BORDER}`,
          padding: '4px 8px', borderRadius: 2, cursor: 'pointer', outline: 'none',
        }}
      >
        <span style={{ fontSize: 15, lineHeight: 1 }}>{flag}</span>
        <span style={{ color: lang === code ? GOLD : GREY, fontSize: 9, fontWeight: 700, letterSpacing: 1.5 }}>{label}</span>
      </button>
    ))}
  </div>
);

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { isMobile } = useResponsive();
  const isProjectsActive = location.pathname === '/projects';

  return (
    <nav style={{ background: CHARCOAL, borderBottom: `1px solid ${DARK_BORDER}`, position: 'sticky', top: 0, zIndex: 1000 }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64,
      }}>

        {/* Logo */}
        <Link to="/" aria-label="MEO Development LLC home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img
            src="/images/meo-development-logo.png"
            alt="MEO Development LLC"
            style={{ width: isMobile ? 92 : 124, height: 'auto', display: 'block' }}
          />
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {/* Links before Projects */}
            {navLinks.slice(0, 4).map(link => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} style={{
                  color: active ? GOLD : GREY, fontSize: 11, letterSpacing: 1.5,
                  textTransform: 'uppercase', padding: '8px 12px',
                  borderBottom: active ? `2px solid ${GOLD}` : '2px solid transparent',
                  fontWeight: active ? 600 : 400, transition: 'color 0.2s', textDecoration: 'none',
                }}>
                  {lang === 'tr' ? link.tr : link.en}
                </Link>
              );
            })}

            {/* Projects dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <button style={{
                background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
                color: isProjectsActive ? GOLD : GREY, fontSize: 11, letterSpacing: 1.5,
                textTransform: 'uppercase', padding: '8px 12px',
                borderBottom: isProjectsActive ? `2px solid ${GOLD}` : '2px solid transparent',
                fontWeight: isProjectsActive ? 600 : 400,
              }}>
                {t('Projects', 'Projeler')}
                <span style={{ fontSize: 8, marginTop: 1, color: projectsOpen ? GOLD : GREY }}>▼</span>
              </button>

              {/* Dropdown menu */}
              {projectsOpen && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0,
                  background: DARK_CARD, border: `1px solid ${DARK_BORDER}`,
                  minWidth: 180, zIndex: 2000,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                }}>
                  {projectsDropdown.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setProjectsOpen(false)}
                      style={{
                        display: 'block', color: GREY, fontSize: 11, letterSpacing: 1.5,
                        textTransform: 'uppercase', padding: '14px 18px',
                        borderBottom: `1px solid ${DARK_BORDER}`, textDecoration: 'none',
                        transition: 'color 0.2s, background 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.background = `${GOLD}11`; }}
                      onMouseLeave={e => { e.currentTarget.style.color = GREY; e.currentTarget.style.background = 'transparent'; }}
                    >
                      {lang === 'tr' ? item.tr : item.en}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Links after Projects */}
            {navLinks.slice(4).map(link => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} style={{
                  color: active ? GOLD : GREY, fontSize: 11, letterSpacing: 1.5,
                  textTransform: 'uppercase', padding: '8px 12px',
                  borderBottom: active ? `2px solid ${GOLD}` : '2px solid transparent',
                  fontWeight: active ? 600 : 400, transition: 'color 0.2s', textDecoration: 'none',
                }}>
                  {lang === 'tr' ? link.tr : link.en}
                </Link>
              );
            })}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {!isMobile && (
            <>
              <FlagButtons lang={lang} setLang={setLang} />
              <Link to="/contact" style={{
                background: GOLD, color: BLACK, padding: '10px 20px',
                fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none',
              }}>
                {t('Get in Touch', 'İletişime Geç')}
              </Link>
            </>
          )}

          {/* Mobile: flags only + hamburger */}
          {isMobile && (
            <>
              <FlagButtons lang={lang} setLang={setLang} />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ background: 'none', border: `1px solid ${DARK_BORDER}`, padding: '8px 10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5 }}
              >
                <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? GOLD : OFF_WHITE, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
                <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? GOLD : OFF_WHITE, transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
                <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? GOLD : OFF_WHITE, transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && isMobile && (
        <div style={{ background: CHARCOAL, borderTop: `1px solid ${DARK_BORDER}`, padding: '16px' }}>
          {navLinks.slice(0, 4).map(link => (
            <Link key={link.path} to={link.path} onClick={() => setMenuOpen(false)} style={{
              display: 'block', color: location.pathname === link.path ? GOLD : GREY,
              fontSize: 14, letterSpacing: 1.5, textTransform: 'uppercase',
              padding: '14px 0', borderBottom: `1px solid ${DARK_BORDER}`, textDecoration: 'none',
            }}>
              {lang === 'tr' ? link.tr : link.en}
            </Link>
          ))}

          {/* Projects accordion in mobile */}
          <div>
            <button
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              style={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'none', border: 'none', borderBottom: `1px solid ${DARK_BORDER}`,
                color: isProjectsActive ? GOLD : GREY, fontSize: 14, letterSpacing: 1.5,
                textTransform: 'uppercase', padding: '14px 0', cursor: 'pointer',
              }}
            >
              {t('Projects', 'Projeler')}
              <span style={{ fontSize: 10, color: mobileProjectsOpen ? GOLD : GREY }}>{mobileProjectsOpen ? '▲' : '▼'}</span>
            </button>
            {mobileProjectsOpen && (
              <div style={{ background: DARK_CARD, borderBottom: `1px solid ${DARK_BORDER}` }}>
                {projectsDropdown.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => { setMenuOpen(false); setMobileProjectsOpen(false); }}
                    style={{
                      display: 'block', color: GREY, fontSize: 12, letterSpacing: 1.5,
                      textTransform: 'uppercase', padding: '12px 20px',
                      borderBottom: `1px solid ${DARK_BORDER}`, textDecoration: 'none',
                    }}
                  >
                    — {lang === 'tr' ? item.tr : item.en}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(4).map(link => (
            <Link key={link.path} to={link.path} onClick={() => setMenuOpen(false)} style={{
              display: 'block', color: location.pathname === link.path ? GOLD : GREY,
              fontSize: 14, letterSpacing: 1.5, textTransform: 'uppercase',
              padding: '14px 0', borderBottom: `1px solid ${DARK_BORDER}`, textDecoration: 'none',
            }}>
              {lang === 'tr' ? link.tr : link.en}
            </Link>
          ))}

          {/* Language switcher inside mobile menu */}
          <div style={{ display: 'flex', gap: 10, marginTop: 20, marginBottom: 4 }}>
            {([{ code: 'en', flag: '🇺🇸', label: 'English' }, { code: 'tr', flag: '🇹🇷', label: 'Türkçe' }] as const).map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => { setLang(code); setMenuOpen(false); }}
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: lang === code ? `${GOLD}22` : 'transparent',
                  border: `1px solid ${lang === code ? GOLD : DARK_BORDER}`,
                  padding: '12px', cursor: 'pointer', outline: 'none',
                }}
              >
                <span style={{ fontSize: 20 }}>{flag}</span>
                <span style={{ color: lang === code ? GOLD : GREY, fontSize: 11, fontWeight: 700, letterSpacing: 1.5 }}>{label}</span>
              </button>
            ))}
          </div>

          <Link to="/contact" onClick={() => setMenuOpen(false)} style={{
            display: 'block', textAlign: 'center', background: GOLD, color: BLACK,
            padding: '14px', fontSize: 11, fontWeight: 700, letterSpacing: 2,
            textTransform: 'uppercase', textDecoration: 'none', marginTop: 12,
          }}>
            {t('Get in Touch', 'İletişime Geç')}
          </Link>
        </div>
      )}
    </nav>
  );
}
