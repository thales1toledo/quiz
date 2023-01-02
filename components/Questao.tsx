import styles from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao";
import Enunciado from './Enunciado';
import Resposta from './Resposta';
import Temporizador from './Temporizador';

interface QuestaoProps {
    valor: QuestaoModel
    tempoPraResposta?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

const letras = [
    { value: "A", color: "#F2C866" },
    { value: "B", color: "#F266BA" },
    { value: "C", color: "#85D4F2" },
    { value: "D", color: "#BCE596" },
]

export default function Questao(props: QuestaoProps) {

    const questao = props.valor

    function renderizarRespostas() {
        return questao.respostas.map((resposta, i) => {
            return <Resposta
                key={`${questao.id} - ${i}`}
                valor={resposta}
                indice={i}
                letra={letras[i].value}
                corBgLetra={letras[i].color}
                respostaFornecida={props.respostaFornecida}
            />
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            <Temporizador key={questao.id} duracao={props.tempoPraResposta ?? 10} tempoEsgotado={props.tempoEsgotado} />
            {renderizarRespostas()}
        </div>
    )
}