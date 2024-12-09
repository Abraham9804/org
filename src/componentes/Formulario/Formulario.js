import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"



function Formulario(props){
    const equipoTitulo = props.equipos
    
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    function enviarForm(e){
        e.preventDefault()
        let datosEnviar = {
            nombre, 
            puesto,
            foto,
            equipo
        }
        props.registrar(datosEnviar)
    }

    function enviarEquipo(e){
        e.preventDefault()
        let datosenviarEquipo = {
            titulo,
            colorDestaque: color
        }
        props.registrarEquipo(datosenviarEquipo)
    }

    return <section className="secction__form">
                <form onSubmit={enviarForm}>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <Campo name="Nombre" placeholder="Ingresar nombre" required={true} valor={nombre} actualizarValor={setNombre}/>
                    <Campo name="Puesto" placeholder="Ingresar puesto" required={true} valor={puesto} actualizarValor={setPuesto}/>
                    <Campo name="Foto" placeholder="Ingresar enlace de foto" required={true} valor={foto} actualizarValor={setFoto}/>
                    <ListaOpciones valor={equipo} actualizarValor={setEquipo} equipos={equipoTitulo}/>
                    <Boton> 
                        Crear
                    </Boton>
                </form>

                <form onSubmit={enviarEquipo}>
                    <h2>Rellena el formulario para crear el equipo.</h2>
                    <Campo name="Titulo" placeholder="Ingresar titulo" required={true} valor={titulo} actualizarValor={setTitulo}/>
                    <Campo name="Color" type="color" placeholder="Ingresar color" required={true} valor={color} actualizarValor={setColor}/>
                    <Boton> 
                        Crear Equipo
                    </Boton>
                </form>
            </section>
}

export default Formulario
