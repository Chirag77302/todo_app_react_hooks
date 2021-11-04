import React,{Component, useEffect, useState} from "react";
import Paper from '@material-ui/core/paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";

function TodoApp(){
        const iniarray = JSON.parse(window.localStorage.getItem('todos') || "[]" );
        const {todos,addTodo,removeTodo,ToggleTodos,editTodo} = useTodoState(iniarray); 

        useEffect(() => {
            window.localStorage.setItem("todos",JSON.stringify(todos));
        },[todos]);

        return(
            <Paper style={{
                    padding:0,
                    margin:0,
                    height:"100vh",
                    backgroundColor:"#fafafa"
                }}
                elevation={0}
            >
                
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>News</Typography>
                    </Toolbar>
                </AppBar>

                <Grid container justify="center">
                    <Grid item xs={11} md={8} lg={4} >
                            <TodoForm addTodo = {addTodo}/>
                            <TodoList 
                               todos={todos} 
                               removeTodo = {removeTodo}
                               toggleTodo = {ToggleTodos}
                               editTodo = {editTodo}
                               />
                    </Grid>
                </Grid>

            </Paper>
        )
}

export default TodoApp;