import { useEffect, useRef } from 'react';
import styles from './About.module.css';

const credentials = [
  { icon: '◆', text: '4+ anos de experiência profissional' },
  { icon: '◆', text: 'Especialista em realismo e retrato' },
  { icon: '◆', text: 'Estúdio próprio em Lisboa, Portugal' },
  { icon: '◆', text: 'Trabalhos personalizados do zero' },
  { icon: '◆', text: 'Material esterilizado e descartável' },
  { icon: '◆', text: 'Atendimento em PT / EN / ES' },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('[data-reveal]');
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <span className={styles.label} data-reveal>Sobre o artista</span>
            <h2 className={styles.title} data-reveal>
              Arte que transcende
              <br />
              <em>a superfície</em>
            </h2>
            <p className={styles.body} data-reveal>
              Yago é tatuador profissional sediado em Lisboa com mais de quatro anos de experiência
              no mercado. Especializado em realismo e retrato, desenvolveu uma técnica precisa que
              captura texturas, profundidade e expressão com fidelidade excepcional.
            </p>
            <p className={styles.body} data-reveal>
              Cada sessão começa com uma conversa: entender o que o cliente quer eternizar na pele,
              qual a história por trás da ideia. Só depois vem o desenho. Essa filosofia colaborativa
              resulta em tatuagens que têm significado real — não apenas visual, mas emocional.
            </p>
            <p className={styles.body} data-reveal>
              Com domínio de black &amp; grey e cor, Yago adapta o estilo ao projeto. O realismo é
              a sua linguagem principal, mas cada peça é única. Sem templates, sem repetição.
            </p>

            <div className={styles.credentials} data-reveal>
              {credentials.map((c) => (
                <div key={c.text} className={styles.credItem}>
                  <span className={styles.credIcon}>{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.statsCol} data-reveal>
            <div className={styles.card}>
              <blockquote className={styles.quote}>
                "Tatuar é transformar a pele em tela permanente — cada linha carrega um peso
                que vai além da estética."
              </blockquote>
              <cite className={styles.quoteAuthor}>— Yago, Tatuador</cite>

              <div className={styles.divider} />

              <div className={styles.cardStats}>
                <div className={styles.cardStat}>
                  <span className={styles.cardStatNum}>4+</span>
                  <span className={styles.cardStatLabel}>Anos</span>
                </div>
                <div className={styles.cardStat}>
                  <span className={styles.cardStatNum}>500+</span>
                  <span className={styles.cardStatLabel}>Tatuagens</span>
                </div>
                <div className={styles.cardStat}>
                  <span className={styles.cardStatNum}>2</span>
                  <span className={styles.cardStatLabel}>Estúdios</span>
                </div>
              </div>

              <div className={styles.divider} />

              <div className={styles.styles}>
                <span className={styles.stylesLabel}>Estilos</span>
                <div className={styles.stylesTags}>
                  {['Realismo', 'Black & Grey', 'Retrato', 'Fine Line', 'Blackwork', 'Cor'].map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
