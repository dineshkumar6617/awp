import React from "react";
class NinethB extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:props.a,
            b:props.b
        };
    }
    render(){
        return(
            <div>
                <h1 style={{color:"blue"}}>Simple Addition using Class</h1>
                <h1>The Sum of {this.state.a} and {this.state.b} is:{this.state.a+this.state.b}</h1>
            </div>
        );
    }
}
export default NinethB;