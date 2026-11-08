import { GOLD, DARK_BORDER, OFF_WHITE, GREY, DARK_CARD, CREAM } from '../theme';
import PageHeader from '../components/PageHeader';
import ProjectCarousel from '../components/ProjectCarousel';
import ProjectVideoCarousel from '../components/ProjectVideoCarousel';
import { useLang } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';

const completedProjects = [
  {
    id: '01', year: '2025', category: 'Residence',
    title: 'Mansion Greenwich',
    sub: 'Greenwich, Connecticut — USA',
    description: 'An extraordinary classical manor drawing inspiration from 18th-century French architecture. Royal blue velvet sofas, twin crystal chandeliers and intricate boiserie panelling create timeless aristocratic grandeur.',
    hero: '/images/cp-mansion-1.jpg',
    gallery: ['/images/cp-mansion-2.jpg', '/images/cp-mansion-3.jpg', '/images/cp-mansion-4.jpg'],
  },
  {
    id: '02', year: '2025', category: 'Restaurant',
    title: 'Terra Brazil Restaurant',
    sub: 'United Kingdom',
    description: 'A vibrant Brazilian dining concept — warm rattan pendant lighting, tufted velvet banquettes and tropical greenery deliver a São Paulo atmosphere with British refinement.',
    hero: '/images/cp-terra-1.jpg',
    gallery: ['/images/cp-terra-2.jpg', '/images/cp-terra-3.jpg', '/images/cp-terra-4.jpg'],
  },
  {
    id: '03', year: '2024', category: 'Hospital',
    title: 'Estelit Hospital',
    sub: 'Istanbul, Türkiye',
    description: 'A premium healthcare interior redefining the patient experience. Soft tones, clean lines and carefully curated materials create a calming yet clinical space at the highest standards.',
    hero: '/images/cp-estelit-1.jpg',
    gallery: ['/images/cp-estelit-2.jpg', '/images/cp-estelit-3.jpg', '/images/cp-estelit-4.jpg'],
  },
  {
    id: '04', year: '2024', category: 'Restaurant',
    title: 'Metropol Restaurant',
    sub: 'Istanbul, Türkiye',
    description: 'A bold commercial restaurant fit-out in the heart of Istanbul, combining bespoke metalwork, polished stone countertops and precision-crafted reception elements for a lasting impression.',
    hero: '/images/cp-metropol-1.jpg',
    gallery: ['/images/cp-metropol-2.jpg', '/images/cp-metropol-3.jpg', '/images/cp-metropol-4.jpg'],
  },
  {
    id: '05', year: '2024', category: 'Hotel',
    title: 'Radisson Blu Istanbul',
    sub: 'Istanbul, Türkiye',
    description: 'A complete suite refurbishment for the Radisson Blu brand. Contemporary furnishings in warm neutrals, bespoke artwork and precision lighting exceed five-star international standards.',
    hero: '/images/cp-radblue-1.jpg',
    gallery: ['/images/cp-radblue-2.jpg', '/images/cp-radblue-3.jpg', '/images/cp-radblue-4.jpg'],
  },
  {
    id: '06', year: '2024', category: 'Hotel',
    title: 'WOW Hotel Istanbul',
    sub: 'Istanbul, Türkiye',
    description: 'A full interior fit-out for the WOW Hotel brand. Luxurious guest rooms with custom headboards and premium textiles deliver a contemporary luxury experience at the crossroads of Europe and Asia.',
    hero: '/images/cp-wow-1.png',
    gallery: ['/images/cp-wow-2.png', '/images/cp-wow-3.png', '/images/cp-wow-4.png', '/images/cp-wow-5.png'],
  },
  {
    id: '07', year: '2024', category: 'Hotel',
    title: 'Merit Hotel Kensington',
    sub: 'Kensington, London — United Kingdom',
    description: 'A refined boutique hotel in prestigious Kensington. Living green walls with gold accents, polished marble flooring and bespoke millwork deliver a five-star guest experience rooted in British elegance.',
    hero: '/images/cp-merit-1.jpg',
    gallery: ['/images/cp-merit-2.jpg', '/images/cp-merit-3.jpg', '/images/cp-merit-4.jpg', '/images/cp-merit-5.jpg', '/images/cp-merit-6.jpg'],
  },
  {
    id: '08', year: '2024', category: 'Hotel',
    title: 'Old Mill Hotel',
    sub: 'United Kingdom',
    description: 'A charming boutique hotel renovation blending heritage character with modern comfort. Bespoke headboards with warm LED lighting, rich timber joinery and classic wainscoting restore the property to its former glory.',
    hero: '/images/cp-oldmill-1.jpg',
    gallery: ['/images/cp-oldmill-2.jpg', '/images/cp-oldmill-3.jpg', '/images/cp-oldmill-4.jpg', '/images/cp-oldmill-5.jpg', '/images/cp-oldmill-6.jpg'],
  },
  {
    id: '09', year: '2023', category: 'Hotel',
    title: 'Radisson Hotel Jeddah',
    sub: 'Jeddah, Saudi Arabia',
    description: 'A suite fit-out for the Radisson brand in Jeddah, blending contemporary hospitality design with regional influences. Clean furnishings and a refined neutral palette create a sanctuary for international travellers.',
    hero: '/images/cp-jeddah-1.jpg',
    gallery: ['/images/cp-jeddah-2.jpg', '/images/cp-jeddah-3.jpg', '/images/cp-jeddah-4.jpg', '/images/cp-jeddah-5.jpg'],
  },
  {
    id: '10', year: '2023', category: 'Hotel',
    title: 'Nixon Hotel',
    sub: 'United Kingdom',
    description: 'An intimate boutique hotel blending classic British style with contemporary comfort. Bespoke lounge furniture, curated fabrics and layered warm lighting create a destination guests return to time and again.',
    hero: '/images/cp-nixon-1.jpg',
    gallery: ['/images/cp-nixon-2.jpg', '/images/cp-nixon-3.jpg', '/images/cp-nixon-4.jpg', '/images/cp-nixon-5.jpg'],
  },
  {
    id: '11', year: '2023', category: 'Restaurant',
    title: 'Domenico Restaurant',
    sub: 'Edinburgh, United Kingdom',
    description: 'A sophisticated Edinburgh restaurant interior featuring custom marble bar tops, antique-brass shelving and mirrored accents — an intimate Italian dining experience with enduring elegance.',
    hero: '/images/cp-domenico-1.jpg',
    gallery: ['/images/cp-domenico-2.jpg', '/images/cp-domenico-3.jpg', '/images/cp-domenico-4.jpg', '/images/cp-domenico-5.jpg'],
  },
];

const surfsideVideos = [
  'WhatsApp Video 2026-11-03 at 17.56.46 (1).mp4',
  'WhatsApp Video 2026-11-03 at 17.56.46.mp4',
  'WhatsApp Video 2026-11-03 at 17.56.47.mp4',
  'WhatsApp Video 2026-11-03 at 17.56.48 (1).mp4',
  'WhatsApp Video 2026-11-03 at 17.56.48.mp4',
  'WhatsApp Video 2026-11-03 at 17.56.58.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.05.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.18.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.25.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.35.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.36 (1).mp4',
  'WhatsApp Video 2026-11-03 at 17.57.36.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.37.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.41.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.42.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.43.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.44.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.46.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.47.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.48.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.49.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.50.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.51.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.53.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.54.mp4',
  'WhatsApp Video 2026-11-03 at 17.57.55 (1).mp4',
  'WhatsApp Video 2026-11-03 at 17.57.55.mp4',
].map(fileName => `/videos/meo%20videos/${encodeURIComponent(fileName)}`);

export default function ProjectsCompleted() {
  const { t } = useLang();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: CREAM }}>
      <PageHeader
        eyebrow={t('Portfolio', 'Portföy')}
        titleLight={t('Completed', 'Tamamlanan')}
        titleBold={t('Projects', 'Projeler')}
      />

      {/* Section header */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '40px 16px 32px' : '72px 32px 48px', display: 'flex', alignItems: 'center', gap: 20 }}>
        <div>
          <div style={{ color: GOLD, fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>
            {t('Delivered · 2023 – 2025', 'Tamamlandı · 2023 – 2025')}
          </div>
          <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 28 : 42, fontWeight: 700, margin: 0, lineHeight: 1.05 }}>
            {t('Completed Projects', 'Tamamlanan Projeler')}
          </h2>
        </div>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${GOLD}55, transparent)` }} />
        <div style={{ color: GREY, fontSize: 10, letterSpacing: 2, opacity: 0.5, whiteSpace: 'nowrap' }}>
          {completedProjects.length} {t('projects', 'proje')}
        </div>
      </div>

      {/* Projects list */}
      {completedProjects.map((project, i) => (
        <div key={i} style={{ borderTop: `1px solid ${DARK_BORDER}`, padding: isMobile ? '32px 16px' : '56px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0' : '0 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: isMobile ? 20 : 32 }}>
              <span style={{ color: `${GOLD}25`, fontSize: isMobile ? 48 : 72, fontWeight: 800, lineHeight: 1, fontFamily: 'Georgia, serif', letterSpacing: -2 }}>{project.id}</span>
              <div style={{ flex: 1, height: 1, background: DARK_BORDER }} />
              <span style={{ background: GOLD, color: '#000', fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', padding: '4px 12px' }}>{project.year}</span>
              <span style={{ border: `1px solid ${DARK_BORDER}`, color: GREY, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', padding: '4px 12px' }}>{project.category}</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 340px',
              gap: isMobile ? 20 : 40,
              alignItems: 'start',
            }}>
              <ProjectCarousel images={[project.hero, ...project.gallery]} isMobile={isMobile} />

              <div style={{ paddingTop: isMobile ? 0 : 8 }}>
                <h3 style={{ color: OFF_WHITE, fontSize: isMobile ? 22 : 26, fontWeight: 700, lineHeight: 1.2, margin: '0 0 8px' }}>
                  {project.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                  <div style={{ width: 3, height: 14, background: GOLD }} />
                  <span style={{ color: GREY, fontSize: 11, letterSpacing: 0.5 }}>{project.sub}</span>
                </div>
                <div style={{ width: 32, height: 1, background: `${GOLD}66`, marginBottom: 18 }} />
                <p style={{ color: GREY, fontSize: isMobile ? 13 : 13.5, lineHeight: 1.9, marginBottom: 28, opacity: 0.85 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                  <span style={{ border: `1px solid ${GOLD}44`, color: GOLD, fontSize: 9, letterSpacing: 2, padding: '5px 14px', textTransform: 'uppercase' }}>{project.category}</span>
                  <span style={{ border: `1px solid ${DARK_BORDER}`, color: GREY, fontSize: 9, letterSpacing: 2, padding: '5px 14px', textTransform: 'uppercase' }}>MEO Development LLC</span>
                </div>
                {project.gallery.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: 0.5 }}>
                    <div style={{ width: 16, height: 1, background: GREY }} />
                    <span style={{ color: GREY, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase' }}>
                      {project.gallery.length + 1} {t('photos', 'fotoğraf')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <section style={{ background: DARK_CARD, borderTop: `1px solid ${DARK_BORDER}`, padding: isMobile ? '40px 16px' : '72px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: isMobile ? 24 : 36 }}>
            <div style={{ color: GOLD, fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>
              {t('Project Films', 'Proje Videoları')}
            </div>
            <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 26 : 38, fontWeight: 700, margin: '0 0 12px', lineHeight: 1.1 }}>
              Art Surfside Penthouse Project
            </h2>
            <div style={{ width: 60, height: 2, background: GOLD, marginBottom: 14 }} />
            <p style={{ color: GREY, fontSize: 13, lineHeight: 1.7, maxWidth: 620 }}>
              {t('Explore video highlights from the Art Surfside penthouse project.', 'Art Surfside penthouse projesinden video görüntülerini keşfedin.')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '3fr 2fr',
            gap: isMobile ? 20 : 40,
            alignItems: 'start',
            paddingTop: isMobile ? 8 : 16,
          }}>
            <ProjectVideoCarousel videos={surfsideVideos} isMobile={isMobile} />
            <div style={{ paddingTop: isMobile ? 0 : 8 }}>
              <h3 style={{ color: OFF_WHITE, fontSize: isMobile ? 22 : 30, fontWeight: 700, lineHeight: 1.2, margin: '0 0 8px' }}>
                Art Surfside Penthouse Project
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <div style={{ width: 3, height: 14, background: GOLD }} />
                <span style={{ color: GREY, fontSize: 11, letterSpacing: 0.5 }}>Surfside, Florida</span>
              </div>
              <div style={{ width: 32, height: 1, background: `${GOLD}66`, marginBottom: 18 }} />
              <p style={{ color: GREY, fontSize: isMobile ? 13 : 14, lineHeight: 1.9, marginBottom: 24 }}>
                {t('Explore video highlights from the Art Surfside penthouse project.', 'Art Surfside penthouse projesinden video görüntülerini keşfedin.')}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                <span style={{ border: `1px solid ${GOLD}44`, color: GOLD, fontSize: 9, letterSpacing: 2, padding: '5px 14px', textTransform: 'uppercase' }}>Penthouse</span>
                <span style={{ border: `1px solid ${DARK_BORDER}`, color: GREY, fontSize: 9, letterSpacing: 2, padding: '5px 14px', textTransform: 'uppercase' }}>MEO Development LLC</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: 0.5 }}>
                <div style={{ width: 16, height: 1, background: GREY }} />
                <span style={{ color: GREY, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase' }}>
                  {surfsideVideos.length} {t('videos', 'videolar')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
