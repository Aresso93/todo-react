import { useReducer } from "react";

export function useProductsService(){

    const [state, dispatch] = useReducer(todosReducer, initialState)

    async function deleteTodo(id:string){
        dispatch({type: 'pending', payload: true})
        try{
            const resp = await ProductsApi.remove(id)
            dispatch({type: 'productDeleteSuccess', payload: id})

        } catch (err){
            dispatch({type: 'error', payload: 'Prodotti non cancellati'})
        }
        
      }

      return{ 
        actions: {
            getTodos,
            deleteTodo,
            addTodo,
            editTodo,
            setActiveTodo,
            resetActiveTodo
        },
        state
        }

}