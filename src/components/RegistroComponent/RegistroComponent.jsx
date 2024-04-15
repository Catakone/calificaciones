import "./RegistroComponent.css"
import { useState } from "react";

function RegistroComponent() {

    //Crear estados para este componente
    const [nombre, setName] = useState('');
    const [edad, setEdad] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const registrarUsuario = () => {
        //Crear objeto para mandar al backend
        const objetoParaBackend ={
            nombre,
            edad,
            correo,
            password
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


    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-3xl shadow  md:mt-0 sm:max-w-md xl:p-0 dark:bg-uwu dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h3 className="text-4xl font-questrial text-center leading-tight tracking-tight text-gray-900 dark:text-white">
                            Registrarse
                        </h3>

                        <form className="space-y-4 md:space-y-5">
                            <div>
                                <label className="font-questrial text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">Nombre:</label>
                                <input 
                                onChange = {(event) => {
                                    setName(event.target.value);
                                }}
                                 type="name" name="name" id="username" className="font-questrial bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-11/12 ml-2 p-2.5" placeholder="Uwu Perez" required=""/>
                            </div>
                            <div>
                                <label className="font-questrial text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">Edad:</label>
                                <input
                                onChange = {(event) => {
                                    setEdad(event.target.value);
                                }}
                                 type="number" name="number" id="number" className="font-questrial bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-11/12 ml-2 p-2.5" placeholder="20" required=""/>
                            </div>
                            <div>
                                <label className="font-questrial text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">Correo:</label>
                                <input
                                onChange = {(event) => {
                                    setCorreo(event.target.value);
                                }}
                                 type="email" name="email" id="email" className="font-questrial bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-11/12 ml-2 p-2.5" placeholder="uwu20perez@gmail.conm" required=""/>
                            </div>
                            <div>
                                <label className="font-questrial text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">Contraseña:</label>
                                <input
                                onChange = {(event) => {
                                    setPassword(event.target.value);
                                }} 
                                type="password" name="password" id="password" placeholder="••••••••" className="font-questrial bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-11/12 ml-2 p-2.5" required=""/>
                            </div>
                            <p className="font-questrial text-sm font-light text-gray-500 dark:text-gray-400">
                                ¿Tienes cuenta? <a href="" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Inicia Sesión</a>
                            </p>
                            <button
                            onClick = {() => {
                                registrarUsuario();
            
                            }} id="sumbitButon" className=" text-white bg-owo hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Registrarse</button>
                            

                        </form>

                    </div>

                </div>

            </div>
        </section>

    );
}


export default RegistroComponent;