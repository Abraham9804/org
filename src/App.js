import { useState } from 'react';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() {
  const [mostrarForm, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarListaColab] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysrm.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://www.github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const [equipos, actualizarEquipo] = useState([
    {
      titulo: "Programación",
      colorDestaque: "#57C278",
      colorFondo: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorDestaque: "#82CFFA",
      colorFondo: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorDestaque: "#A6D157",
      colorFondo: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorDestaque: "#E06B69",
      colorFondo: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorDestaque: "#DB6EBF",
      colorFondo: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorDestaque: "#FFBA05",
      colorFondo: "#FFF5D9"
    },
    {
      titulo: "Innovación y  Gestión",
      colorDestaque: "#FF8A29",
      colorFondo: "#FFEEDF"
    }
  ])

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarForm)
  }

  const registrarColab = (colab) => {
    actualizarListaColab([...colaboradores, colab])
  }

  const eliminarColab = () => {
    console.log("Eliminar colaborador")
  }

  const cambiarColor = (color, titulo) => {
    const equiposActualizado = equipos.map((equipo)=>{
        if(equipo.titulo === titulo){
          equipo.colorDestaque = color
        }

        return equipo
    })
    actualizarEquipo(equiposActualizado)
  }

  return (
    <div className="App">
      <Header />
      {mostrarForm && <Formulario equipos={equipos.map(equipo => equipo.titulo)} registrar={registrarColab}/>}
     
      <MiOrg mostrar={cambiarMostrar}/>

      {
        equipos.map((equipo) => <Equipo datos={equipo} eliminarColab={eliminarColab} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        cambiarColor={cambiarColor}/>
        )
      }
    </div>
  );
}

export default App;
