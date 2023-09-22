import styles from './Button.module.css'

export function Button (){
    return (
        <button
            className={styles.button} 
            type="submit">Criar</button>
    )
}