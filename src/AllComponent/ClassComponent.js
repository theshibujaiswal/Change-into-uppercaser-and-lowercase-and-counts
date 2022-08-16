import React,{useState} from "react";
import "./ClassComponent.css"
class Myname extends React.Component{


        
render()
{

    return (
        <div className="class">
        <h3 className="example">ClassComponent Example</h3>
       <h1>student:{this.props.name}</h1>
        <button>Click ME</button>
        
       </div>)


}

}

export default Myname;