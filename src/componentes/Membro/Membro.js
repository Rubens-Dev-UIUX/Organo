import './Membro.css'

export const Membro = ( {nome, imagem, status, corDeFundo} ) => {

    return (
        <div className='membro'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{status}</h5>
            </div>
        </div>
    )
}