import Layout from '@/components/Layout'
import { useState } from 'react'



export default function Estado() {

    const [numero ,setnumero ]= useState(0)

    function inc (){

        setnumero(numero + 1)

    }

    return (

        <Layout titulo='Componente com estado'>
            
            <div>{numero}</div>
            <button onClick={inc}>Incrementar</button>
            
        </Layout>




    )

}