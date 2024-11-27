import "./Formulario.css"
import CampoTexto from "../CampoTexto"

function Formulario(){
    return <section className="secction__form">
                <form>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <CampoTexto/>
                    <CampoTexto/>
                    <CampoTexto/>
                </form>
            </section>
}

export default Formulario
