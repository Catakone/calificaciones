import "./CalificacionesComponent.css"
import React from "react";
import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Swal from "sweetalert2";
import { CalifiModal } from "../AlmunoCRUDComponent/CalifiModal";


const customStyles = {
    content: {
      backgroundColor: "#394648",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      height: "450px",
      width: "720px",
      transform: "translate(-50%, -50%)",
    },
  };


const fetchCalificaciones = async () => {
    try {
        const response = await fetch("http://localhost:3000/calificaciones/");
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

function CalificacionesComponent() {
    const [calificaciones, setCalificaciones] = useState([]);

    useEffect(() => {
        fetchCalificaciones().then(data => setCalificaciones(data)).catch(error => console.error(error));
    }, []);

    
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
    const [isPost, setIsPost] = useState(true)

    return (
        <>
          <ReactModal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <CalifiModal
              
              handdleSubmit={async (objetoParaBackend) => {
                const settings = {
                  method: isPost ? "POST" : "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(objetoParaBackend),
                };
                const url = isPost
                  ? "http://localhost:3000/calificaciones"
                  : `http://localhost:3000/calificaciones/${alumno.id}`;
    
                fetch(url, settings)
                  .then((response) => {
                    if (response.ok) {
                      return response.json();
                    }
                    throw new Error("Error en la solicitud");
                  })
                  .then((data) => {
                    closeModal();
                    window.location.reload();
                    console.log("Respuesta: ", data);
                  })
                  .catch((error) => {
                    alert("Error al enviar los datos");
                    console.error("Error: ", error);
                  })
                  .finally(() => {
                    closeModal();
                  });
              }}
            ></CalifiModal>
          </ReactModal>
          <section style={{ height: "100vh" }}>
            <div
              className=""
              style={{ backgroundColor: "#394648", height: "100%", color: "white" }}
            >
              <div className="flex flex-col px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className=" pt-20 text-left">
                  <h3 className="text-4xl font-questrial  text-white flex-r">
                    Calificaciones
                  </h3>
                  <button
                    onClick={(e) => {
                      /* setCalificaciones({
                        nombre: "",
                        materia: "",
                        calificacion: "",
                      });
                      setIsPost(true);
                      */
                      openModal();
                    }}
                    id="sumbitButon"
                    className=" text-white bg-owo hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Agregar Calificacion
                  </button>
                </div>
    
                <div>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Nombre
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Español
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Matemáticas
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Historia
                          </th>

                        </tr>
                      </thead>
                      <tbody>
                        {calificaciones.map((calificacion) => {
                          const { alumno, materias } = calificacion;
                          const [materia1, materia2, materia3] = materias;
                          const spanish = materias.find((materia) => materia.nombre === "Español");
                          const math = materias.find((materia) => materia.nombre === "Matemáticas");
                          const history = materias.find((materia) => materia.nombre === "Historia");
                          return (
                            <tr
                              key={alumno}
                              className="odd:bg-white even:bg-gray-50 dark:border-gray-700 text-center"
                            >
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                              >
                                {alumno}
                              </th>
                              <td className="px-6 py-4 text-gray-900">{spanish?.calificacion ?? 0}</td>
                              <td className="px-6 py-4 text-gray-900">{math?.calificacion ?? 0}</td>
                              <td className="px-6 py-4 text-gray-900">{history?.calificacion ?? 0}</td>
                             
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                 
                </div>
              </div>
              <hr />
          
            </div>
          </section>
        </>
      );
}

export default CalificacionesComponent;