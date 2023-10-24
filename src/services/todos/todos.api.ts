import { Todo } from "../../model/todo";
import { pb } from "../../pocketbase"

export function get(){
    return pb.collection('todos').getList<Todo>();
}

export function remove(id:string){
    return pb.collection('todos').delete(id);
}

export function add(todo:Partial<Todo>){
    return pb.collection('todos').create<Todo>(todo);
}

export function edit(todo:Partial<Todo>){
    return pb.collection('todos').update<Todo>(todo.id!, todo)
}