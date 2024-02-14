// import { useState } from 'react'
import './CampoTexto.css'

export const CampoTexto = (props) => {


    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>

            <input 
            value={props.valor} onChange={aoDigitar} require={props.obrigatorio} placeholder={props.placeholder} valor={props.valor}
            />
        </div>
    )
}