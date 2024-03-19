import "./ReprobadosComponent.css"

function ReprobadosComponent() {
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
                                <th scope="col" className="px-6 py-3">
                                    Calificacion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Ligia Clarissa Segovia Catzin
                                </th>
                                <td className="px-6 py-4 text-gray-900">
                                    10
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    8
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    7
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    10
                                </td>
                            </tr>
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