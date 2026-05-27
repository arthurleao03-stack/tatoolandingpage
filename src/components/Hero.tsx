import styles from './Hero.module.css';

const WHATSAPP_URL =
  'https://wa.me/351900000000?text=Olá%20Yago%2C%20gostaria%20de%20agendar%20uma%20sessão%20de%20tatuagem.';
const INSTAGRAM_URL = 'https://instagram.com/yagotatuador';

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.grain} />
        <div className={styles.gradientLeft} />
        <div className={styles.gradientRight} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          <span>Lisboa, Portugal</span>
        </div>

        <h1 className={styles.heading}>
          <span className={styles.headingLine1}>A arte que</span>
          <span className={styles.headingLine2}>fica na pele</span>
        </h1>

        <p className={styles.subtitle}>
          Tatuagens de realismo e arte corporal de alto nível.
          <br />
          Cada traço conta uma história única.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4+</span>
            <span className={styles.statLabel}>Anos de experiência</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Tatuagens realizadas</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Personalizado</span>
          </div>
        </div>

        <div className={styles.actions}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.05.02C5.495.02.03 5.484.03 12.04c0 2.116.553 4.17 1.603 5.982L0 24l6.17-1.612A11.97 11.97 0 0012.05 24C18.605 24 24.07 18.536 24.07 11.98 24.07 5.424 18.606.02 12.05.02zm0 21.82c-1.866 0-3.694-.501-5.29-1.449l-.38-.225-3.934 1.03 1.047-3.828-.248-.396A9.79 9.79 0 012.21 11.98c0-5.426 4.414-9.84 9.84-9.84s9.84 4.414 9.84 9.84-4.414 9.84-9.84 9.84z" />
            </svg>
            Agendar sessão
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Ver Instagram
          </a>
        </div>

        <a href="#galeria" className={styles.scrollHint} aria-label="Ver galeria">
          <span>Ver trabalhos</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </a>
      </div>

      <div className={styles.scrollLine} aria-hidden="true" />
    </section>
  );
}
