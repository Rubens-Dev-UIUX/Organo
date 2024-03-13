import Membro from '../Membro'
import './Time.css'

export const Time = ({ time, membros, aoDeletar, mudarCor } ) => {

    return (

        membros.length > 0 && 
        <section className='time' style={{background: time.corSecundaria}}>
            <input value={time.corPrimaria} onChange={evento => mudarCor(evento.target.value, time.nome)} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>

            <div className='membros'>
            {membros.map((membro, indice)=> {
                return <Membro key={indice} membro={membro} corDeFundo={time.corPrimaria} aoDeletar={aoDeletar}/>;
            })}
            </div>
        
        </section>
    )
}