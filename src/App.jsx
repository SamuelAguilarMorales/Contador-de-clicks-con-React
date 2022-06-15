import './App.css';
import FreeCodeCampLogo from './img/FreeCodeCamp_logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setNumClics(0);
  }


  return (
    <div className="App">
       <div className="freecodecamp-logo-contenedor">
         <img className='freecodecamp-logo' src={FreeCodeCampLogo} alt="Logo de FreeCodeCamp" />
       </div>
       <div className="contenedor-principal">
          <Contador 
          numClics={numClics}/>

          <Boton 
          texto = 'Click'
          esBotonDeClic = {true} 
          manejarClic = {manejarClic} />

          <Boton 
          texto = 'Reiniciar'
          esBotonDeClic = {false} 
          manejarClic = {reiniciarContador} />
       </div>
    </div>
  );
}

export default App;
