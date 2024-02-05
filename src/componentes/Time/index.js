import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = ({ colaboradores, cor, mudarCor, id, nome, aoDeletar, aoFavoritar }) => {
    console.log(colaboradores)

    return (
        //poderia ser props.colaboradores.length > 0 && ao invés do ternário
        (colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: hexToRgba(cor, 0.5), backgroundImage: 'url(/imagens/fundo.png)' }}>
            <input
                onChange={evento => mudarCor(evento.target.value, id)}
                value={cor}
                type='color'
                className='input-cor'
            />
            <h3 style={{ borderColor: cor }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador
                            key={indice}
                            favorito={colaborador.favorito}
                            id={colaborador.id}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            corDeFundo={cor}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>
            : ''
    );
}

export default Time;