import './App.css';
 import NavbarComponent from './components/NavbarComponent/NavbarComponent';  
//import RegistroComponent from './components/RegistroComponent/RegistroComponent';
//import LoginComponent from './components/LoginComponent/LoginComponent';
import ReprobadosComponent from './components/ReprobadosComponent/ReprobadosComponent';
import CalificacionesComponent from './components/CalificacionesComponent/CalificacionesComponent';
function App() {
  return(
    <div>
      <div>
        <NavbarComponent></NavbarComponent>
      </div>
      {/* <div>
        <RegistroComponent></RegistroComponent>
      </div> */}
      {/* <div>
        <LoginComponent></LoginComponent>
      </div> */}
      {/* <div>
        <CalificacionesComponent></CalificacionesComponent>
      </div> */}
      <div>
        <ReprobadosComponent></ReprobadosComponent>
      </div>


    </div>
    
    
    
  );
 
 
}

export default App;
