//* Arriba las importaciones de archivos como otros componentes estilos, constantes
import "./NombreComponent.css";
//* Nuestro componente
function NombreComponent(props){
    let nombre = props.nombre;
    return (
        <div>
            <h1 className="text-red-500">{nombre}</h1>
        </div>
    
    );
}
//* Debemos eportalo
export default NombreComponent;