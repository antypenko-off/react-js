import type {ToDoModel} from "../Models/TodoModel.ts";

export const responseTODO = async (): Promise<ToDoModel[]> => {
    return  await fetch(import.meta.env.VITE_API_BASE_URL)
        .then(response => response.json())
}