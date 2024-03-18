import {useState} from "react";
import "./EliminarUsuararioComponent.css";

function EliminarUsuararioComponent() {
    const [id, setId] = useState("");

    const eliminarUsuario = () => {
        const ajustes = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };

        fetch(`http://localhost:3000/usuarios/${id}`, ajustes)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Error en la solicitud");
            })
            .then((data) => {
                console.log("Usuario eliminado:", data);

            })
            .catch((error) => {
                console.error("Error", error);
            });
    };

    return (
        <div className="eliminar-usuario-container"> 
            <div className="label-container"> 
                <label className="input-usuario">ID de Usuario</label>
                <input
                    type="text"
                    name="inputIdUsuario"
                    id="inputIdUsuario"
                    placeholder="ID del usuario a eliminar"
                    onBlur={(event) => {
                        setId(event.target.value);
                    }}
                />
            </div>
            <div className="button-container"> { }
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => eliminarUsuario()}>Eliminar Usuario</button>
            </div>
        </div>
    );
}

export default EliminarUsuararioComponent;