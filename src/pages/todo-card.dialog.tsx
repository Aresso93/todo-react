import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";
import React from "react";
import { Todo } from "../model/todo";
import { useDialogActions } from "../services/todos/useDialogActions";

export interface DialogProps{
  selectedTodo: Todo;
  open: boolean;
}

export function TodoCardDialog(props: DialogProps){
    const {states, dialogActions} = useDialogActions()
    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div className="dialog-container">
        <Dialog open={props.open} onClose={handleClose}>
          <DialogTitle>Modifica</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Modifica il todo selezionato
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="text"
              label='...'
              type="text"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={dialogActions.handleClose}>
              Annulla
            </Button>

            <Button onClick={() =>{
              dialogActions.handleClose
              }}
              >Modifica
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}