import React from "react";

export function useDialogActions(){
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
      console.log('APERTO');
      
    };
  
    const handleClose = () => {
      setOpen(false);
      console.log('CHIUSO');
      
    };

    return{ 
        dialogActions: {
            handleClickOpen,
            handleClose,
        },
        states: {
            open
        }
        }
}