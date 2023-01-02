import styles from '../styles/Resposta.module.css'
import RespostaModel from "../model/resposta"

interface RespostaProps {
    valor: RespostaModel
    indice: number
    letra: string
    corBgLetra: string
    respostaFornecida: (indice: number) => void
}

export default function Resposta(props: RespostaProps) {
    const resposta = props.valor
    const respostaRevelada = resposta.revelada ? styles.respostaRevelada : ''
    return (
        <div className={styles.resposta} onClick={() => props.respostaFornecida(props.indice)}>
            <div className={`${respostaRevelada} ${styles.conteudoResposta}`}>

                <div className={styles.frente}>
                    <div className={styles.letra} style={{ backgroundColor: props.corBgLetra }}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>

                <div className={styles.verso}>
                    {resposta.certa ?

                        (<div className={styles.certa}>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>)

                        :

                        (<div className={styles.errada}>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>)}
                </div>

            </div>
        </div>
    )
}