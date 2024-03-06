import './Membro.css'

export const Membro = ( { membro, corDeFundo } ) => {

    return (
        <div className='membro'>
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