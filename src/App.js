import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer/Index';


function App() {

    // Altere os times aqui ⬇️
    // Altere as cores aqui ⬇️

  const [ times, setTimes ] = useState([
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
  ])

  const inicial = [
    {
      nome: 'Rubens',
      status: 'Meditando',
      imagem: 'https://avatars.githubusercontent.com/u/53584262?v=4',
      time: times[0].nome
    },
    {
      nome: 'Mauricio',
      status: 'De ferias',
      imagem: 'https://avatars.githubusercontent.com/u/70400071?v=4',
      time: times[0].nome
    },
    {
      nome: 'Rubens',
      status: 'Meditando',
      imagem: 'https://avatars.githubusercontent.com/u/53584262?v=4',
      time: times[1].nome
    },
    {
      nome: 'Mauricio',
      status: 'De ferias',
      imagem: 'https://avatars.githubusercontent.com/u/70400071?v=4',
      time: times[1].nome
    },
    {
      nome: 'Rubens',
      status: 'Meditando',
      imagem: 'https://avatars.githubusercontent.com/u/53584262?v=4',
      time: times[2].nome
    },
    {
      nome: 'Mauricio',
      status: 'De ferias',
      imagem: 'https://avatars.githubusercontent.com/u/70400071?v=4',
      time: times[2].nome
    },
    {
      nome: 'Rubens',
      status: 'Meditando',
      imagem: 'https://avatars.githubusercontent.com/u/53584262?v=4',
      time: times[3].nome
    },
    {
      nome: 'Mauricio',
      status: 'De ferias',
      imagem: 'https://avatars.githubusercontent.com/u/70400071?v=4',
      time: times[3].nome
    },
    {
      nome: 'Rubens',
      status: 'Meditando',
      imagem: 'https://avatars.githubusercontent.com/u/53584262?v=4',
      time: times[4].nome
    },
    {
      nome: 'Mauricio',
      status: 'De ferias',
      imagem: 'https://avatars.githubusercontent.com/u/70400071?v=4',
      time: times[4].nome
    },

  ]

  const [membros, setMembros] = useState(inicial)

  function deletarMembro() {
    console.log('Deletando Membro')
  }

  function mudarCorTime( cor, nome ) {
    setTimes(times.map(time => {
      if(time.nome === nome ) {
        time.corPrimaria = cor;
      }
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrarMembro={membro => setMembros([...membros, membro])} />

      {times.map((time, indice ) => 
      <Time
      mudarCor={mudarCorTime}
      key={indice} 
      time={time}
      membros={membros.filter(membro => membro.time === time.nome)}
      aoDeletar={deletarMembro}
      />)}

      <Footer/>

    </div>
  );
}

export default App;
