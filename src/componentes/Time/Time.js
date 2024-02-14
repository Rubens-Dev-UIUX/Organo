import Membro from '../Membro'
import './Time.css'

export const Time = (props) => {

    const corPrimaria = { borderColor: props.corPrimaria}
    const corSecundaria = { backgroundColor: props.corSecundaria}

    return (
        (props.membros.length > 0) && 
        <section className='time' style={corSecundaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>

            <div className='membros'>
            {props.membros.map( membro => <Membro key={membro.nome} corDeFundo={props.corPrimaria} nome={membro.nome} status={membro.status} imagem={membro.imagem} />)}
            </div>
        
        </section>
    )
}