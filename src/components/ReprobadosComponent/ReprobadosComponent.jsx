import "./ReprobadosComponent.css"
import { useState, useEffect } from "react";

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
function ReprobadosComponent() {
    const [calificaciones, setCalificaciones] = useState([]);

    useEffect(() => {
        fetchCalificaciones().then(data => setCalificaciones(data)).catch(error => console.error(error));
    }, []);


    return(<section style={{ height: '100vh' }}>
    <div className="" style={{ backgroundColor: '#394648', height: '100%', color: 'white' }}>
        <div className="flex flex-col px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className=" pt-20 text-left">
                <h3 className="text-4xl font-questrial leading-tight tracking-tight text-white flex-r">
                    Reprobados
                </h3>
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
                                    Maatematicas
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Historia
                                </th>
                            </tr>
                        </thead>
                        <tbody>
  {calificaciones.map((calificacion) => {
    const { alumno, materias } = calificacion;
    const spanish = materias.find((materia) => materia.nombre === "Español");
    const math = materias.find((materia) => materia.nombre === "Matemáticas");
    const history = materias.find((materia) => materia.nombre === "Historia");

    // Verificar si alguna calificación es menor a 6
    const calificacionMenorSeis = spanish?.calificacion < 6 || math?.calificacion < 6 || history?.calificacion < 6;

    // Si ninguna calificación es menor a 6, no renderizar nada para este alumno
    if (!calificacionMenorSeis) return null;

    return (
      <tr
        key={alumno.id_usuario}
        className="odd:bg-white even:bg-gray-50 dark:border-gray-700 text-center"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {alumno}
        </th>
        <td className={`px-6 py-4 ${spanish?.calificacion < 6 ? 'text-red-500' : 'text-gray-900'}`}>
          {spanish?.calificacion ?? "sin asignar"}
        </td>
        <td className={`px-6 py-4 ${math?.calificacion < 6 ? 'text-red-500' : 'text-gray-900'}`}>
          {math?.calificacion ?? "sin asignar"}
        </td>
        <td className={`px-6 py-4 ${history?.calificacion < 6 ? 'text-red-500' : 'text-gray-900'}`}>
          {history?.calificacion ?? "sin asignar"}
        </td>
      </tr>
    );
  })}
</tbody>


                    </table>
                </div>

            </div>


        </div>
    </div>
</section>
);

}


export default ReprobadosComponent;