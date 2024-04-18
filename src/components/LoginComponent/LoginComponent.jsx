import "./LoginComponent.css"
import {Outlet, Link} from "react-router-dom";
import { useState } from "react";

function LoginComponent() {
    const [correo, setCorreo] = useState('');
    const [password, setContraseña] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [isLoading, setIsLoading] = useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);
        
            try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ correo, password })
            });
        
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Error de autenticación');
            }
        
            // Aquí puedes manejar la respuesta exitosa, por ejemplo, redirigir al usuario a otra página
            console.log('Usuario autenticado:', data);
            //enviar a la pagina home
            window.location.href = 'http://localhost:5173/';
            
            } catch (error) {
            setMensaje(error.message);
            } finally {
            setIsLoading(false);
            }
        };

        return (
            <section>
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-3xl shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-uwu dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h3 className="text-4xl font-questrial text-center leading-tight tracking-tight text-gray-900 dark:text-white">
                      Inicia Sesión
                    </h3>
        
                    <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>  
                      <div>
                        <label className="font-questrial text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">Correo:</label>
                        <input 
                          id="correo" 
                          name="correo" 
                          placeholder="Correo" 
                          type="text" 
                          value={correo} 
                          onChange={(e) => setCorreo(e.target.value)} 
                          className="font-questrial bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-11/12 ml-2 p-2.5" 
                          required
                        />
                      </div>
                      <div>
                        <label className="font-questrial text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">Contraseña:</label>
                        <input 
                          type="password" 
                          id="contraseña" 
                          name="contraseña" 
                          placeholder="••••••••" 
                          value={password} 
                          onChange={(e) => setContraseña(e.target.value)} 
                          className="font-questrial bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-11/12 ml-2 p-2.5" 
                          required
                        />
                      </div>
                      {mensaje && <p>{mensaje}</p>}
                      <p className="font-questrial text-sm font-light text-gray-500 dark:text-gray-400">
                        ¿No tienes cuenta? <Link to="/registro" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Regístrate</Link>
                      </p>
                      <button 
                        type="submit" 
                        disabled={isLoading} 
                        className="text-white bg-owo hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        {isLoading ? "Cargando..." : "Iniciar Sesión"}
                      </button>
                    </form>
                  </div>
                </div>
              <hr />
              <Outlet/>
              </div>
            </section>
          );
        }


export default LoginComponent;