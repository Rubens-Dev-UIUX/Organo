import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Limpeza e Organização',
      corPrimaria: '#4F006A#4F006A',
      corSecundaria: '#C9AEDA', 
    },
    {
      nome:'Compras e Feira',
      corPrimaria: '#4F006A',
      corSecundaria: '#C9AEDA', 
    },
    {
      nome:'Wild Rift (LOL)',
      corPrimaria: '#4F006A',
      corSecundaria: '#C9AEDA', 
    },
    {
      nome:'Bagunça',
      corPrimaria: '#4F006A',
      corSecundaria: '#C9AEDA', 
    },
    {
      nome:'Maratona de Series/Filmes',
      corPrimaria: '#4F006A',
      corSecundaria: '#C9AEDA', 
    }
  ]

  const [membros, setMembros] = useState([])

  const aoNovoMembro = (membro) => {
    // console.log(membro)
    setMembros([...membros, membro])
}

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrarMembro={membro => aoNovoMembro(membro)} />

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} 
      membros={membros.filter(membro => membro.time === time.nome)}
      />)}

    </div>
  );
}

export default App;
