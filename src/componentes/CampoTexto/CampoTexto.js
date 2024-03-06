// import { useState } from 'react'
import './CampoTexto.css'

export const CampoTexto = ({ label, placeholder, valor, aoAlterar, obrigatorio = false}) => {

    return (
        <div className="campo-texto">
            <label>{label}</label>

            <input 
            value={valor} onChange={evento => aoAlterar(evento.target.value)} require={obrigatorio} placeholder={placeholder}
            />
        </div>
    )
}