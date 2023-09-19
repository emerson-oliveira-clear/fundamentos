import Cabecalho from "@/components/Cabecalho";
import Layout from '@/components/Layout'

export default function Exemplo() {


    return (

        <Layout titulo='Usando Componentes '>
            <Cabecalho nome='judas' idade={110} lega={true}/>

            <Cabecalho titulo='jurubeba'/>
        </Layout>


    )

}