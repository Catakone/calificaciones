import { useState,useEffect } from "react";
import Swal from "sweetalert2";


export const CalifiModal = ({handdleSubmit, calificacion = {}}) => {

  
    
    //
    const fetchAlumo = async () => {
        try {
          const res = await fetch("http://localhost:3000/usuarios");
          if (!res.ok) {
            throw new Error("Error al obtener los datos");
          }
          const dataa = await res.json();
          return dataa;
        } catch (error) {
          console.error("Error:", error);
        }
      }
    //Fetch de calificaciones
    const fetchAlumoCalificacion = async () => {
        try {
          const response = await fetch("http://localhost:3000/calificaciones");
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
        fetchAlumoCalificacion()
          .then((data) => setMateria(data))
          .catch((error) => console.error(error));
        fetchAlumo()
            .then((data) => setAlumnos(data))
            .catch((error) => console.error(error));
      }, []);

    console.log("Calificacion: ", calificacion);
    //Crear estados para este componente
    const [alumnos, setAlumnos] = useState([]);
    const [alumnoselect, setAlumnoselect] = useState();
    const [materia, setMateria] = useState(calificacion.materia || '');
    const [spanish, setSpanish] = useState({id_materia: "65fcd40862c99603aff37ebe", calificacion: 0});
    const [math, setMath] = useState({id_materia: "660b13565c59ce41618f18d2", calificacion: 0});
    const [history, setHistory] = useState({id_materia: "65fcd42862c99603aff37ebf", calificacion: 0});
    const [calificaciones, setCalificaciones] = useState([]); // [ {id_usuario: 1, nombre: "Juan"}, {id_usuario: 2, nombre: "Pedro"}


    const objetoParaBackend =[{
        id_usuario : alumnoselect,
        id_materia : spanish.id_materia,
        calificacion : spanish.calificacion,
    },
    {
        id_usuario : alumnoselect,
        id_materia : math.id_materia,
        calificacion : math.calificacion,
    },
    {
        id_usuario : alumnoselect,
        id_materia : history.id_materia,
        calificacion : history.calificacion,
    }
];
    


  return (

    <form className="max-w-sm mx-auto" >
    <div className="mb-5">
        <label className="block mb-2 text-sm font-medium dark:text-white">Alumno</label>
        <select
        onChange={(event) => {
            setAlumnoselect(event.target.value);
            console.log("Alumno: ", event.target.value );
            console.log("español: ", spanish);
            console.log("matematicas: ", math);
            console.log("historia: ", history);
        }}
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
      <option selected>Seleccione un alumno</option>
      {alumnos.map((alumno) => (
        <option value={alumno.id} key={alumno.id}>{alumno.nombre}</option>
      ))}
    </select>
    </div>
    


    <div className="mb-5">
        <label  className="block mb-2 text-sm font-medium dark:text-white">Español</label>
        <input
        onChange={(event) => {
            setSpanish({id_materia: "65fcd40862c99603aff37ebe", calificacion: event.target.value});
        }}
        type="number" id="numer" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />
    </div>



    <div className="mb-5">
        <label className="block mb-2 text-sm font-medium dark:text-white">Matematicas</label>
        <input 
        onChange={(event) => {
            setMath({id_materia: "660b13565c59ce41618f18d2", calificacion: event.target.value});
        }}
        type="number" id="number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />
    </div>
    <div className="mb-5">
        <label className="block mb-2 text-sm font-medium dark:text-white">Historia</label>
        <input
        onChange={(event) => {
            setHistory({id_materia: "65fcd42862c99603aff37ebf", calificacion: event.target.value});
        }}
        type="number" id="number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />
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

