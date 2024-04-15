import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import RegistroComponent from './components/RegistroComponent/RegistroComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import ReprobadosComponent from './components/ReprobadosComponent/ReprobadosComponent';
import CalificacionesComponent from './components/CalificacionesComponent/CalificacionesComponent';
import Pruebas from './components/Pruebas/pruebas';
import HomeComponent from './components/HomeComponent/HomeComponent';
import {Routes, Route} from 'react-router-dom';
import AlumnoCRUDComponent from './components/AlmunoCRUDComponent/AlumnoCRUDComponent';

//Modal de pruebas



function App() {



  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route path="/login" element={<LoginComponent/>}></Route>
        <Route path="/registro" element={<RegistroComponent/>}></Route>
        <Route path="/reprobados" element={<ReprobadosComponent/>}></Route>
        <Route path="/calificaciones" element={<CalificacionesComponent/>}></Route>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/AlumnosCrud" element={<AlumnoCRUDComponent/>}></Route>
      </Routes>
      <div>
        {/* <Pruebas></Pruebas> */}
        
      </div>



    </div>



  );


}


export default App;

