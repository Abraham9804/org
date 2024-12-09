import "./Colaborador.css"
import { IoMdCloseCircle} from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const Colaborador = (props) => {
    const {foto, nombre, puesto, id, fav} = props.datos
    const {color,eliminarColab, like} = props

    function manejarClick(){
        like(id)
    }

    return <div className="colaborador">
            <IoMdCloseCircle onClick={() => eliminarColab(id)} className="eliminar"/>
                <div className="encabezado" style={{ backgroundColor: color }}>
                    <img src={foto} alt={nombre}/>
                </div>
                <div className="info">
                    <h4>{nombre}</h4>
                    <h5>{puesto}</h5>
                    <div onClick={manejarClick} >
                    {fav ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
                    </div>
                    
                   
                </div>
            </div>
}

export default Colaborador