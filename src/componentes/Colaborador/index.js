import "./Colaborador.css"

const Colaborador = (props) => {
    const {fotos, nombre, puesto} = props.datos
    const {color} = props
    return <div className="colaborador">
                <div className="encabezado" style={{ backgroundColor: color }}>
                    <img src={fotos} alt={nombre}/>
                </div>
                <div className="info">
                    <h4>{nombre}</h4>
                    <h5>{puesto}</h5>
                </div>
            </div>
}

export default Colaborador