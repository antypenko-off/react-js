import {useEffect, useState} from "react";
import type {ToDoModel} from "../../Models/TodoModel";
import { responseTODO } from "../../services/api.todo";
import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";



export const TodoComponents = () => {
    const [todos, setTodos] = useState<ToDoModel[] >([]);
    useEffect(() => {
                responseTODO()
                .then(resp => {
                    setTodos(resp);
                })
        }, [])
    return (
        <div>
            {
                todos && todos.map( (todo) => <TodoComponent todo={todo} key={todo.id}/>)
            }
        </div>

    )
};