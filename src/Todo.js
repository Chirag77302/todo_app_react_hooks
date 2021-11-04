import React from "react";
import ListItem from '@material-ui/core/ListItem';
import useToggle from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import { Checkbox, ListItemText,ListItemSecondaryAction,IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from "@material-ui/icons/Edit";

export default function Todo({task,completed,removeTodo,id,toggleTodo,editTodo}){
    const [isEditing,toggle] = useToggle(false);
    return(
            <ListItem style={{height:"64px"}} >
                {(isEditing)?<EditTodoForm editTodo={editTodo} id={id} task={task} toggleEdit={toggle} />: 
                    <>
                    <Checkbox tableIndex={-1} checked={completed} onClick={() => toggleTodo(id)}  />
                    <ListItemText style={{textDecoration:completed?"line-through":"none"}} >{task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="delete" size="small" onClick={() => removeTodo(id)}>
                            <DeleteIcon fontSize="inherit"/>
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                    </>
                }
            </ListItem>
    );
}