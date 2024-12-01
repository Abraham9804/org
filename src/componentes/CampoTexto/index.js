import { useState } from "react"
import "./CampoTexto.css"


const CampoTexto = (props) => {
    
    function manejarCambio(e){
        props.actualizarValor(e.target.value)
    }

    const placeholderMod = `${props.placeholder}...`
    return <div className="campo__texto">
                <label>{props.name}</label>
                <input type="text" placeholder={placeholderMod} required={props.required} value={props.valor} onChange={manejarCambio}/>

            </div>
}

export default CampoTexto