import "./Campo.css"


const CampoTexto = (props) => {
    const {type="text"} = props
    function manejarCambio(e){
        props.actualizarValor(e.target.value)
    }

    const placeholderMod = `${props.placeholder}...`
    return <div className={`campo campo__${type}`}>
                <label>{props.name}</label>
                <input type={type} placeholder={placeholderMod} required={props.required} value={props.valor} onChange={manejarCambio}/>
            </div>
}

export default CampoTexto