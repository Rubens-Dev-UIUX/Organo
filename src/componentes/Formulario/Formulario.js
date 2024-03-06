import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [status, setStatus] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        // console.log('Foi Rubão, segue os dados ai meu nego ->', nome,  status, time)

        props.aoCadastrarMembro({
            nome,
            status,
            imagem,
            time
        })

    }

    return (
        <>
        <section className='formulario-container'>
            <form className='formulario' onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar um card de membro </h2>

            {/* Altere as sugestões aqui ⬇️ ( Dentro de "placeholder" ) */}

            <CampoTexto 
            obrigatorio={true} label="Nome" placeholder="Seu nome" valor={nome} aoAlterar={valor => setNome(valor)}
            />

            <CampoTexto 
            obrigatorio={true} label="Status" placeholder="Exemplo: Vivendo e meditando..." valor={status} aoAlterar={valor => setStatus(valor)}
            />

            <CampoTexto 
            label="Imagem" placeholder="Endedeço da imagem" valor={imagem} aoAlterar={valor => setImagem(valor)}
            />

            <ListaSuspensa 
            obrigatorio={true} label="Time do(a)" itens={props.times} valor={time} aoAlterar={valor => setTime(valor)}
            />

            <Botao> Criar Card </Botao>
            </form>
        </section>

        <div className='titulo'>
        <h1>Minha Organização</h1>
        </div>

        </>
    )

}