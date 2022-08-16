import React, { useState } from "react";
import "./Banner.css"
function State(){

  let [data,setdata] =useState("shibu")
    function Alert(){
        setdata("jaiswal")
    }
    return(
    <div className="state">

    <h1>State Exapmle</h1>
    <h2>{data}</h2>
        <button onClick={Alert}>click Me</button>
    </div>
    )
}



export default State;
