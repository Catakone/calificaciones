import "./CarreraComponent.css";
function CarreraComponent(props){
    let carrera = props.carrera;

    return <h1 className="p-6 bg-green-50">{carrera}</h1>;
}
export default CarreraComponent;