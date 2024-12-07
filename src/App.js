import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() {
  const [mostrarForm, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarListaColab] = useState([{
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/genesysrm.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://www.github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const [equipos, actualizarEquipo] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorDestaque: "#57C278",
      colorFondo: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorDestaque: "#82CFFA",
      colorFondo: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorDestaque: "#A6D157",
      colorFondo: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorDestaque: "#E06B69",
      colorFondo: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorDestaque: "#DB6EBF",
      colorFondo: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorDestaque: "#FFBA05",
      colorFondo: "#FFF5D9"
    },
    {
      id: uuidv4(),
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

  const registrarEquipo = (nuevoEquipo) => {
    actualizarEquipo([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }

  const eliminarColab = (id) => {
    const colaboradoresActual = colaboradores.filter(colaborador => colaborador.id !== id)
    actualizarListaColab(colaboradoresActual)
    console.log("Eliminar colaborador ", id)
  }

  const cambiarColor = (color, id) => {
    const equiposActualizado = equipos.map((equipo)=>{
        if(equipo.id === id){
          equipo.colorDestaque = color
        }

        return equipo
    })
    actualizarEquipo(equiposActualizado)
  }

  return (
    <div className="App">
      <Header />
      {mostrarForm && <Formulario equipos={equipos.map(equipo => equipo.titulo)} registrar={registrarColab} registrarEquipo={registrarEquipo}/>}
     
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
