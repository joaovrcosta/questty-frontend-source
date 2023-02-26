import Link from "next/link";
import styles from "../styles/ErrorPage.module.scss";

export default function Custom404() {
  return (
    <div className="">
      <h1 className={styles.errorPageContainerTextTitle}>#404</h1>
      <p className={styles.errorPageContainerTextDescription}>
        Parece que não existe nada <br /> nessas águas...🌊
      </p>
      <p className={styles.errorPageContainerTextGoHome}>
        Voltar para a <Link href='/'>terra firme</Link>.
      </p>
    </div>
  );
}
