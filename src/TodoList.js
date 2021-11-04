import React from "react";
import Paper from '@material-ui/core/paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Todo from "./Todo";
import { Divider } from "@material-ui/core";

function  TodoList({todos,removeTodo,toggleTodo,editTodo}) {
    const alltodos = todos.map(t => (
        <li>{t.task}</li>
    ));
    return(
        <Paper>
            <List >
               { todos.map((t,i) => (
                        <>
                            <Todo 
                                id={t.id}
                                task={t.task} 
                                key={t.id} 
                                completed={t.completed}
                                removeTodo = {removeTodo}
                                toggleTodo = {toggleTodo}
                                editTodo = {editTodo}
                            ></Todo>
                            {i<todos.length-1?<Divider />:""}
                        </>
                    ))
                }   
            </List >
        </Paper>
    )
}

export default TodoList;