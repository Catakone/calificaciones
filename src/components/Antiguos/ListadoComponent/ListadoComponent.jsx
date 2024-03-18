//* Arriba las importaciones de archivos como otros componentes estilos, constantes
import "./ListadoComponent.css";
import {useState} from "react";
//* Nuestro componente
function ListadoComponent(){

    const [personaje, setPersonaje] = useState([]);
    
    const getData = async() =>{
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const jsonData = await response.json();
           // console.log(jsonData.results);
            setPersonaje(jsonData.results);
        }
        catch (error){
            console.error("Error fetching data: ", error)
        }
    };

    // const getManga = async() =>{
    //     try {
    //         const response = await fetch("http://localhost:3000/mostrarmanga");
    //         const jsonData = await response.json();
    //         console.log(jsonData);
    //     }
    //     catch (error){
    //         console.error("Error fetching data: ", error)
    //     }

    // };
return (
    <div>
        <div>
            <button 
                onClick={()=>{
                    getData();
                }}>
                    RickyMartin
            </button>
        </div>

        <div>
            {personaje.map((personaje)=>(
                    <div key={personaje.id}>
                        <h2>{personaje.name}</h2>
                        <img src={personaje.image} alt={personaje.name}/>
                    </div>
                ))}
        </div>

    </div>

);

}
//* Debemos eportalo
export default ListadoComponent;