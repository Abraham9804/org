import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {
    const {titulo, colorDestaque, colorFondo} = props.datos
    const {colaboradores} = props
    
    const background = { backgroundColor: colorFondo }
    const borderBottom = {borderColor: colorDestaque}

    return <>
     { colaboradores.length > 0 &&
        <section className="equipo" style={background}>
            <h3 style={borderBottom}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} color={colorDestaque}/>)
                }
            </div>
        </section>
     }   
    </>
        
}

export default Equipo