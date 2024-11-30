import "./CampoTexto.css"
const CampoTexto = (props) => {
    const placeholderMod = `${props.placeholder}...`
    return <div className="campo__texto">
                <label>{props.name}</label>
                <input type="text" placeholder={placeholderMod} required={props.required}/>
            </div>
}

export default CampoTexto