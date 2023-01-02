import styles from '../styles/Enunciado.module.css'

interface EnunciadoProps {
    texto: string
}

export default function Enunciado(props: EnunciadoProps) {
    return (
        <div className={styles.enunciado}>
            <div className={styles.texto}>
                <span>{props.texto}</span>
            </div>
        </div>
    )
}