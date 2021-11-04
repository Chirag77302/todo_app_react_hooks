import React from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@material-ui/core";

export default function EditTodoForm ({id,editTodo,task,toggleEdit}){
    const [value,handleChange,reset] = useInputState(task);
    return (
        <form onSubmit={e => {
            e.preventDefault();
            editTodo(id,value);
            reset();
            toggleEdit();
        }} 
        style = {{marginLeft:"1rem",width:"60%"}}
        
        >
        <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus />
        </form>
    )
}