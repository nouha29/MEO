import { GOLD, DARK_BORDER, OFF_WHITE, GREY, DARK_CARD, CREAM } from '../theme';
import { siteImages } from '../images';
import PageHeader from '../components/PageHeader';
import { useLang } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';

const values = [
  { title: 'Excellence', desc: 'We hold ourselves to the highest standards in every project, from concept through delivery.' },
  { title: 'Innovation', desc: 'Continuously integrating new techniques and materials to deliver solutions that are ahead of their time.' },
  { title: 'Sustainability', desc: 'Building with respect for the environment, using sustainable practices and responsible sourcing.' },
  { title: 'Integrity', desc: 'Every client relationship is built on transparency, honesty, and respect for their vision.' },
];

export default function About() {
  const { t } = useLang();
  const { isMobile } = useResponsive();
  const sectionPad = isMobile ? '48px 16px' : '80px 32px';
  return (
    <div style={{ background: CREAM }}>

      <PageHeader eyebrow={t('Our Story','Hikayemiz')} titleLight={t('About','Hakkında')} titleBold="MEO Development" watermark="ABOUT" />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: sectionPad }}>

        {/* Main content */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 80, marginBottom: isMobile ? 48 : 80 }}>
          <div>
            <div style={{ width: 60, height: 2, background: GOLD, marginBottom: 24 }} />
            <p style={{ color: OFF_WHITE, fontSize: 20, lineHeight: 1.6, fontWeight: 300, marginBottom: 24 }}>
              MEO Development LLC is a leading provider of bespoke property development and home improvement solutions.
            </p>
            <p style={{ color: GREY, fontSize: 14, lineHeight: 1.9, marginBottom: 16 }}>
              Recognized for our commitment to excellence, innovation, and sustainability, we offer a diverse range
              of services including property investment consultancy, custom-built home fixtures, and comprehensive
              interior and exterior renovations.
            </p>
            <p style={{ color: GREY, fontSize: 14, lineHeight: 1.9 }}>
              Catering to both local and international clients, MEO Development LLC delivers tailored solutions
              designed to enhance property value, improve functionality, and create visually stunning spaces.
            </p>
            <p style={{ color: GREY, fontSize: 14, lineHeight: 1.9, marginTop: 16 }}>
              We provide a wide range of high-end luxury furniture and bespoke design solutions, spanning from
              commercial projects to hotels and restaurants, as well as luxury mansions, penthouses, and
              high-standard residences.
            </p>
          </div>

          <div style={{ background: DARK_CARD, border: `1px solid ${DARK_BORDER}`, overflow: 'hidden' }}>
            <div style={{ height: 220, position: 'relative' }}>
              <img
                src={siteImages.luxuryInterior}
                alt="Luxury interior designed by MEO Development"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.72) saturate(0.9)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 20%, ${DARK_CARD}E0 100%)` }} />
            </div>
            <div style={{ padding: 40 }}>
            <div style={{ color: GOLD, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 28, fontWeight: 600 }}>
              Company Details
            </div>
            {[
              { label: 'Phone', value: '+1 754 284 91 10' },
              { label: 'Scope', value: 'Local & International Clients' },
              { label: 'Focus', value: 'Luxury Property & Design' },
              { label: 'Speciality', value: 'High-End Bespoke Solutions' },
              { label: 'Sectors', value: 'Residential, Commercial, Hospitality' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                padding: '16px 0', borderBottom: `1px solid ${DARK_BORDER}`, gap: 16,
              }}>
                <span style={{ color: GREY, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', flexShrink: 0 }}>
                  {item.label}
                </span>
                <span style={{ color: OFF_WHITE, fontSize: 13, textAlign: 'right' }}>
                  {item.value}
                </span>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div style={{ marginBottom: 36 }}>
            <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>Our Foundation</div>
            <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 28 : 38, fontWeight: 300, marginBottom: 12 }}>Core Values</h2>
            <div style={{ width: 60, height: 2, background: GOLD, marginBottom: 16 }} />
            <p style={{ color: GREY, fontSize: 15, lineHeight: 1.7 }}>
              The principles that guide every decision we make and every project we undertake.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4, 1fr)', gap: 1, background: DARK_BORDER }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: DARK_CARD, padding: '36px 28px' }}>
                <div style={{ width: 32, height: 2, background: GOLD, marginBottom: 20 }} />
                <h3 style={{ color: OFF_WHITE, fontSize: 16, fontWeight: 600, marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: GREY, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
