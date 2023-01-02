import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Temporizador.module.css'

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={100}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#BCE596', '#F7B801', '#ED827A', '#ff6666']}
                colorsTime={[10, 6, 3, 0]}
                strokeLinecap={'butt'}
                isSmoothColorTransition
                strokeWidth={9}
                trailStrokeWidth={9}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}