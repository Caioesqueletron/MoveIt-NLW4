import { Profiler } from "inspector";

import styles from '../styles/components/Profile.module.css'
export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/caioesqueletron.png" alt="Caio Vinicius"/>
            <div>
                <strong>Caio Vinicius</strong>
                <p> 
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}