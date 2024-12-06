import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {
    const {titulo, colorDestaque, colorFondo} = props.datos
    const {colaboradores, eliminarColab, cambiarColor} = props
    
    const background = { backgroundColor: colorFondo }
    const borderBottom = {borderColor: colorDestaque}
    
    const recibirColor = (e) => {
        cambiarColor(e.target.value, titulo)
    }

    return <>
     { colaboradores.length > 0 &&
        <section className="equipo" style={background}>
            <input type="color" value={colorDestaque} onChange={recibirColor} className="inputColor"/>
            <h3 style={borderBottom}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} color={colorDestaque} eliminarColab={eliminarColab}/>)
                }
            </div>
        </section>
     }   
    </>
        
}

export default Equipo