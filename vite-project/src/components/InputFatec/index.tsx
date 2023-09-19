import styles from './InputFatec.module.css'

interface Props {
    placeholder: 'Usuário' | 'Senha' | 'Telefone'
    type: 'string' | 'password'
}

function InputUser({placeholder, type}: Props) {
    return (
        <input className={styles.botaoFatec} placeholder={placeholder} type={type}/>
    )
}

export default InputUser