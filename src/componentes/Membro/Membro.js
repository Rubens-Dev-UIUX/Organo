import { AiFillCloseCircle } from 'react-icons/ai';
import './Membro.css';

export const Membro = ( { membro, corDeFundo, aoDeletar } ) => {

    return (
        <div className='membro'>
            <AiFillCloseCircle 
                size={30} 
                className='deletar' 
                onClick={() => aoDeletar(membro.id)}
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={membro.imagem} alt={membro.nome} />
            </div>

            <div className='rodape'>
                <h4>{membro.nome}</h4>
                <h5>{membro.status}</h5>
            </div>
        </div>
    )
}