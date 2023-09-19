import Navegador from '../components/navegador'

export default function inicio() {

    return (

        <div style={{

            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap',

        }}>
            <Navegador texto='Estiloso' destino='/estiloso'/>

            <Navegador texto='Exemplo' destino='/exemplo' cor='#f6d518'/>

            <Navegador texto='Jsx' destino='/jsx' cor='crimson'/>

            <Navegador texto='Navegação #01' destino='/navegacao' cor='#0fa980'/>

            <Navegador texto='Navegação #02' destino='/cliente/sp-2/321' cor='#1ec50e'/>

            <Navegador texto='Componente com Estado' destino='/estado' cor='#831ba3'/>

            <Navegador texto='Usando api 01' destino='/integracao_1' cor='black'/>

            <Navegador texto='Conteudo estatico' destino='/estatico' cor='darkblue'/>

            
        </div>

    )
}