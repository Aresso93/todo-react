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
        console.log('todo inviato')
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Titolo</label>
      <input
        {...register("title", {
          required: true,
          maxLength: 50,
        })}
      />
      {errors?.title?.type === "required" && <p>This field is required</p>}
      {errors?.title?.type === "maxLength" && (
        <p>Non più di 50 caratteri</p>
      )}
      <label>Testo</label>
      <input
        {...register("text", {
          required: true,
          maxLength: 50,
        })}
      />
      {errors?.title?.type === "required" && <p>This field is required</p>}
      {errors?.title?.type === "maxLength" && (
        <p>Non più di 50 caratteri</p>
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
          <Button onClick={handleCloseWithoutPosting}>Chiudi</Button>
          <Button onClick={handleClose}>Posta</Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
