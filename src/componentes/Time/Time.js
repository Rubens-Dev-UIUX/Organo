import Membro from '../Membro'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

export const Time = ({ time, membros, aoDeletar, mudarCor } ) => {

    return (

        membros.length > 0 && 
        <section className='time' style={{background: hexToRgba(time.cor, '0.4')}}>
            <input value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>

            <div className='membros'>
            {membros.map((membro, indice)=> {
                return <Membro key={indice} membro={membro} corDeFundo={time.cor} aoDeletar={aoDeletar}/>;
            })}
            </div>
        
        </section>
    )
}