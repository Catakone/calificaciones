import "./CalificacionesComponent.css"
import React from "react";
import { useState, useEffect } from "react";

function CalificacionesComponent() {

    const [calificacion, setCalificacion] = useState([]);

    useEffect(() => {
        async function fetchCali() {
            try {
                const response = await fetch("http://localhost:3000/calificaciones/");

                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                 setCalificacion(data);
                console.log(data);  
            

            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchCali();
    }, []);


    const [showModal, setShowModal] = React.useState(false);
    const [showDelete, setShowDelete] = React.useState(false);


    return (
        <section style={{ height: '100vh' }}>
            <div className="" style={{ backgroundColor: '#394648', height: '100%', color: 'white' }}>
                <div className="flex flex-col px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className=" pt-20 text-left" >
                        <h3 className="text-4xl font-questrial leading-tight tracking-tight text-white flex-r">
                            Calificaciones
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
                                            Correo
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Español
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Historia
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Matematicas
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Accion
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {calificacion.map((calificaciones) => (
                                        <tr key={calificaciones._id} className="odd:bg-white even:bg-gray-50 dark:border-gray-700 text-center">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {calificaciones.userInfo.nombre}
                                            </th>
                                            <td className="px-6 py-4 text-gray-900">
                                                {calificaciones.userInfo.correo}
                                            </td>
                                            <td className="px-6 py-4 text-gray-900">
                                                {calificaciones.calificacion}
                                            </td>
                                            <td className="px-6 py-4 text-gray-900">
                                                {calificaciones.calificacion}
                                            </td>
                                            <td className="px-6 py-4 text-gray-900">
                                                {calificaciones.calificacion}
                                            </td>

                                            <td className="px-6 py-4">
                                                <button className="font-medium text-blue-600 hover:underline p-4" onClick={() => setShowModal(true)}>Edit</button>

                                                <button className="font-medium text-red-600 hover:underline" onClick={() => setShowDelete(true)} >Eliminar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                {showModal ? (
                                    <div>
                                        <div
                                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                        >
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Edicion de calificacion
                                                        </h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal(false)}
                                                        >
                                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                ×
                                                            </span>
                                                        </button>
                                                    </div>
                                                    {/*body*/}
                                                    <div className="relative p-6 flex-auto">
                                                        <table>
                                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                                            <tr>
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
                                                            <tr>

                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                Calificacion 1
                                                            </th>
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                Calificacion 2
                                                            </th>
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                Calificacion 3
                                                            </th>
                                                            </tr>

                                                        </tbody>
                                                        </table>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal(false)}
                                                        >
                                                            Cancelar
                                                        </button>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal(false)}
                                                        >
                                                            Guardar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </div>
                                ) : null}


                                {showDelete ? (
                                    <div className="ustify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <button onClick={() => setShowDelete(false)} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor"  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                </svg>
                                                <span className="sr-only">Cerrar</span>
                                            </button>
                                            <div className="p-4 md:p-5 text-center">
                                                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor"  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                                </svg>
                                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Estas seguro que deseas eliminar?</h3>
                                                <button onClick={() => setShowDelete(false)} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                                    Chi
                                                </button>
                                                <button onClick={() => setShowDelete(false)} data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Ño</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ) : null}
                            
                        </table>
                    </div>

                </div>


            </div>

        </div>
        </section >
    );
}

export default CalificacionesComponent;