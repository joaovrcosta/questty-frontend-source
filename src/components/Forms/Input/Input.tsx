import styles from "./Input.module.scss";


const Input = () => {
    return (
        <>
        <input
            className={styles.registerContainerFormInput}
            placeholder="Digite seu e-mail"
            type="email"
          />
        </>
    )
}

export { Input }