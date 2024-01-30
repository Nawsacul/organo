import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    //Pode ser passado diretamente como paramentro no onchange. Ex.: 'onChange={evento => props.aoAlterado(evento.target.value)}'
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoDigitado} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa;