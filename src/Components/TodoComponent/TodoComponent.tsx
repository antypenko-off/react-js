import type {ToDoModel} from "../../Models/TodoModel.ts";

type TodoComponentProps = {
    todo : ToDoModel;
}

export const TodoComponent = ({todo}:TodoComponentProps) => {
    return (
        <div>
            <h2>ID:{todo.id} UserID:{todo.userId}</h2>
        </div>
    );
};