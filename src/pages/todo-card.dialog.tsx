import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useTodosService } from "../services/todos/useTodosService";

export function TodoCardDialog(){

    const {state, actions} = useTodosService()

    useEffect(() => {
        actions.getTodos()
        console.log(state.todos)
      }, [])

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Modifica il todo
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Modifica il todo selezionato
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label='Modifica:'
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Annulla</Button>
            <Button onClick={handleClose}>Modifica</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}