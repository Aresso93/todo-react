import { Todo } from "../model/todo";
import { TodoCard } from "./todo-card";


export function TodoList(){

    return (
        <TodoCard 
            todos={[]}
            onDeleteTodo={function () {
            } } onAddTodo={function (todo: Partial<Todo>): void {
                todo.id
            } }
        ></TodoCard>
    )
}