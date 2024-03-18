
import "./NavbarComponent.css"

function NavbarComponent() {
    return (
        <section>        
            <div className="pruebas-container">
                <nav className=" bg-teal-600 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
                            <span className="font-questrial self-center text-2xl whitespace-nowrap dark:text-white">PotaxioSchool</span>
                        </a>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                                <li>
                                    <a href="#" className="font-questrial block py-2 px-4 text-white bg-teal-600 rounded text-withe-700 text-withe-500" aria-current="page">Casita</a>
                                </li>
                                <li>
                                    <button type="button" className="font-questrial text-white focus:ring-4 focus:outline-none focus:ring-teal-600 font-medium rounded-lg text-sm px-4 py-2 text-center bg-uwu dark:hover:bg-blue-700 dark:focus:ring-teal-600">Inisiar Sesion</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default NavbarComponent;