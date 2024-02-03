import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (
        //poderia ser props.colaboradores.length > 0 && ao invés do ternário
        (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: hexToRgba(props.cor, 0.5), backgroundImage: 'url(/imagens/fundo.png)' }}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type='color' className='input-cor' />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador
                            key={indice}
                            id={colaborador.id}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            corDeFundo={props.cor}
                            aoDeletar={props.aoDeletar}
                        />
                    )
                })}
            </div>
        </section>
            : ''
    );
}

export default Time;