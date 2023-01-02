import styles from '../styles/Estatistica.module.css'

interface EstatisticaProps {
    valor: any
    texto: string
    corBg?: string
    corText?: string
}


export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className={styles.estatistica}>
            <div className={styles.valor} style={{
                backgroundColor: props.corBg ?? '#FDD60F',
                color: props.corText ?? '#333' 
            }}>
                {props.valor}
            </div>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    )
}