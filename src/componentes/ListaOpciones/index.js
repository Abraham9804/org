import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    const equipos = ["Programación", "Front End", "Data Science", "Devops", "UX y Diseño", "Móvil", "Innovación y  Gestión"]

    const capturarValor = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="container__opciones">
                <label>Equipos</label>
                <select value={props.valor} onChange={capturarValor}>
                    <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                    {
                    equipos.map((equipo, index)=>{
                        return <option key={index} value={equipo}>{equipo}</option>
                    })
                    
                    }
                </select>
            </div>
}

export default ListaOpciones