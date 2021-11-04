import React, { useState } from "react";
import Paper from '@material-ui/core/paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState.js';
import { Button } from "@material-ui/core";

export default function  TodoForm({addTodo}) {

    const [value,setVal,reset] = useInputState("");
    return(
        <Paper style={{
            margin:"1rem 0",
            padding:"0 1rem"
        }} >
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }} >
                <TextField  
                onChange={setVal} 
                value={value} 
                margin="normal" 
                label="Add New Todo"
                fullWidth
                ></TextField>
            </form>
        </Paper>
    )
}