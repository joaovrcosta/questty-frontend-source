import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerRow}>
        <div className={styles.footerRowContent}>
          <p className={styles.footerRowContentTitle}>Sobre Nós</p>
          <a href="/sobre-nos">Sobre nós</a>
          <a href="/carreiras">Carreiras</a>
          <a href="/redes-sociais">Redes Sociais</a>
        </div>
        <div className={styles.footerRowContent}>
          <p className={styles.footerRowContentTitle}>Ajuda</p>
          <a href="/ajuda">Ajuda</a>
          <a href="/regulamento">Regulamento</a>
          <a href="/como-ganhar-coins">Como ganhar coins?</a>
        </div>
      </div>

      <div className={`${styles.footerCol}`}>
        <div>Logo</div>
        <p>
          Este site utiliza cookies sob política de cookies. Você pode editar
          as configurações de cookies no seu navegador.
        </p>
      </div>
    </footer>
  );
}
