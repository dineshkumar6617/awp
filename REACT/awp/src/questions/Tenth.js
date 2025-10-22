import React,{Component} from "react";
class Tenth extends Component{
    constructor(props){
        super(props);
        this.state={
            curDate:new Date().toLocaleDateString()
        };
    }
    render(){
        return(
            <div>
                <h1>Current Date is:{this.state.curDate}</h1>
            </div>
        );
    }
}
export default Tenth;