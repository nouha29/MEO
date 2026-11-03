import { useState } from 'react';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD, CREAM } from '../theme';
import PageHeader from '../components/PageHeader';
import { useLang } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { lang, t } = useLang();
  const { isMobile } = useResponsive();
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', background: CHARCOAL, border: `1px solid ${DARK_BORDER}`,
    padding: '14px 16px', color: OFF_WHITE, fontSize: 13,
    outline: 'none', fontFamily: 'inherit',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', color: GREY, fontSize: 10,
    letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8,
  };

  return (
    <div style={{ background: CREAM }}>

      <PageHeader
        eyebrow={t('Get in Touch', 'Bize Ulaşın')}
        titleLight={t('Contact', 'İletişim')}
        titleBold={t('Us', 'Bilgileri')}
        watermark="CONTACT"
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '40px 16px' : '80px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '320px 1fr', border: `1px solid ${DARK_BORDER}` }}>

          {/* Info panel */}
          <div style={{ background: CHARCOAL, padding: isMobile ? '28px 20px' : 48, borderRight: isMobile ? 'none' : `1px solid ${DARK_BORDER}`, borderBottom: isMobile ? `1px solid ${DARK_BORDER}` : 'none' }}>

            {/* Flag indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
              <span style={{ fontSize: 22 }}>{lang === 'tr' ? '🇹🇷' : '🇺🇸'}</span>
              <div>
                <div style={{ color: GOLD, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600 }}>
                  {t('Contact Details', 'İletişim Bilgileri')}
                </div>
                <div style={{ color: GREY, fontSize: 10, marginTop: 2 }}>
                  {t('USA Office', 'Türkiye Ofisi')}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ color: GREY, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
                {t('Phone', 'Telefon')}
              </div>
              <div style={{ color: GOLD, fontSize: 18, fontWeight: 600 }}>
                {lang === 'tr' ? '+90 541 621 61 61' : '+1 754 284 91 10'}
              </div>
            </div>

            <div style={{ width: '100%', height: 1, background: DARK_BORDER, margin: '24px 0' }} />

            <div style={{ marginBottom: 28 }}>
              <div style={{ color: GREY, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
                {t('Address', 'Adres')}
              </div>
              <div style={{ color: OFF_WHITE, fontSize: 13, lineHeight: 1.7 }}>
                {lang === 'tr'
                  ? 'İstanbul, Türkiye'
                  : 'Fort Lauderdale, Florida, USA'}
              </div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ color: GREY, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
                {t('Company', 'Şirket')}
              </div>
              <div style={{ color: OFF_WHITE, fontSize: 14 }}>MEO Development LLC</div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ color: GREY, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
                {t('Services', 'Hizmetler')}
              </div>
              {(lang === 'tr'
                ? ['Gayrimenkul Yatırım Danışmanlığı', 'Ev İyileştirme & Renovasyon', 'Tasarım & Geliştirme']
                : [ 'Home Improvement & Renovation', 'Design & Development']
              ).map((s, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  color: OFF_WHITE, fontSize: 12, padding: '8px 0',
                  borderBottom: `1px solid ${DARK_BORDER}`,
                }}>
                  <div style={{ width: 4, height: 4, background: GOLD, flexShrink: 0 }} />
                  {s}
                </div>
              ))}
            </div>

            <div style={{ background: `${GOLD}11`, border: `1px solid ${GOLD}44`, padding: 16 }}>
              <div style={{ color: GOLD, fontSize: 12, lineHeight: 1.7 }}>
                {t(
                  'We serve local and international clients worldwide. Our team is available to discuss your project at any time.',
                  'Yerel ve uluslararası müşterilere hizmet veriyoruz. Ekibimiz projenizi her zaman görüşmeye hazırdır.'
                )}
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div style={{ background: DARK_CARD, padding: isMobile ? '28px 20px' : 48 }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 20, textAlign: 'center' }}>
                <div style={{ width: 60, height: 60, border: `2px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: GOLD, fontSize: 24 }}>✓</span>
                </div>
                <h2 style={{ color: OFF_WHITE, fontSize: 28, fontWeight: 300, margin: 0 }}>
                  {t('Message Sent', 'Mesaj Gönderildi')}
                </h2>
                <p style={{ color: GREY, fontSize: 14, maxWidth: 360 }}>
                  {t(
                    'Thank you for reaching out. We will get back to you within 24 hours.',
                    'Bize ulaştığınız için teşekkürler. 24 saat içinde size geri döneceğiz.'
                  )}
                </p>
                <button onClick={() => setSent(false)} style={{
                  background: 'none', color: GOLD, border: `1px solid ${GOLD}`,
                  padding: '12px 28px', fontSize: 11, letterSpacing: 2,
                  textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit',
                }}>
                  {t('Send Another', 'Tekrar Gönder')}
                </button>
              </div>
            ) : (
              <>
                <div style={{ color: OFF_WHITE, fontSize: 24, fontWeight: 300, marginBottom: 8 }}>
                  {t('Send Us a Message', 'Bize Mesaj Gönderin')}
                </div>
                <div style={{ width: 60, height: 2, background: GOLD, marginBottom: 16 }} />
                <p style={{ color: GREY, fontSize: 13, lineHeight: 1.7, marginBottom: 32 }}>
                  {t(
                    "Tell us about your project and we'll get back to you within 24 hours.",
                    'Projeniz hakkında bilgi verin, 24 saat içinde size geri dönelim.'
                  )}
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    <div>
                      <label style={labelStyle}>{t('First Name', 'Ad')}</label>
                      <input name="firstName" value={form.firstName} onChange={handleChange}
                        placeholder={t('John', 'Ahmet')} required style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>{t('Last Name', 'Soyad')}</label>
                      <input name="lastName" value={form.lastName} onChange={handleChange}
                        placeholder={t('Doe', 'Yılmaz')} required style={inputStyle} />
                    </div>
                  </div>

                  {[
                    { name: 'email',   label: t('Email Address', 'E-posta Adresi'), placeholder: 'ornek@email.com', type: 'email' },
                    { name: 'phone',   label: t('Phone Number', 'Telefon Numarası'), placeholder: lang === 'tr' ? '+90 (5XX) XXX XX XX' : '+1 (000) 000-0000', type: 'tel' },
                    { name: 'subject', label: t('Subject', 'Konu'), placeholder: t('Tell us about your project', 'Projenizden bahsedin'), type: 'text' },
                  ].map(f => (
                    <div key={f.name} style={{ marginBottom: 16 }}>
                      <label style={labelStyle}>{f.label}</label>
                      <input name={f.name} type={f.type} value={(form as any)[f.name]}
                        onChange={handleChange} placeholder={f.placeholder} required style={inputStyle} />
                    </div>
                  ))}

                  <div style={{ marginBottom: 28 }}>
                    <label style={labelStyle}>{t('Your Message', 'Mesajınız')}</label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      placeholder={t('Describe your project or inquiry...', 'Projenizi veya talebinizi açıklayın...')}
                      rows={5} required style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>

                  <button type="submit" style={{
                    width: '100%', background: GOLD, color: BLACK, border: 'none',
                    padding: '16px', fontSize: 12, fontWeight: 700,
                    letterSpacing: 2.5, textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit',
                    transition: 'opacity 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    {t('Send Message', 'Mesaj Gönder')}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
