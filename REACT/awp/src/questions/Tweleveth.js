import React,{useState} from "react";
function Twelveth(){
    const [date,setDate]=useState('');
    const [msg,setMsg]=useState('');
    function showDateandTime(){
        const cur=new Date().toLocaleString();
        setDate(cur);
        alert(`Current Date and Time is:${cur}`);

    }
    function showGoodBye(){
        setMsg('Good Bye! Have a nice day!');
    }
    return(
        <div>
            <h1>Show Date and Time</h1>
            <button onClick={showDateandTime}>Show Date and Time</button>
            <h2>{date}</h2>
            <br/>
            <h1>Good Bye Message</h1>
            <button onClick={showGoodBye}>Show Good Bye Message</button>
            <h2>{msg}</h2>
        </div>
    );
}
export default Twelveth;