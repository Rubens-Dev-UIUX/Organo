import './ListaSuspensa.css'

export const ListaSuspensa = ({ label, itens, valor, aoAlterar, obrigatorio = false }) => {

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>

            <select 
            required={obrigatorio} value={valor} onChange={evento => aoAlterar(evento.target.value)}>
            <option /> 
                {itens.map(item => <option key={item}>{item}</option>
             )}
                </select>
        </div>
    )
}