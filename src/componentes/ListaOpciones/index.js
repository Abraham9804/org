import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    const listaEquipos = props.equipos

    const capturarValor = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="container__opciones">
                <label>Equipos</label>
                <select value={props.valor} onChange={capturarValor}>
                    <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                    {
                    listaEquipos.map((equipo, index)=>{
                        return <option key={index} value={equipo}>{equipo}</option>
                    })
                    
                    }
                </select>
            </div>
}

export default ListaOpciones