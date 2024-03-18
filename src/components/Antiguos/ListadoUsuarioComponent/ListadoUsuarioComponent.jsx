import "./ListadoUsuarioComponent.css";
import {useState} from "react";

function ListadoUsuarioComponent(){
    const [usuario, setUsuario] = useState([]);

    const getUsuarios = async() =>{
             try {
                 const response = await fetch("http://localhost:3000/usuarios");
                 const jsonData = await response.json();
                 console.log(jsonData);
                 setUsuario(jsonData);
             }
             catch (error){
                 console.error("Error fetching data: ", error)
             }
    
         };

         return (
            <div>
                <div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={()=>{
                            getUsuarios();
                        }}>
                            Mostrar usuario owo
                    </button>
                </div>
                

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    Correo
                </th>
                <th scope="col" className="px-6 py-3">
                    Edad
                </th>
            </tr>
        </thead>
        <tbody>
            {usuario.map((usuario)=>(
            <tr key={usuario._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {usuario.name}
                </th>
                <td className="px-6 py-4">
                {usuario.email}
                </td>
                <td className="px-6 py-4">
                {usuario.age}
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

        
            </div>
        
        );
}

export default ListadoUsuarioComponent;