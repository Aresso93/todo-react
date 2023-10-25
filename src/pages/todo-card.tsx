import { useEffect, useState } from "react";
import { Todo } from "../model/todo";
import PocketBase from 'pocketbase';
import { useTodosService } from "../services/todos/useTodosService";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


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
        <Card variant="outlined" sx={{ minWidth: 275 }} key={todo.id}>
            <CardContent >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            </Typography>
            <Typography variant="h5" component="div">
             
            {todo.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {todo.text}
            </Typography>
            <Typography variant="body2">
              <br />
              Stato: {todo.isCompleted ? 'completato' : 'da completare'}
              
            </Typography> 
          </CardContent>
          <CardActions>
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
                    {todo.isCompleted ? <Button variant="outlined">Segna come da completare</Button> : <Button variant="contained">Segna come completato</Button>}
          </CardActions>
        </Card>
      )
    )
}