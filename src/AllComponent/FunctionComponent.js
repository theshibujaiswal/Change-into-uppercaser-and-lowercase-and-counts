import "./FunctionalComponent.css"

import React,{useState} from "react";




function FunctionalComponent(props){
    const[name,onclick,email,emailchange]=useState(props.Name,props.Email)
   
   
    const change=()=>{
        onclick("helo")
        emailchange("a@gmail.com")
       

    }

    return(

        <div className="functional">
    <h1>FunctionalComponent Example</h1>
            <h1>Name:{name} <br></br>Email:{email}</h1>

        <button onClick={change}>Change</button>
        </div>
    )
}






export default FunctionalComponent;