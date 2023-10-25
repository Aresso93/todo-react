import { useEffect, useState } from "react";
import { Todo } from "../model/todo";
import { useTodosService } from "../services/todos/useTodosService";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Icon } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';



interface TodosProps{
    onDeleteTodo: (id: string) => void;
    todos: Todo[];
}

// function completionToggler(state: Partial<Todo>, action: any){
//     switch (action.type) {
//         case 'isCompleted':
//     }
// }

export function TodoCard(props: TodosProps){
    
    const {state, actions} = useTodosService()

    // const [state, dispatch] = useReducer(completionToggler, {isCompleted: false || true})

    useEffect(() => {
        actions.getTodos()
        console.log(state);
        
      }, [])

    useEffect(()=>{
        console.log('bbbbb', state);
    }, [state])

    
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
              Stato: {todo.isCompleted ? 
               <Icon>
               <CheckBoxIcon />
               </Icon> 
               : 
                <Icon>
                <CheckBoxOutlineBlankIcon />
                </Icon>}
           
            
            <br></br>
              Aggiunto in data {new Date(todo.created).toDateString()} <br></br>
            </Typography> 
          </CardContent>
       
          <CardActions>
          <Button 
            variant="contained"
            onClick={(event) => {
                event.stopPropagation()
                actions.editTodo(todo)
            }}>Modifica
          </Button>
            <Button
                variant="contained"
                color="warning"
                onClick={(event) => {
                event.stopPropagation()
                actions.deleteTodo(todo.id)
            }}
            >Cancella
            </Button>
        <Button variant="contained" onClick={()=>{console.log(todo.id)}}>Dammi l'ID</Button>
        {todo.isCompleted ? 
        <Button variant="outlined">Segna come da completare</Button> : 
        <Button variant="contained" color="success">Segna come completato</Button>}
          </CardActions>
        </Card>
      )
    )
}