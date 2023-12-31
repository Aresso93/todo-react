import { useReducer } from "react";
import { Todo } from "../../model/todo";
import * as TodosApi from "./todos.api";
import { initialState, todosReducer } from "./todos.reducer";

export function useTodosService(){
    const [state, dispatch] = useReducer(todosReducer, initialState);
    
    async function getTodos(){
        dispatch({type: 'pending', payload: true})
        try{
            const resp = await TodosApi.get()
            dispatch({type: 'todoGetSuccess', payload: resp.items})

        } catch (err){
            dispatch({type: 'error', payload: 'Todos non caricati'})
        }
        
      }

      async function deleteTodo(id:string){
        dispatch({type: 'pending', payload: true})
        try{
            const res = await TodosApi.remove(id)
            //dispatch({type: 'todoDeleteSuccess', payload: id})
            getTodos()
        } catch (err){
            dispatch({type: 'error', payload: 'Todos non cancellati'})
        }
        
      }
      async function addTodo(todo: Partial<Todo>){
        dispatch({type: 'pending', payload: true})
        try{
            const res = await TodosApi.add(todo)
            getTodos()
            //dispatch({type: 'todoAddSuccess'})
        } catch (err){
            dispatch({type: 'error', payload: 'Todos non aggiunti'})
        }
      }

      async function patchCompletion(id: string, completion: boolean){
        dispatch({type: 'pending', payload: true})
        console.log('id', id, 'completato?', completion);
        try {
          const res = await TodosApi.patchCompletion(id, completion);
          dispatch({ type: 'todoToggleCompletion'})
        } catch(e) {
          dispatch({ type: 'error', payload: 'Todo non aggiornato'  })
        }
        getTodos()
       }


      async function editTodo(todo: Partial<Todo>){
        dispatch({type: 'pending', payload: true})
        try{
            const resp = await TodosApi.edit(todo)
            dispatch({type: 'todoEditSuccess', payload: resp})

        } catch (err){
            dispatch({type: 'error', payload: 'Todo non modificato'})
        }
        getTodos()
        console.log('EDIT');
        
      }

      function setActiveItem(Todo: Todo | {}){
        dispatch({type: 'todoSetActive', payload: Todo})
      }

      function resetActiveItem(){
        dispatch({type: 'todoSetActive', payload: null})
      }

      return{ 
        actions: {
            getTodos,
            deleteTodo,
            patchCompletion,
            addTodo,
            editTodo,
            setActiveItem,
            resetActiveItem
        },
        state
        }
}