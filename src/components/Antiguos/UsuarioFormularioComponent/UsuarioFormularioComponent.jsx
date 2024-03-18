import "./UsuarioFormularioComponent.css";
import {useState} from "react";
function UsuarioFormularioComponent(){

//Crear estados para este componente
const [name, getName] = useState('');
const [email, getEmail] = useState('');
const [age, getAge] = useState('');


const registrarUsuario = () => {
    //Crear objeto para mandar al backend
    const objetoParaBackend ={
        name,
        email,
        age
    };
    const settings = {
        method: "POST", //metodo http
        headers: {
            "Content-Type": "application/json" //tipo de contenido que se enviara
        },
        body: JSON.stringify(objetoParaBackend), //convertir el objeto javascript a formato json
    };


    //realizar la solicitud utilizando fetch
    fetch("http://localhost:3000/usuarios", settings)
    .then((response) => {
        //verificar si la solicitud fue exitosa
        if(response.ok){
            //procesa la respuesta
            return response.json(); //convertir la respuesta a json
        }
        //si la solicitud falla lanzar un error
        throw new Error("Error en la solicitud");
    })
    .then((data) => {
        //manejar los datos de la respuesta
        console.log("Respuesta: ", data);
    })
    .catch((error) => {
        //capturar y manejar cualquier error que ocurrra durante la solicitud
        console.error("Error: ", error);
    });
}

//opciones de configuracion para la solicitut post


    return (
        <div>
                        
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                        <input 
                        type = "text" 
                        name = "inputName"
                        id="inputName"
                        onChange = {(event) => {
                            getName(event.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introduce tu nombre" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edad</label>
                        <input 
                        type = "text" 
                        name = "inputEmail"
                        id="inputEmail"
                        onChange = {(event) => {
                            getEmail(event.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introduce tu email" required />
                    </div> 
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                        <input 
                        type = "number" 
                        name = "inputAge"
                        id="inputAge"
                        onChange = {(event) => {
                            getAge(event.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introduce tu edad" required />
                    </div>                   
                </div>
               
                
                <button 
                onClick = {() => {
                    registrarUsuario();

                }} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar usuario</button>
            </form>


            
        </div>
        
    );
}

export default UsuarioFormularioComponent;