import { useContext } from 'react'
import {CountdownContext} from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
   
    const {
        minutes, 
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown} = useContext(CountdownContext)
    
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

   
    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    <span>
                    Ciclo encerrado
                    <img src="icons/check_circle.svg" alt=""/>
                    </span>
                </button>
            ) :
                (
                    <>
                        {isActive ? (
                            <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                                <span>
                                Abandonar ciclo
                                <img src="icons/close.svg" alt=""/>
                                </span>
                               
                            </button>
                        ) : (
                                <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                                    <span>
                                    Iniciar um ciclo
                                    <img src="icons/play_arrow.svg" alt=""/>
                                    </span>
                                    
                                </button>
                            )
                        }
                    </>
                )
            }



        </div>
    )
}