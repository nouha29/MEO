import { useState } from 'react';
import { GOLD, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD, CREAM } from '../theme';
import { siteVideos } from '../images';
import PageHeader from '../components/PageHeader';
import { useLang } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';

function ProjectCarousel({ images, isMobile }: { images: string[]; isMobile: boolean }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  if (total === 0) return null;

  const prev = () => setIndex(i => (i - 1 + total) % total);
  const next = () => setIndex(i => (i + 1) % total);

  const arrowStyle = (side: 'left' | 'right'): React.CSSProperties => ({
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    [side]: 12,
    background: 'rgba(0,0,0,0.65)',
    border: `1px solid ${GOLD}55`,
    color: GOLD, fontSize: 18, fontWeight: 300,
    width: isMobile ? 34 : 42, height: isMobile ? 34 : 42,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', zIndex: 10,
    transition: 'background 0.2s, border-color 0.2s',
    userSelect: 'none',
  });

  return (
    <div style={{ position: 'relative', height: isMobile ? 260 : 460, overflow: 'hidden' }}>
      {/* Main photo */}
      <img
        key={index}
        src={images[index]}
        alt=""
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* Gold corner accent */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 56, height: 3, background: GOLD, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 3, height: 56, background: GOLD, pointerEvents: 'none' }} />

      {/* Bottom dark gradient */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(transparent, rgba(0,0,0,0.55))', pointerEvents: 'none' }} />

      {/* Arrows — only if more than 1 photo */}
      {total > 1 && (
        <>
          <button style={arrowStyle('left')} onClick={prev}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}22`; (e.currentTarget as HTMLButtonElement).style.borderColor = GOLD; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.65)'; (e.currentTarget as HTMLButtonElement).style.borderColor = `${GOLD}55`; }}>
            ‹
          </button>
          <button style={arrowStyle('right')} onClick={next}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}22`; (e.currentTarget as HTMLButtonElement).style.borderColor = GOLD; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.65)'; (e.currentTarget as HTMLButtonElement).style.borderColor = `${GOLD}55`; }}>
            ›
          </button>
        </>
      )}

      {/* Photo counter — bottom right */}
      {total > 1 && (
        <div style={{
          position: 'absolute', bottom: 14, right: 14,
          background: 'rgba(0,0,0,0.7)', border: `1px solid ${GOLD}44`,
          color: GOLD, fontSize: 10, letterSpacing: 1.5, padding: '4px 10px',
        }}>
          {index + 1} / {total}
        </div>
      )}

      {/* Dot indicators */}
      {total > 1 && (
        <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
          {images.map((_, j) => (
            <button key={j} onClick={() => setIndex(j)} style={{
              width: j === index ? 18 : 6, height: 6,
              background: j === index ? GOLD : `${GOLD}44`,
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'width 0.3s, background 0.3s',
            }} />
          ))}
        </div>
      )}
    </div>
  );
}

function VideoCard({ video, height }: { video: { src: string; label: string; sub: string }; height: number }) {
  return (
    <div style={{ position: 'relative', background: '#000', overflow: 'hidden', height }}>
      <video src={video.src} autoPlay loop muted playsInline preload="auto"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.78) 100%)', padding: '28px 20px 16px', pointerEvents: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 24, height: 1, background: GOLD }} />
          <div style={{ color: GOLD, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600 }}>{video.label}</div>
        </div>
        <div style={{ color: '#F5F0E8', fontSize: 12, letterSpacing: 0.5, marginTop: 4, opacity: 0.85 }}>{video.sub}</div>
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: 32, height: 2, background: GOLD, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: 2, height: 32, background: GOLD, pointerEvents: 'none' }} />
    </div>
  );
}

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

const completedProjects = [
  // 2025
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
  // 2024
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
  // 2023
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

const statItems = [
  { count: '50+', label: 'Projects Delivered' },
  { count: '5', label: 'Countries' },
  { count: '8', label: 'Project Types' },
  { count: '15+', label: 'Years Experience' },
  { count: '98%', label: 'Client Satisfaction' },
];


export default function Projects() {
  const { t } = useLang();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: CREAM }}>

      <PageHeader
        eyebrow={t('Portfolio', 'Portföy')}
        titleLight={t('Our', 'Projelerimiz')}
        titleBold={t('Projects', '')}
      />

      {/* Intro */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '40px 16px 32px' : '64px 32px 48px' }}>
        <p style={{ color: GREY, fontSize: isMobile ? 14 : 16, lineHeight: 1.9, maxWidth: 760 }}>
          {t(
            'Each project undertaken by MEO Development LLC is shaped by the specific needs of the space and the lifestyle of its occupants. From design and production to material selection and final installation, every stage is executed with uncompromising craftsmanship.',
            'MEO Development LLC\'nin üstlendiği her proje, mekanın ihtiyaçları ve sakinlerin yaşam biçimi doğrultusunda şekillendirilir. Tasarımdan üretime, malzeme seçiminden son uygulamaya kadar her aşama kusursuz bir ustalıkla hayata geçirilir.'
          )}
        </p>
      </div>

      {/* ── ONGOING PROJECTS ── */}
      <div id="ongoing" style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 32px' }}>

        {/* Section title — Ongoing */}
        <div style={{ paddingTop: isMobile ? 12 : 24, paddingBottom: isMobile ? 24 : 40, display: 'flex', alignItems: 'center', gap: 20 }}>
          <div>
            <div style={{ color: GOLD, fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>
              {t('Currently Active', 'Devam Eden')}
            </div>
            <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 26 : 36, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
              {t('Projects completed', 'Devam Eden Projeler')}
            </h2>
          </div>
          <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${GOLD}66, transparent)` }} />
        </div>

        {ongoingProjects.map((project, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div key={i} style={{
              paddingTop: isMobile ? 32 : 56,
              paddingBottom: isMobile ? 32 : 56,
              borderBottom: `1px solid ${DARK_BORDER}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: isMobile ? 20 : 28 }}>
                <span style={{ color: `${GOLD}33`, fontSize: isMobile ? 36 : 52, fontWeight: 700, lineHeight: 1, fontFamily: 'Georgia, serif' }}>{project.id}</span>
                <div style={{ flex: 1, height: 1, background: DARK_BORDER }} />
                <span style={{ color: GOLD, fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}>{project.category}</span>
                <span style={{ color: `${GOLD}55`, fontSize: 9, letterSpacing: 2 }}>· {project.year}</span>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : (imageLeft ? '3fr 2fr' : '2fr 3fr'),
                gap: isMobile ? 20 : 40, alignItems: 'start', marginBottom: isMobile ? 12 : 20,
              }}>
                <div style={{ order: isMobile ? 0 : (imageLeft ? 0 : 1) }}>
                  <ProjectCarousel
                    images={[project.hero, ...project.gallery]}
                    isMobile={isMobile}
                  />
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

      {/* ── COMPLETED PROJECTS ── */}
      <div id="completed" style={{ background: DARK_CARD, marginTop: isMobile ? 40 : 80 }}>

        {/* Section header — full width dark band */}
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
          <div key={i} style={{
            borderTop: `1px solid ${DARK_BORDER}`,
            padding: isMobile ? '32px 16px' : '56px 0',
          }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0' : '0 32px' }}>

              {/* Top meta row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: isMobile ? 20 : 32 }}>
                <span style={{ color: `${GOLD}25`, fontSize: isMobile ? 48 : 72, fontWeight: 800, lineHeight: 1, fontFamily: 'Georgia, serif', letterSpacing: -2 }}>{project.id}</span>
                <div style={{ flex: 1, height: 1, background: DARK_BORDER }} />
                <span style={{ background: GOLD, color: '#000', fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', padding: '4px 12px' }}>{project.year}</span>
                <span style={{ border: `1px solid ${DARK_BORDER}`, color: GREY, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', padding: '4px 12px' }}>{project.category}</span>
              </div>

              {/* Main layout: hero + info side by side */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 340px',
                gap: isMobile ? 20 : 40,
                alignItems: 'start',
                marginBottom: isMobile ? 16 : 28,
              }}>

                {/* Carousel — hero + gallery navigable avec flèches */}
                <ProjectCarousel
                  images={[project.hero, ...project.gallery]}
                  isMobile={isMobile}
                />

                {/* Info panel */}
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

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                    <span style={{ border: `1px solid ${GOLD}44`, color: GOLD, fontSize: 9, letterSpacing: 2, padding: '5px 14px', textTransform: 'uppercase' }}>{project.category}</span>
                    <span style={{ border: `1px solid ${DARK_BORDER}`, color: GREY, fontSize: 9, letterSpacing: 2, padding: '5px 14px', textTransform: 'uppercase' }}>MEO Development LLC</span>
                  </div>

                  {/* Photo count badge */}
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
      </div>

      {/* Video Showcase */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '48px 16px' : '80px 32px' }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>Project Reels</div>
          <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 26 : 38, fontWeight: 300, marginBottom: 10 }}>Behind the Work</h2>
          <div style={{ width: 60, height: 2, background: GOLD }} />
        </div>

        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {siteVideos.map((v, i) => <VideoCard key={i} video={v} height={220} />)}
          </div>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 4, marginBottom: 4 }}>
              <VideoCard video={siteVideos[0]} height={480} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <VideoCard video={siteVideos[1]} height={238} />
                <VideoCard video={siteVideos[2]} height={238} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
              <VideoCard video={siteVideos[3]} height={300} />
              <VideoCard video={siteVideos[4]} height={300} />
            </div>
          </>
        )}

        {/* Stats */}
        <div style={{ marginTop: isMobile ? 40 : 80, background: CHARCOAL, border: `1px solid ${DARK_BORDER}`, display: 'grid', gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)' }}>
          {statItems.map((s, i) => (
            <div key={i} style={{ padding: isMobile ? '20px 12px' : '28px 20px', textAlign: 'center', borderRight: i < statItems.length - 1 ? `1px solid ${DARK_BORDER}` : 'none' }}>
              <div style={{ color: GOLD, fontSize: isMobile ? 28 : 38, fontWeight: 300, lineHeight: 1 }}>{s.count}</div>
              <div style={{ color: GREY, fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
