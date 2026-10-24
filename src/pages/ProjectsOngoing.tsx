import { GOLD, DARK_BORDER, OFF_WHITE, GREY, CREAM } from '../theme';
import PageHeader from '../components/PageHeader';
import ProjectCarousel from '../components/ProjectCarousel';
import { useLang } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';

const ongoingProjects = [
  {
    id: '01',
    title: 'Mansion Ottawa',
    sub: 'Grand Residence — Ottawa, Canada',
    category: 'Mansion',
    year: '2025',
    description: 'A prestigious mansion project currently under development in Ottawa, Canada. Blending timeless classical architecture with bespoke interior craftsmanship, every space is designed to reflect refined luxury and enduring elegance.',
    quote: '"Crafting spaces that stand the test of time."',
    hero: '/images/ip-ottawa-1.jpg',
    gallery: [
      '/images/ip-ottawa-2.jpg',
      '/images/ip-ottawa-3.jpg',
      '/images/ip-ottawa-4.jpg',
      '/images/ip-ottawa-5.jpg',
      '/images/ip-ottawa-6.jpg',
      '/images/ip-ottawa-7.jpg',
      '/images/ip-ottawa-8.jpg',
      '/images/ip-ottawa-9.jpg',
      '/images/ip-ottawa-10.jpg',
      '/images/ip-ottawa-11.jpg',
      '/images/ip-ottawa-12.jpg',
      '/images/ip-ottawa-13.jpg',
      '/images/ip-ottawa-14.jpg',
      '/images/ip-ottawa-15.jpg',
    ],
  },
];

export default function ProjectsOngoing() {
  const { t } = useLang();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: CREAM }}>
      <PageHeader
        eyebrow={t('Portfolio', 'Portföy')}
        titleLight={t('In Progress', 'Devam Eden')}
        titleBold={t('Projects', 'Projeler')}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 32px' }}>
        <div style={{ paddingTop: isMobile ? 32 : 56, paddingBottom: isMobile ? 24 : 40, display: 'flex', alignItems: 'center', gap: 20 }}>
          <div>
            <div style={{ color: GOLD, fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>
              {t('Currently Active', 'Devam Eden')}
            </div>
            <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 26 : 36, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
              {t('In Progress Projects', 'Devam Eden Projeler')}
            </h2>
          </div>
          <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${GOLD}66, transparent)` }} />
        </div>

        {ongoingProjects.map((project, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div key={i} style={{ paddingTop: isMobile ? 32 : 56, paddingBottom: isMobile ? 32 : 56, borderBottom: `1px solid ${DARK_BORDER}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: isMobile ? 20 : 28 }}>
                <span style={{ color: `${GOLD}33`, fontSize: isMobile ? 36 : 52, fontWeight: 700, lineHeight: 1, fontFamily: 'Georgia, serif' }}>{project.id}</span>
                <div style={{ flex: 1, height: 1, background: DARK_BORDER }} />
                <span style={{ color: GOLD, fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}>{project.category}</span>
                <span style={{ color: `${GOLD}55`, fontSize: 9, letterSpacing: 2 }}>· {project.year}</span>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : (imageLeft ? '3fr 2fr' : '2fr 3fr'),
                gap: isMobile ? 20 : 40, alignItems: 'start',
              }}>
                <div style={{ order: isMobile ? 0 : (imageLeft ? 0 : 1) }}>
                  <ProjectCarousel images={[project.hero, ...project.gallery]} isMobile={isMobile} />
                </div>
                <div style={{ order: isMobile ? 1 : (imageLeft ? 1 : 0), paddingTop: isMobile ? 0 : 8 }}>
                  <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 22 : 30, fontWeight: 700, lineHeight: 1.15, margin: '0 0 6px' }}>{project.title}</h2>
                  <div style={{ color: GREY, fontSize: 11, letterSpacing: 0.5, marginBottom: 20, opacity: 0.7 }}>{project.sub}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 40, height: 2, background: GOLD }} />
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: `${GOLD}55`, border: `1px solid ${GOLD}` }} />
                  </div>
                  <p style={{ color: GREY, fontSize: isMobile ? 13 : 14, lineHeight: 1.9, marginBottom: 24 }}>{project.description}</p>
                  <div style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: 16, marginBottom: 24 }}>
                    <p style={{ color: GOLD, fontSize: 13, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>{project.quote}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ border: `1px solid ${DARK_BORDER}`, color: GREY, fontSize: 9, letterSpacing: 2, padding: '4px 12px', textTransform: 'uppercase' }}>{project.category}</span>
                    <span style={{ border: `1px solid ${DARK_BORDER}`, color: GREY, fontSize: 9, letterSpacing: 2, padding: '4px 12px', textTransform: 'uppercase' }}>{project.year}</span>
                    <span style={{ border: `1px solid ${GOLD}44`, color: GOLD, fontSize: 9, letterSpacing: 2, padding: '4px 12px', textTransform: 'uppercase' }}>MEO Development</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
