import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default initialTodos => {
    
    const [todos,SetTodos] = useState(initialTodos);    

    return {
        todos,
        addTodo:newTodoText => {
            SetTodos([...todos,{id:uuidv4(),task:newTodoText,completed:false}]);
        },
        removeTodo: TodoId => {
            const updatedTodos = todos.filter(Tod => Tod.id !== TodoId );
            SetTodos(updatedTodos);
        },
        ToggleTodos: TodoId => {
            const updatedTodos = todos.map(todo => 
                todo.id === TodoId ? {...todo,completed : !todo.completed}:todo
            );
            SetTodos(updatedTodos);
        },
        editTodo: (TodoId,newTask) => {
            const updatedTodos = todos.map(todo => 
                todo.id === TodoId ? {...todo,task : newTask}:todo
            );
            SetTodos(updatedTodos);
        }
    }

}


