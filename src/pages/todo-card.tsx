import { useEffect, useState } from "react";
import { Todo } from "../model/todo";
import PocketBase from 'pocketbase';
import { useTodosService } from "../services/todos/useTodosService";
import { act } from "react-dom/test-utils";

interface TodosProps{
    todos: Todo[];
    activeItem: Partial<Todo> | null;
    onEditItem: (product: Partial<Todo>) => void;
    onDeleteItem: (id: string) => void;
}

export const pb = new PocketBase('http://127.0.0.1:8090')

export function TodoCard(props: TodosProps){
    
    const [todos, setTodos] = useState<Todo[]>([])
    const {state, actions} = useTodosService()

    useEffect(() => {
        actions.getTodos()
        console.log(state);
        
      }, [])

    useEffect(()=>{
        console.log('bbbbb', state);
    }, [state])

    function editTodo(){
        console.log('edit')
        
        
    }
    
    function deleteTodo(id:Partial<Todo>){
        console.log('CANCELLED');
    }
    
    function loadData(){
        pb.collection('todos').getList<Todo>()
        .then(res => {
        setTodos(res.items)
      }) 
      
    }

    function toggleCompletion(id: Partial <Todo>){
        console.log('Completami/scompletami', id);
       
        
    }
    
    return (

        todos.map(todo =>
            
            <div className="todo-card" key={todo.id}>
                <h3 className="todo-title">
                    {todo.title}
                </h3>
                <span className="todo-text">
                    {todo.text}
                </span>
                <div className="todo-btns">
                    <button onClick={editTodo}>Modifica</button>
                    <button>Cancella</button>
                    <button onClick={()=>{console.log(todo.id)}}>Dammi l'ID</button>
                    <button onClick={toggleCompletion}>Segna come {todo.isCompleted ? 'da completare' : 'completato'} </button>
                </div>
                <span>Stato: {todo.isCompleted ? 'completato' : 'da completare'}</span>
            </div>

            
            
        )
       
        )
}