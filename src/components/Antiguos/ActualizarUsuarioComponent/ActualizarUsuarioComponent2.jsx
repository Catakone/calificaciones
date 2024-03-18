import {useState} from "react";
import "./ActualizarUsuarioComponent.css";

function ActualizarUsuarioComponent() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    const actualizarUsuario = () => {
        const objetoParaBackend = {
            name,
            email,
            age
        };

        const settings = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objetoParaBackend),
        };

        fetch(`http://localhost:3000/usuarios/${id}`, settings)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Error en la solicitud");
            })
            .then((data) => {
                console.log("Usuario actualizado:", data);
            })
            .catch((error) => {
                console.error("Error", error);
            });
    };

    return(
        <div>
            <div>
                <label>ID de Usuario</label>
                <input
                    type="text"
                    name="inputIdUsuario"
                    id="inputIdUsuario"
                    placeholder="ID del usuario a actualizar"
                    onBlur={(event) => {
                        setId(event.target.value);
                    }}
                />
            </div>
            <div>
                <label>Nombre</label>
                <input
                    type="text"
                    name="inputNombre"
                    id="inputNombre"
                    placeholder="Nuevo nombre"
                    onBlur={(event) => {
                        setName(event.target.value);
                    }}
                />
            </div>
            <div>
                <label>Correo</label>
                <input
                    type="text"
                    name="inputCorreo"
                    id="inputCorreo"
                    placeholder="Nuevo correo"
                    onBlur={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </div>
            <div>
                <label>Edad</label>
                <input
                    type="text"
                    name="inputEdad"
                    id="inputEdad"
                    placeholder="Nueva edad"
                    onBlur={(event) => {
                        setAge(event.target.value);
                    }}
                />
            </div>
            <div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={actualizarUsuario}>Actualizar Usuario</button>
            </div>
        </div>

    )
}

export default ActualizarUsuarioComponent;