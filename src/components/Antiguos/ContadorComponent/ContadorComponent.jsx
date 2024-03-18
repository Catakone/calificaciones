import "./ContadorComponent.css";
import { useState } from "react";

function ContadorComponent(props){

    const [numero, setNumero] = useState(0);

    return(
        <div>
            <div>{numero}</div>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 rounded"
            
            onClick={() =>{
                setNumero(numero -1);
            }}> Restar</button>
            <br/>

            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 rounded"
            onClick={()=>{
                setNumero(numero +1);
            }}>Sumar</button>
        </div>
        
    );
    
}

export default ContadorComponent;