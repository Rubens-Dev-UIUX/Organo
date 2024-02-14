import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer/Index';


function App() {

    // Altere os times aqui ⬇️
    // Altere as cores aqui ⬇️

  const times = [
    {
      nome: 'Limpeza e Organização',
      corPrimaria: '#686A00',
      corSecundaria: '#D6DAAE', 
    },
    {
      nome:'Compras e Feira',
      corPrimaria: '#00446A',
      corSecundaria: '#AEDAD7', 
    },
    {
      nome:'Wild Rift (LOL)',
      corPrimaria: '#4F006A',
      corSecundaria: '#C9AEDA', 
    },
    {
      nome:'Bagunça',
      corPrimaria: '#6A0000',
      corSecundaria: '#DAAEAE', 
    },
    {
      nome:'Maratona de Series/Filmes',
      corPrimaria: '#006A51',
      corSecundaria: '#AFDAAE', 
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

      <Footer/>

    </div>
  );
}

export default App;
