import Layout from '@/components/Layout'
import styles from '../styles/Estiloso.module.css'



export default function Estilo() {

    return (

        <Layout titulo='Exemplo de CSS modularizado'>
            

            <div className={styles.roxo}>

                <h1>Estilo usando CSS modulos</h1>

            </div>

            
        </Layout>




    )

}