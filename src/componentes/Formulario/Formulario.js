import "./Formulario.css"
import CampoTexto from "../CampoTexto"

function Formulario(){
    return <section className="secction__form">
                <form>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <CampoTexto name="Nombre" placeholder="Ingresar nombre"/>
                    <CampoTexto name="Puesto" placeholder="Ingresar puesto"/>
                    <CampoTexto name="Foto" placeholder="Ingresar enlace de foto"/>
                </form>
            </section>
}

export default Formulario
