import Input from "@mui/material/Input";
import Button from "@mui/material/Button";



export function TodoNew(){

return (
    <form className="input-container" action="">
    <Input
     color="primary"
    placeholder="titolo del task"
    size="small"
    />
    <Input
    className="input-bottom"
    color="primary"
    placeholder="testo"
    size="medium"
    />
    <Button
    onClick={()=>{
        console.log('new')
        
    }}
    variant="outlined">
        Aggiungi un todo!
    </Button>
    </form>
    )
   
}