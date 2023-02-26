import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext";
import styles from "./Login.module.scss";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {logged} = useContext(AuthContext);
  // handleUserLogin
  const handleSubmit = e => {
    e.preventDefault();

    // handleUserLogin(email, password);
  };

  if (logged) return <Navigate to='/feed' />;

  return (
    <div className="flex flex-col items-start mx-auto max-w-[420px]">
      <p className={styles.loginContainerTitle}>Entre com a sua conta:</p>
      <form className="flex flex-col mb-32" onSubmit={handleSubmit}>
      <label className="mb-2" htmlFor="">E-mail</label>
        <input
          className="flex w-[384px] py-4 px-4 mb-4 border border-black hover:border-[#097a93]"
          placeholder='Digite seu e-mail'
          type='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <label className="mb-2" htmlFor="">Senha</label>
        <input
          className="flex w-[384px] border px-4 border-black py-4 hover:border-[#097a93]"
          placeholder='Digite sua senha'
          type='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <p className="mb-10 mt-10 font-semibold text-[#0C9AB9]">
          Esqueci a minha senha
        </p>
        <div className="flex space-x-12">
        <button className=" w-[142px] text-white rounded-[10px] border border-black bg-blue px-10 py-3" type='submit'>
          Entrar
        </button>
        <button className=" w-[142px] rounded-[10px]  text-[#0C9AB9] bg-white px-10 py-3" type='button'>
          Criar
        </button>
        </div>
        <div>
          <p className="font-bold text-border-black mt-10">Entre com:</p>
        </div>
      </form>
    </div>
  );
}
