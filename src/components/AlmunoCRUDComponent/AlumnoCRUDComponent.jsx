import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { CreateModal } from "./CreateModal";
import Swal from "sweetalert2";

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

function AlumnoCRUDComponent() {
  //OwO
  const [alumnos, setAlumnos] = useState([]);
  const [alumno, setAlumno] = useState({});
  const [isPost, setIsPost] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const fetchAlumnos = async () => {
    try {
      const response = await fetch("http://localhost:3000/usuarios");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchAlumnos()
      .then((data) => setAlumnos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <CreateModal
          alumno={alumno}
          handdleSubmit={async (objetoParaBackend) => {
            const settings = {
              method: isPost ? "POST" : "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(objetoParaBackend),
            };
            const url = isPost
              ? "http://localhost:3000/usuarios"
              : `http://localhost:3000/usuarios/${alumno.id}`;

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
        ></CreateModal>
      </Modal>
      <section style={{ height: "100vh" }}>
        <div
          className=""
          style={{ backgroundColor: "#394648", height: "100%", color: "white" }}
        >
          <div className="flex flex-col px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className=" pt-20 text-left">
              <h3 className="text-4xl font-questrial  text-white flex-r">
                Alumnos
              </h3>
              <button
                onClick={(e) => {
                  setAlumno({
                    edad: "",
                    nombre: "",
                    correo: "",
                    password: "",
                  });
                  setIsPost(true);
                  openModal(e);
                }}
                id="sumbitButon"
                className=" text-white bg-owo hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Agregar Alumno
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
                        Edad
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Correo
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Contraseña
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Accion
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {alumnos.map((alumno) => {
                      const { nombre, correo, edad, password } = alumno;
                      return (
                        <tr
                          key={alumno}
                          className="odd:bg-white even:bg-gray-50 dark:border-gray-700 text-center"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {nombre}
                          </th>
                          <td className="px-6 py-4 text-gray-900">{edad}</td>
                          <td className="px-6 py-4 text-gray-900">{correo}</td>
                          <td className="px-6 py-4 text-gray-900">
                            {password}
                          </td>

                          <td className="px-6 py-4">
                            <button
                              onClick={(e) => {
                                setAlumno(alumno);
                                console.log(alumno);
                                setIsPost(false);
                                /*                                                             setIsPost(false)
                                 */ openModal();
                              }}
                              className="font-medium text-blue-600 hover:underline p-4"
                            >
                              Edit
                            </button>

                            <button
                              onClick={async (e) => {
                                Swal.fire({
                                  title: "¿Estás seguro?",
                                  text: "¡No podrás revertir esto!",
                                  icon: "warning",
                                  /* showCancelButton: true,
                                   confirmButtonColor: "#3085d6",
                                   cancelButtonColor: "#d33",
                                   confirmButtonText: "Si, eliminar",
                                   cancelButtonText: "Cancelar", */
                                }).then(async (result) => {





                                  if (!result.isConfirmed) {
                                    return;
                                  }
                                  fetch(
                                    `http://localhost:3000/usuarios/${alumno.id}`,
                                    {
                                        method: "DELETE",
                                        
                                    }
                                  ).then((response) => {
                                    Swal.fire(
                                        "¡Eliminado!",
                                        "El alumno ha sido eliminado.",
                                        "success"
                                        ).then(()=> {
                                            window.location.reload()
                                        });
                                  }).catch((error) => {
                                    alert("Error al enviar los datos");
                                    console.error("Error: ", error);
                                  });







                                });
                              }}
                              className="font-medium text-red-600 hover:underline"
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <hr />
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default AlumnoCRUDComponent;
