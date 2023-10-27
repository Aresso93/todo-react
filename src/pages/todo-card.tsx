import { useEffect, useState } from "react";
import { TodoCardDialog } from './todo-card.dialog';
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
import { useDialogActions } from "../services/todos/useDialogActions";

interface TodosProps{
    onDeleteTodo: (id: string) => void;
    onAddTodo: (todo: Partial<Todo>) => void;
    todos: Todo[];
    
}

export function TodoCard(props: TodosProps){
    
    const {state, actions} = useTodosService()
    const openDialog = useDialogActions()
    const [selectedTodo, setSelectedTodo] = useState<Todo>() 

    useEffect(() => {
        actions.getTodos()
      }, [])
    
      return (
        <>
        
    {/* dialog form */}
     {selectedTodo && 
     <TodoCardDialog
      selectedTodo={selectedTodo}
      open = {openDialog.states.open}/>}
    {/* dialog form */}
        <div className="card-wrapper">
        {state.todos.map(todo => 
        <Card variant="outlined" sx={{maxWidth: 500}} key={todo.id}>
            <CardContent className="card-content" >
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
            variant="outlined" 
            onClick={()=>{
            setSelectedTodo(todo)
            openDialog.dialogActions.handleClickOpen()
            }}>
          Modifica
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
        {todo.isCompleted ? 
        <Button variant="contained" color="success" onClick={() => actions.patchCompletion(todo.id, false)}>Segna come da completare </Button> :
        <Button variant="outlined" onClick={() => actions.patchCompletion(todo.id, true)}>Segna come completato</Button>   
        }
          </CardActions>
           
        </Card>
      )}
      </div>
      </>
    )
}