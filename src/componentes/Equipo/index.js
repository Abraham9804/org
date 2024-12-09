import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const {titulo, colorDestaque, id} = props.datos
    const {colaboradores, eliminarColab, cambiarColor, like} = props
    
    const background = {backgroundColor: hexToRgba(colorDestaque,0.6)}
    const borderBottom = {borderColor: colorDestaque}
    
    const recibirColor = (e) => {
        cambiarColor(e.target.value, id)
    }

    return <>
     { colaboradores.length > 0 &&
        <section className="equipo" style={background}>
            <input type="color" value={colorDestaque} onChange={recibirColor} className="inputColor"/>
            <h3 style={borderBottom}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} color={colorDestaque} eliminarColab={eliminarColab} like={like}/>)
                }
            </div>
        </section>
     }   
    </>
        
}

export default Equipo