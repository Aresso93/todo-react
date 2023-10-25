import { useEffect, useState } from "react";
import { Todo } from "../model/todo";
import PocketBase from 'pocketbase';
import { useTodosService } from "../services/todos/useTodosService";
import Button from '@mui/material/Button';


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
                    <Button 
                    variant="contained"
                    onClick={editTodo}>Modifica</Button>
                    <Button
                    variant="contained"
                    onClick={(event) => {
                        event.stopPropagation()
                        props.onDeleteTodo(todo.id)
                        }}
                    >Cancella</Button>
                    <Button variant="contained" onClick={()=>{console.log(todo.id)}}>Dammi l'ID</Button>
                    <Button variant="contained">Segna come {todo.isCompleted ? 'da completare' : 'completato'} </Button>
                </div>
                <span>Stato: {todo.isCompleted ? 'completato' : 'da completare'}</span>
            </div>

            
            
        )
       
        )
}