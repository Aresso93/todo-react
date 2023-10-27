import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { useTodosService } from '../services/todos/useTodosService';

interface IFormInput {
    title: string;
    text: string;
  }
  export function TodoNew() {
    
    const {actions} = useTodosService()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm<IFormInput>();
    
      const onSubmit = (data: IFormInput) => {
        actions.addTodo(data)
        actions.getTodos()
        console.log('todo inviato', data)
        
        
      }; 
    
      console.log(watch())

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
    };

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit(onSubmit)} className='submit-form'>
      <label>Titolo del todo (max 50 caratteri)</label>
      <input
        {...register("title", {
          required: true,
          maxLength: 50,
        })}
        />
      {errors?.title?.type === "required" && <p>Campo necessario</p>}
      {errors?.title?.type === "maxLength" && (
        <p>Non più di 50 caratteri</p>
        )}
      <label>Testo del todo (max 250 caratteri)</label>
      <input
        {...register("text", {
          required: true,
          maxLength: 250,
        })}
        />
      {errors?.text?.type === "required" && <p>Campo necessario</p>}
      {errors?.text?.type === "maxLength" && (
        <p>Non più di 250 caratteri</p>
        )}
        <input type="submit" />

    </form>

   {/* <Button variant="outlined" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crea nuovo todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Aggiungi un nuovo todo nello spazio sottostante
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Titolo del nuovo todo"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nuovo todo"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Chiudi</Button>
          <Button onClick={() => {
            handleClose()
            //onSubmit()
          }}>Posta</Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
