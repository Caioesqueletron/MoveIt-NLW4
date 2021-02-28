import Head from 'next/head'
import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import {useRouter} from 'next/router'
import styles from '../styles/pages/Login.module.css'
export default function Login() {

    const {push} = useRouter()
    const [username, setUsername] = useState('')
    const {logIn} = useContext(ChallengesContext)

    function handleUsername(e){
        e.preventDefault();
        if(username){
          push(`/${username}`);
        }
      }

    return (
        
    <div className={styles.container}>

        <Head>
            <title>Login | move.it</title>
        </Head>
        <section>
           
            <div className={styles.login}>
                <img src="icons/title.svg" alt=""/>
                <p className={styles.welcome}>Bem vindo</p>
                <p className={styles.github}>
                        <img src="icons/Github.svg" alt=""/>
                        <span> Faça login com o Github <br />para começar</span>
                </p>
                <form onSubmit={handleUsername}>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} placeholder={'Digite o seu nome'} type="text"/>
                    <button>
                        <img src="icons/Vector.svg" alt=""/>
                    </button>
                </form>

            </div>
        </section>
    </div>
    )
  }
  