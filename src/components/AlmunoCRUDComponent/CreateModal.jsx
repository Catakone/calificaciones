import { useState } from "react";
import Swal from "sweetalert2";


export const CreateModal = ({handdleSubmit, alumno = {}}) => {

    console.log("Alumno: ", alumno);
    //Crear estados para este componente
    const [nombre, setName] = useState(alumno.nombre || '');
    const [edad, setEdad] = useState(alumno.edad || '');
    const [correo, setCorreo] = useState(alumno.correo || '');
    const [password, setPassword] = useState(alumno.password || '');

    const objetoParaBackend ={
        nombre,
        edad,
        correo,
        password
    };
    


  return (

    <form className="max-w-sm mx-auto" >
    <div className="mb-5">
        <label className="block mb-2 text-sm font-medium dark:text-white">Nombre</label>
        <input
        onChange = {(event) => {
            setName(event.target.value);
        }}
        value={nombre}
        type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  required />
    </div>
    <div className="mb-5">
        <label  className="block mb-2 text-sm font-medium dark:text-white">Edad</label>
        <input
        value={edad}
        onChange = {(event) => {
            setEdad(event.target.value);
        }}
        type="number" id="age" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />
    </div>
    <div className="mb-5">
        <label className="block mb-2 text-sm font-medium dark:text-white">Correo</label>
        <input 
        value={correo}
        onChange = {(event) => {
            setCorreo(event.target.value);
        }}
        type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="ejemplito@gmail.com" required />
    </div>
    <div className="mb-5">
        <label className="block mb-2 text-sm font-medium dark:text-white">Contraseña</label>
        <input
        value={password}
        onChange = {(event) => {
            setPassword(event.target.value);
        }}
        type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />
    </div>
    <div className="w-100 flex">
        
        <button 
        
        type="submit" className=" w-1/2 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Cancelar</button>
        <button 
        onClick = {(e) => {
            e.preventDefault();
            handdleSubmit(objetoParaBackend).then(()=> {
                //reload page 
                // window.location.reload();
            }).catch((error) => {
                alert("Error: ", error);
            }
            );

        }}
        type="submit" className="w-1/2 text-white bg-owo hover:bg-owo focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Aceptar</button>  
    </div>
    </form>

  )
}

