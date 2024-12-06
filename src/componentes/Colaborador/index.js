import "./Colaborador.css"
import { IoMdCloseCircle } from "react-icons/io";

const Colaborador = (props) => {
    const {foto, nombre, puesto} = props.datos
    const {color,eliminarColab} = props
    return <div className="colaborador">
            <IoMdCloseCircle onClick={eliminarColab} className="eliminar"/>
                <div className="encabezado" style={{ backgroundColor: color }}>
                    <img src={foto} alt={nombre}/>
                </div>
                <div className="info">
                    <h4>{nombre}</h4>
                    <h5>{puesto}</h5>
                </div>
            </div>
}

export default Colaborador