import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";
import styles from "./Signup2.module.scss";

export default function SignUp2() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let {push} = useRouter();

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:3333/students", {
        email,
        username,
        password,
      })
      .then(res => {
        // Em caso de sucesso faça o navigate
        push("/feed");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className={styles.registerContainer}>
        <p className={styles.registerContainerSubtitle}>
          Vamos completar seu cadastro:
        </p>
        <form className={styles.registerContainerForm} onSubmit={handleSubmit}>
          <input
            className={styles.registerContainerFormInput}
            placeholder='Digite seu e-mail'
            type='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <input
            className={styles.registerContainerFormInput}
            placeholder='Username'
            type='text'
            value={username}
            onChange={event => setUsername(event.target.value)}
          />

          <div className={styles.registerContainerFormRowDivided}>
            <select
              id='estado'
              name='estado'
              className={styles.registerContainerFormRowDividedSelect}
            >
              <option value='AC'>Acre</option>
              <option value='AL'>Alagoas</option>
              <option value='AP'>Amapá</option>
              <option value='AM'>Amazonas</option>
              <option value='BA'>Bahia</option>
              <option value='CE'>Ceará</option>
              <option value='DF'>Distrito Federal</option>
              <option value='ES'>Espírito Santo</option>
              <option value='GO'>Goiás</option>
              <option value='MA'>Maranhão</option>
              <option value='MT'>Mato Grosso</option>
              <option value='MS'>Mato Grosso do Sul</option>
              <option value='MG'>Minas Gerais</option>
              <option value='PA'>Pará</option>
              <option value='PB'>Paraíba</option>
              <option value='PR'>Paraná</option>
              <option value='PE'>Pernambuco</option>
              <option value='PI'>Piauí</option>
              <option value='RJ'>Rio de Janeiro</option>
              <option value='RN'>Rio Grande do Norte</option>
              <option value='RS'>Rio Grande do Sul</option>
              <option value='RO'>Rondônia</option>
              <option value='RR'>Roraima</option>
              <option value='SC'>Santa Catarina</option>
              <option value='SP'>São Paulo</option>
              <option value='SE'>Sergipe</option>
              <option value='TO'>Tocantins</option>
              <option value='EX'>Estrangeiro</option>
            </select>

            <input
              className={styles.registerContainerFormRowDividedDate}
              placeholder='Nascimento'
              type='text'
            />
          </div>

          <input
            className={styles.registerContainerFormInput}
            placeholder='Digite sua senha'
            type='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <button
            className={styles.registerContainerFormSubmitButton}
            type='submit'
          >
            Criar conta
          </button>
          <div className={styles.registerContainerFormTerms}>
            <input
              className={styles.registerContainerFormTermsCheckbox}
              type='checkbox'
              id='terms'
              name='terms'
              value='terms'
            />
            <label className={styles.registerContainerFormTermsText}>
              Eu aceito os <Link href='/'>Termos de Serviço</Link> e{" "}
              <Link href='/'>Política de Privacidade do Questty</Link>.
            </label>
          </div>
        </form>

        <div className={styles.registerContainerComeback}>
          <button className={styles.registerContainerComebackButton}>
            <Link href='/signup'>Voltar</Link>
          </button>
        </div>
      </div>
    </>
  );
}
