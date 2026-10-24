import { Link } from 'react-router-dom';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD, CREAM } from '../theme';
import { siteImages } from '../images';
import PageHeader from '../components/PageHeader';
import { useLang } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';

const services = [
  {
    number: '01',
    title: 'Property Investment Consultancy',
    description:
      'Our investment consultancy service provides end-to-end guidance for investors seeking opportunities in real estate. From market analysis and due diligence to acquisition strategy and portfolio management, we deliver actionable intelligence backed by deep market expertise.',
    features: [
      'Market Analysis & Research',
      'Due Diligence Management',
      'Portfolio Optimization',
      'Risk Assessment',
      'International Real Estate',
      'Land Acquisition Advisory',
    ],
    image: siteImages.investment,
  },
  {
    number: '02',
    title: 'Home Improvement & Renovation',
    description:
      'MEO Development LLC specializes in delivering high-quality home improvement and renovation services, transforming properties into aesthetically refined and highly functional living spaces. Our team of expert craftsmen and designers bring unmatched precision to every project.',
    features: [
      'Full Interior Renovation',
      'Structural Improvements',
      'Kitchen & Bathroom Refits',
      'Custom Millwork & Joinery',
      'Flooring & Wall Finishes',
      'Smart Home Integration',
    ],
    image: siteImages.renovation,
  },
  {
    number: '03',
    title: 'Design & Development Services',
    description:
      'At MEO Development LLC, we understand that every home and property requires a unique approach to design and development. We provide a wide range of high-end luxury furniture and bespoke design solutions for commercial projects, hotels, restaurants, and residences.',
    features: [
      'Bespoke Furniture Design',
      'Luxury Interior Design',
      'Commercial Project Design',
      'Hotel & Hospitality Fit-Out',
      'Restaurant Concept Design',
      'Mansion & Penthouse Interiors',
    ],
    image: siteImages.bespokeDesign,
  },
];

const ImagePanel = ({ svc, align }: { svc: typeof services[0]; align: 'left' | 'right' }) => {
  const { isMobile } = useResponsive();
  return (
    <div style={{
      background: `linear-gradient(180deg, rgba(250,249,245,0.35), ${CHARCOAL} 78%), url(${svc.image}) center / cover no-repeat`,
      padding: isMobile ? 24 : 40,
      borderLeft: align === 'right' && !isMobile ? `1px solid ${DARK_BORDER}` : undefined,
      borderRight: align === 'left' && !isMobile ? `1px solid ${DARK_BORDER}` : undefined,
      borderBottom: isMobile ? `1px solid ${DARK_BORDER}` : undefined,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      minHeight: isMobile ? 180 : 360,
    }}>
      <div style={{ color: `${GOLD}33`, fontSize: isMobile ? 60 : 88, fontWeight: 700, lineHeight: 1, fontFamily: 'Georgia, serif', textAlign: align === 'right' ? 'right' : 'left' }}>
        {svc.number}
      </div>
      <div style={{ textAlign: align === 'right' ? 'right' : 'left' }}>
        <div style={{ width: 32, height: 2, background: GOLD, marginBottom: 10, marginLeft: align === 'right' ? 'auto' : undefined }} />
        <div style={{ color: GOLD, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase' }}>Service {svc.number}</div>
      </div>
    </div>
  );
};

export default function Services() {
  const { t } = useLang();
  const { isMobile } = useResponsive();
  const sectionPad = isMobile ? '48px 16px' : '80px 32px';
  return (
    <div style={{ background: CREAM }}>

      <PageHeader eyebrow={t('What We Offer','Hizmetlerimiz')} titleLight={t('Our','Sunduğumuz')} titleBold={t('Services','Hizmetler')} watermark="SERVICES" />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: sectionPad }}>

        {services.map((svc, i) => (
          <div key={i} style={{ marginBottom: i < services.length - 1 ? (isMobile ? 32 : 64) : 0 }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : (i % 2 === 0 ? '280px 1fr' : '1fr 280px'), gap: 0, border: `1px solid ${DARK_BORDER}` }}>
              {isMobile ? (
                <>
                  <ImagePanel svc={svc} align="left" />
                  <div style={{ background: DARK_CARD, padding: '24px 20px' }}>
                    <h2 style={{ color: OFF_WHITE, fontSize: 20, fontWeight: 600, marginBottom: 14 }}>{svc.title}</h2>
                    <p style={{ color: GREY, fontSize: 13, lineHeight: 1.8, marginBottom: 20 }}>{svc.description}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                      {svc.features.map((f, fi) => (
                        <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, color: OFF_WHITE, fontSize: 12 }}>
                          <div style={{ width: 6, height: 6, background: GOLD, flexShrink: 0 }} />{f}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : i % 2 === 0 ? (
                <>
                  <ImagePanel svc={svc} align="left" />
                  <div style={{ background: DARK_CARD, padding: 48 }}>
                    <h2 style={{ color: OFF_WHITE, fontSize: 26, fontWeight: 600, marginBottom: 20 }}>{svc.title}</h2>
                    <p style={{ color: GREY, fontSize: 14, lineHeight: 1.9, marginBottom: 32 }}>{svc.description}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                      {svc.features.map((f, fi) => (
                        <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, color: OFF_WHITE, fontSize: 12 }}>
                          <div style={{ width: 6, height: 6, background: GOLD, flexShrink: 0 }} />{f}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ background: DARK_CARD, padding: 48 }}>
                    <h2 style={{ color: OFF_WHITE, fontSize: 26, fontWeight: 600, marginBottom: 20 }}>{svc.title}</h2>
                    <p style={{ color: GREY, fontSize: 14, lineHeight: 1.9, marginBottom: 32 }}>{svc.description}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                      {svc.features.map((f, fi) => (
                        <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, color: OFF_WHITE, fontSize: 12 }}>
                          <div style={{ width: 6, height: 6, background: GOLD, flexShrink: 0 }} />{f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <ImagePanel svc={svc} align="right" />
                </>
              )}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ marginTop: isMobile ? 40 : 80, background: CHARCOAL, border: `1px solid ${GOLD}44`, padding: isMobile ? '36px 20px' : '52px 48px', textAlign: 'center' }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>Start Your Project</div>
          <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 26 : 34, fontWeight: 300, margin: '0 0 12px' }}>Ready to Transform Your Property?</h2>
          <p style={{ color: GREY, fontSize: 14, marginBottom: 32, lineHeight: 1.7 }}>
            Contact us today to discuss your vision and discover how MEO Development can bring it to life.
          </p>
          <Link to="/contact" style={{ background: GOLD, color: BLACK, padding: '14px 40px', fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', textDecoration: 'none' }}>
            Request a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
