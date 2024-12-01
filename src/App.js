import { useState } from 'react';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {
  const [mostrarForm, actualizarMostrar] = useState(true)

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarForm)
  }

  return (
    <div className="App">
      <Header />
      {mostrarForm && <Formulario />}
     
      <MiOrg mostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
