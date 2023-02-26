import axios from "axios";
// import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";
import styles from "./Signup.module.scss";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const {push} = useRouter();

  const registerUser = e => {
    e.preventDefault();

    axios
      .get(`http://localhost:3333/students/list`, {
        params: {email},
      })
      .then(res => {
        // Em caso de sucesso faça o navigate
        push("/signup-2");
      })
      .catch(error => console.log(error.message));
  };

  return (
    <>
      <div className={styles.registerContainer}>
        <p className={styles.registerContainerTitle}>Comece agora mesmo</p>
        <form className={styles.registerContainerForm} onSubmit={registerUser}>
          <input
            className={styles.registerContainerFormInput}
            placeholder='Digite seu e-mail'
            type='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button
            className={styles.registerContainerFormSubmitButton}
            type='submit'
            onClick={registerUser}
          >
            Registrar
          </button>
        </form>
        <div className={styles.registerContainerTerms}>
          <p className={styles.registerContainerTermsText}>
            Ao se inscrever no Questty você concorda com os{" "}
            <Link href='/'>Termos de Serviço</Link> e{" "}
            <Link href='/'>Política de Privacidade do Questty</Link>.
          </p>
        </div>

        <div className={styles.registerContainerSocial}>
          <p className={styles.registerContainerSocialTitle}>
            Ou inscreva-se usando:
          </p>
          <div className={styles.registerContainerSocialRowIcons}>
            <img
              className={styles.registerContainerSocialRowIconsImage}
              src='../../assets/images/google-icon.svg'
              alt=''
            />
            <img
              className={styles.registerContainerSocialRowIconsImage}
              src='/assets/images/facebook-icon.svg'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
}
