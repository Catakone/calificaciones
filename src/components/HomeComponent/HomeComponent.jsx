import {Outlet, Link} from "react-router-dom";
function HomeComponent() {
  return (
    <div className="py-20 ">
      <div className="relative overflow-x-auto">
          <table className="  w-5/12 text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Calificaciones
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Alumnos
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Reprobados
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-uwu border-b">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img className="w-20 h-20 rounded-lg" src="./public/win.jpg" alt="image description"></img>
                          <Link to="/calificaciones" className="font-medium text-owo p-4">
                              Ir
                          </Link>
                      </th>
                      <td className="px-6 py-4">
                      <img className="w-20 h-20 rounded-lg"  src="./public/descarga.jfif" alt="image description"></img>
                          <Link to="/AlumnosCrud" className="font-medium  text-owo  hover:underline p-4">
                          Ir
                          </Link>
                      </td>
                      <td className="px-6 py-4">
                      <img className="w-20 h-20 rounded-lg" src="./public/lose.png" alt="image description"></img>
                          <Link to="/reprobados"  className="font-medium  text-owo  hover:underline p-4">
                          Ir
                          </Link>
                      </td>
                  </tr>
              </tbody>
          </table>
          <hr />
              <Outlet/>
      </div>


    </div>
  );
}

export default HomeComponent;