import React from "react";
function NinethA(props){
    return(
        <div>
            <h1 style={{color:"red"}}>Simple Additon</h1>
            <h1>The Sum of {props.a} and {props.b} is:{props.a+props.b}</h1>
        </div>
    );
}
export default NinethA;