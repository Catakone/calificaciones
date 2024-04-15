import {Outlet, Link} from "react-router-dom";
import "./NavbarComponent.css"

function NavbarComponent() {
    return (
        <section>        
            <div className="pruebas-container">
                <nav className=" bg-teal-600 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                            
                            <span className="font-questrial self-center text-2xl whitespace-nowrap dark:text-white">PotaxioSchool</span>
                        </a>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                                <li>
                                    <Link to="/login" className="font-questrial block py-2 px-4 text-white bg-teal-600 rounded text-withe-700 text-withe-500" aria-current="page">Login</Link>
                                    {/* <a href="#" className="font-questrial block py-2 px-4 text-white bg-teal-600 rounded text-withe-700 text-withe-500" aria-current="page">Casita</a> */}
                                </li>
                                <li>
                                    <Link to="/reprobados" className="font-questrial block py-2 px-4 text-white bg-teal-600 rounded text-withe-700 text-withe-500" aria-current="page">reprobados</Link>
                                    {/* <a href="#" className="font-questrial block py-2 px-4 text-white bg-teal-600 rounded text-withe-700 text-withe-500" aria-current="page">Casita</a> */}
                                </li>
                                <li>
                                    <a href="/" className="font-questrial block py-2 px-4 text-white bg-teal-600 rounded text-withe-700 text-withe-500" aria-current="Registro">Casita</a>
                                </li>
                                <li>
                                    <a href="/AlumnosCrud" className="font-questrial block py-2 px-4 text-white bg-teal-600 rounded text-withe-700 text-withe-500" >Alumnos</a>
                                </li>
                                <li>
                                    {/* <Link to="/calificaciones" className="font-questrial block py-2 px-4 text-white bg-teal-600 rounded text-withe-700 text-withe-500" aria-current="Reprobados">Reprobados</Link> */}
                                    <Link to="/login"  type="button" className="font-questrial text-white focus:ring-4 focus:outline-none focus:ring-teal-600 font-medium rounded-lg text-sm px-4 py-2 text-center bg-uwu dark:hover:bg-blue-700 dark:focus:ring-teal-600">Inisiar Sesion</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr />
                <Outlet/>
            </div>
        </section>
    );
}

export default NavbarComponent;