import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"



function Formulario(props){
    const equipoTitulo = props.equipos
    
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [fotos, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    function enviarForm(e){
        e.preventDefault()
        let datosEnviar = {
            nombre, 
            puesto,
            fotos,
            equipo
        }
        props.registrar(datosEnviar)
    }

    return <section className="secction__form">
                <form onSubmit={enviarForm}>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <CampoTexto name="Nombre" placeholder="Ingresar nombre" required={true} valor={nombre} actualizarValor={setNombre}/>
                    <CampoTexto name="Puesto" placeholder="Ingresar puesto" required={true} valor={puesto} actualizarValor={setPuesto}/>
                    <CampoTexto name="Foto" placeholder="Ingresar enlace de foto" required={true} valor={fotos} actualizarValor={setFoto}/>
                    <ListaOpciones valor={equipo} actualizarValor={setEquipo} equipos={equipoTitulo}/>
                    <Boton> 
                        Crear
                    </Boton>
                </form>
            </section>
}

export default Formulario
