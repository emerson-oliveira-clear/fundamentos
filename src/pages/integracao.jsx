import Layout from "../components/Layoutt"
import { useState } from "react"

export default function Integracao() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    async function obterCLiente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)

        const dados = await resp.json()
        setCliente(dados)

       // fetch(`http://localhost:3000/api/clientes/${codigo}`)
        //    .then(resp => resp.json())
        //    .then(dados => setCliente(dados))
    }

    return (

        <Layout titulo='API'>
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)} />
                <button onClick={obterCLiente}>Obter Cliente</button>
            </div>
            <ul>
                <li>Codigo: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>

        </Layout>

    )

}