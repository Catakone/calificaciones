import {useState} from "react";
import "./ActualizarUsuarioComponent.css";

function ActualizarUsuarioComponent() {
    const [id, setId] = useState("");
    const [name, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState(0);

    const actualizarUsuario = () => {
        const ObjetoParaBack = {
            name,
            email,
            edad
        };

        const ajustes = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ObjetoParaBack),
        };

        fetch(`http://localhost:3000/usuarios/${id}`, ajustes)
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

    return (
        <div className="actualizar-usuario-container">
            <div className="input-container">
                <label className="input-label">ID de Usuario</label>
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
            <div className="input-container">
                <label className="input-label">Nombre</label>
                <input
                    type="text"
                    name="inputNombre"
                    id="inputNombre"
                    placeholder="Nuevo nombre"
                    onBlur={(event) => {
                        setNombre(event.target.value);
                    }}
                />
            </div>
            <div className="input-container">
                <label className="input-label">Email</label>
                <input
                    type="text"
                    name="inputEmail"
                    id="inputEmail"
                    placeholder="Nuevo email"
                    onBlur={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </div>
            <div className="input-container">
                <label className="input-label">Edad</label>
                <input
                    type="number"
                    name="inputEdad"
                    id="inputEdad"
                    placeholder="Nueva edad"
                    onBlur={(event) => {
                        setEdad(parseInt(event.target.value));
                    }}
                />
            </div>
            <div className="button-container">
                <button onClick={() => actualizarUsuario()}>Actualizar Usuario</button>
            </div>
        </div>
    );
}

export default ActualizarUsuarioComponent;
