import React from "react";
import {useState} from "react";
function Eighteen(){
    const[todo,setTodo]=useState([]);
    const[input,setInput]=useState('');
    const addTodo=function(e){
        e.preventDefault();
        if(!input)return;
        setTodo([...todo,input]);
        setInput('');
    }
    const delTodo=function(index){
        const newTodo=[...todo];
        newTodo.splice(index,1);
        setTodo(newTodo);
    }
    return(
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={addTodo}>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter a task"/>
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {todo.map((task,index)=>(
                    <li key={index}>
                        {task} <button onClick={()=>delTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );  
}
export default Eighteen;