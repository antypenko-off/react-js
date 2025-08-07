import type {ToDoModel} from "../../Models/TodoModel.ts";
import type {FC} from "react";

type TodoComponentProps = {
    todo : ToDoModel;
}

export const TodoComponent:FC<TodoComponentProps> = ({todo}) => {
    return (
        <div>
            <h2>ID:{todo.id} UserID:{todo.userId}</h2>
        </div>
    );
};