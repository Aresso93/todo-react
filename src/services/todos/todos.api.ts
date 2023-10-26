import { Todo, TodoCompletion } from "../../model/todo";
import { pb } from "../../pocketbase";


export async function get(){
    const p =  await pb.collection('todos').getList<Todo>();
    return p;
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

export function patchCompletion(id: string, isCompleted:boolean){
    return pb.collection('todos').update<Todo>(id, {isCompleted})
}