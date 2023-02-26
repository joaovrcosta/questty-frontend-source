import Link from "next/link";
import styles from "./LandingHeader.module.scss";
import Image from "next/image";

export function LandingHeader() {
  return (
    <div className="bg-[#fffce6]">
      <header className="flex mx-auto max-w-[1280px] bg-[#fffce6] py-6">
        <div className={styles.headerLandingLogo}>
        <Link href='/'>
            <Image
              width={120}
              height={52}
              className="flex cursor-pointer"
              src='/assets/images/questty-logo-landing.svg'
              alt='Questty Logo'
            />
        </Link>
        </div>
        <nav className={styles.headerLandingNavButtons}>
          <Link href='/login' passHref>
            <a>Entrar</a>
          </Link>
          <Link href='/signup' passHref>
            <a>Cadastrar</a>
          </Link>
          <Link href='/signup' passHref>
            <a>Perguntar</a>
          </Link>
        </nav>
      </header>
    </div>
  );
}
