import "./Equipo.css"

const Equipo = (props) => {
    const {titulo, colorDestaque, colorFondo} = props.datos
    const background = { backgroundColor: colorFondo }
    const borderBottom = {borderColor: colorDestaque}

    return <section className="equipo" style={background}>
                <h3 style={borderBottom}>{titulo}</h3>
                <div className="colaboradores">

                </div>
            </section>
}

export default Equipo