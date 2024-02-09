import { useEffect, useReducer, useState } from 'react';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid'; //alias, apelido para alguma coisa. Poderia ser v4 as banana;
import reducer, { CADASTRAR_MEMBRO, CADASTRAR_MEMBRO_API, DELETAR_MEMBRO, RESOLVER_FAVORITO } from './reducer';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
      id: uuidv4()

    },
    {
      nome: 'Front-end',
      cor: '#82CFFA',
      id: uuidv4()

    },
    {
      nome: 'Back-end',
      cor: '#34495E',
      id: uuidv4()

    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
      id: uuidv4()

    },
    {
      nome: 'Devops',
      cor: '#E06B69',
      id: uuidv4()

    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF',
      id: uuidv4()

    },
    {
      nome: 'Mobile',
      cor: '#FFBA05',
      id: uuidv4()

    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
      id: uuidv4()
    }
  ]);

  const [colaboradores, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetch('http://localhost:8080/colaboradores')
      .then(resposta => resposta.json())
      .then(dados => {
        dispatch({
          tipo: CADASTRAR_MEMBRO_API,
          colaboradores: dados
        })
      })
      .catch(e => console.log('Deu erro:' + e))
  }, [])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    dispatch({
      tipo: CADASTRAR_MEMBRO,
      colaborador
    })
  };

  const deletarColaborador = (id) => {
    dispatch({
      tipo: DELETAR_MEMBRO,
      id
    })
  }

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }

      return time;
    }));
  };

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  };

  const resolverFavorito = (id) => {
    dispatch({
      tipo: RESOLVER_FAVORITO,
      id: id
    });
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {times.map((time, indice) =>
        <Time
          id={time.id}
          key={indice}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
          aoFavoritar={resolverFavorito}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
