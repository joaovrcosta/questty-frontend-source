import styles from "./EmailConfirmation.module.scss";
const onSubmit = e => {
  e.preventDefault();
};

export default function EmailConfirmation() {
  return (
    <div className={styles.emailConfirmation}>
      <p className={styles.emailConfirmationTitle}>
        Falta muito pouco para finalizar
      </p>

      <p className={styles.emailConfirmationDescription}>
        Verifique a sua caixa de entrada no email para finalizar o cadastro.
      </p>

      <form className={styles.emailConfirmationForm} onSubmit={onSubmit}>
        <input
          className={styles.emailConfirmationFormInput}
          placeholder='Digite o código de confirmação'
          type='text'
          //   ref={codeRef}
        />
        <button
          className={styles.emailConfirmationFormSubmitButton}
          type='submit'
        >
          Registrar
        </button>
      </form>
      <div className={styles.emailConfirmationResend}>
        <button className={styles.emailConfirmationResendButton}>
          Reenviar código
        </button>
      </div>
    </div>
  );
}
