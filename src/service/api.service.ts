import type {TodoModel} from "../models/TodoModel.ts";

const endpointTodos = 'https://jsonplaceholder.typicode.com/todos'

const loadTodos = async (): Promise<TodoModel[]> => {
    return await fetch(endpointTodos)
        .then(value => value.json());


}

export {loadTodos}


