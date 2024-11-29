import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"



function Formulario(){
    function enviarForm(e){
        e.preventDefault()
        console.log("Form enviado")
    }

    return <section className="secction__form">
                <form onSubmit={enviarForm}>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <CampoTexto name="Nombre" placeholder="Ingresar nombre"/>
                    <CampoTexto name="Puesto" placeholder="Ingresar puesto"/>
                    <CampoTexto name="Foto" placeholder="Ingresar enlace de foto"/>
                    <ListaOpciones />
                    <Boton> 
                        Crear
                    </Boton>
                </form>
            </section>
}

export default Formulario
