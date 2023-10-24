import { useEffect, useState } from "react";
import { Todo } from "../model/todo";
import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090')
export function TodoCard(){
    
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        loadData()
    
      }, [])

    function editTodo(){
        console.log('Editore');
        
    }
    
    function deleteTodo(){
        console.log('CANCELLED');
    }
    
    function loadData(){
        pb.collection('todos').getList<Todo>()
        .then(res => {
        console.log('Array vuoto', todos);
        setTodos(res.items)
        console.log(res);
        console.log('Array riempito', todos);
        return todos
      }) 
      
    }

    function toggleCompletion(id: Partial <Todo>){
        console.log('Completami/scompletami');
       console.log(id.text);
       
        
    }
    
    console.log('NNNNNNNNNNNNN', todos);
    
    return (

        todos.map(todo =>
            <div className="card-container" key={todo.id}>
            <div className="todo-card" >
                <h3 className="todo-title">
                    {todo.title}
                </h3>
                <span className="todo-text">
                    {todo.text}
                </span>
                <div className="todo-btns">
                    <button onClick={editTodo}>Modifica</button>
                    <button onClick={() => {
                        console.log(todo);
                        
                    }}
                
                    >Cancella</button>
                <button onClick={toggleCompletion}>Segna come {todo.isCompleted ? 'da completare' : 'completato'} </button>
                </div>
                <span>Stato: {todo.isCompleted ? 'completato' : 'da completare'}</span>
            </div>

            </div>
            
        )
       
        )
}