import { useEffect, useState } from "react";
import { Todo } from "../model/todo";
import PocketBase from 'pocketbase';
import { useTodosService } from "../services/todos/useTodosService";

interface TodosProps{
    onDeleteTodo: (id: string) => void;
    todos: Todo[];
}

export const pb = new PocketBase('http://127.0.0.1:8090')

export function TodoCard(props: TodosProps){
    
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
    

    function toggleCompletion(id: Partial <Todo>){
        console.log('Completami/scompletami', id);
       
        
    }
    
    return (

        state.todos.map(todo =>
            
            <div className="todo-card" key={todo.id}>
                <h3 className="todo-title">
                    {todo.title}
                </h3>
                <span className="todo-text">
                    {todo.text}
                </span>
                <div className="todo-btns">
                    <button onClick={editTodo}>Modifica</button>
                    <button
                    onClick={(event) => {
                        event.stopPropagation()
                        props.onDeleteTodo(todo.id)
                        }}
                    >Cancella</button>
                    <button onClick={()=>{console.log(todo.id)}}>Dammi l'ID</button>
                    <button onClick={toggleCompletion}>Segna come {todo.isCompleted ? 'da completare' : 'completato'} </button>
                </div>
                <span>Stato: {todo.isCompleted ? 'completato' : 'da completare'}</span>
            </div>

            
            
        )
       
        )
}