import styles from './Footer.module.css';

const INSTAGRAM_URL = 'https://instagram.com/yagotatuador';
const WHATSAPP_URL =
  'https://wa.me/351900000000?text=Olá%20Yago%2C%20gostaria%20de%20agendar%20uma%20sessão%20de%20tatuagem.';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.brandName}>Yago</span>
            <span className={styles.brandTag}>Tatuador · Lisboa</span>
          </div>

          <nav className={styles.links} aria-label="Links sociais">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05.02C5.495.02.03 5.484.03 12.04c0 2.116.553 4.17 1.603 5.982L0 24l6.17-1.612A11.97 11.97 0 0012.05 24C18.605 24 24.07 18.536 24.07 11.98 24.07 5.424 18.606.02 12.05.02zm0 21.82c-1.866 0-3.694-.501-5.29-1.449l-.38-.225-3.934 1.03 1.047-3.828-.248-.396A9.79 9.79 0 012.21 11.98c0-5.426 4.414-9.84 9.84-9.84s9.84 4.414 9.84 9.84-4.414 9.84-9.84 9.84z" />
              </svg>
              WhatsApp
            </a>
            <a href="mailto:yago@estudio.pt" className={styles.link}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} Yago Tatuador. Todos os direitos reservados.
          </p>
          <p className={styles.made}>
            Lisboa, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
