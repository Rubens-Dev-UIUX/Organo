import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer/Index';
import { v4 as uuidv4 } from 'uuid';
import Membro from './componentes/Membro';


function App() {

    // Altere os times aqui ⬇️
    // Altere as cores aqui ⬇️

  const [ times, setTimes ] = useState([
    {
      id: uuidv4(),
      nome: 'Limpeza e Organização',
      cor: '#686A00'
    },
    {
      id: uuidv4(),
      nome:'Compras e Feira',
      cor: '#00446A'
    },
    {
      id: uuidv4(),
      nome:'Wild Rift (LOL)',
      cor: '#4F006A'
    },
    {
      id: uuidv4(),
      nome:'Bagunça',
      cor: '#6A0000'
    },
    {
      id: uuidv4(),
      nome:'Maratona de Series/Filmes',
      cor: '#006A51'
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Rubens',
      status: 'Meditando',
      imagem: 'https://avatars.githubusercontent.com/u/53584262?v=4',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Mauricio',
      status: 'De ferias',
      imagem: 'https://avatars.githubusercontent.com/u/70400071?v=4',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Rubens',
      status: 'Meditando',
      imagem: 'https://avatars.githubusercontent.com/u/53584262?v=4',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Mauricio',
      status: 'De ferias',
      imagem: 'https://avatars.githubusercontent.com/u/70400071?v=4',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Rubens',
      status: 'Meditando',
      imagem: 'https://avatars.githubusercontent.com/u/53584262?v=4',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Mauricio',
      status: 'De ferias',
      imagem: 'https://avatars.githubusercontent.com/u/70400071?v=4',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Rubens',
      status: 'Meditando',
      imagem: 'https://avatars.githubusercontent.com/u/53584262?v=4',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Mauricio',
      status: 'De ferias',
      imagem: 'https://avatars.githubusercontent.com/u/70400071?v=4',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Rubens',
      status: 'Meditando',
      imagem: 'https://avatars.githubusercontent.com/u/53584262?v=4',
      time: times[4].nome
    },
    {
      id: uuidv4(), 
      nome: 'Mauricio',
      status: 'De ferias',
      imagem: 'https://avatars.githubusercontent.com/u/70400071?v=4',
      time: times[4].nome
    },

  ]

  const [membros, setMembros] = useState(inicial)

  function deletarMembro(id) {
    setMembros(membros.filter( membro => membro.id != id)); 
  }

  function mudarCorTime( cor, id ) {
    setTimes(times.map(time => {
      if(time.id === id ) {
        time.cor = cor;
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
