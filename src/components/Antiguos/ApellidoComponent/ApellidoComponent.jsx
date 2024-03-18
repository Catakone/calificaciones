import "./ApellidoComponent.css";
function ApellidoComponent(props){
    let apellido = props.apellido;

    return <h2 className="border-dashed border-4 border-teal-600 bg-teal-400 p-1 inline-block">{apellido}</h2>;
}
export default ApellidoComponent;