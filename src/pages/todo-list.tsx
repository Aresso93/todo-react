import { TodoCard } from "./todo-card";



export function TodoList(){
   
    

    return (
        <TodoCard 
            todos={[]} 
            onDeleteTodo={function (){
        
            } }        
        ></TodoCard>
    )
}