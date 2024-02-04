import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; //alias, apelido para alguma coisa. Poderia ser v4 as banana;
import { ReactComponent as AddLogo } from './botao-add.svg'

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            id: uuidv4()
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const [toggleFormulario, setToggleFormulario] = useState('flex')

    const esconderFormulario = () => {
        setToggleFormulario(toggleFormulario === 'flex' ? 'none' : 'flex')
    }

    return (
        <section className='form-container'>
            <div className='formulario' style={{ display: toggleFormulario }}>
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dadaos para criar o card do colaborador</h2>
                    <Campo
                        obrigatorio={true}
                        label="Nome"
                        placeholder="Digite seu nome"
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <Campo
                        obrigatorio={true}
                        label="Cargo"
                        placeholder="Digite seu cargo"
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />
                    <Campo
                        label="Imagem"
                        placeholder="Informe o endereço da imagem"
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa
                        obrigatorio={true}
                        label="Time"
                        itens={props.times}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                    />
                    <Botao>
                        Criar Card
                    </Botao>
                </form>
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    props.cadastrarTime({ nome: nomeTime, cor: corTime })
                }}>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <Campo
                        obrigatorio
                        label="Nome do Time"
                        placeholder="Digite o nome do Time"
                        valor={nomeTime}
                        aoAlterado={valor => setNomeTime(valor)}
                    />
                    <Campo
                        obrigatorio
                        type='color'
                        label="Cor do Time"
                        placeholder="Digite a cor do Time"
                        valor={corTime}
                        aoAlterado={valor => setCorTime(valor)}
                    />
                    <Botao>
                        Criar um novo time
                    </Botao>
                </form>
            </div>

            <div className='form-container__section-titulo'>
                <h3>Minha Organização:</h3>
                <AddLogo className='botao-toggle' alt='Esconder Formulário' onClick={esconderFormulario} />
            </div>
        </section>
    );
}

export default Formulario;