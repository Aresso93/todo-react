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
            dispatch({type: 'todoDeleteSuccess', payload: id})

        } catch (err){
            dispatch({type: 'error', payload: 'Todos non cancellati'})
        }
        
      }

      async function addTodo(Todo: Partial<Todo>){
        dispatch({type: 'pending', payload: true})
        try{
            const res = await TodosApi.add(Todo)
            dispatch({type: 'todoAddSuccess', payload: res})

        } catch (err){
            dispatch({type: 'error', payload: 'Todos non aggiunti'})
        }
        
      }

      async function editTodo(Todo: Partial<Todo>){
        dispatch({type: 'pending', payload: true})
        try{
            const resp = await TodosApi.edit(Todo)
            dispatch({type: 'todoEditSuccess', payload: resp})

        } catch (err){
            dispatch({type: 'error', payload: 'Todo non modificato'})
        }
        
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
            addTodo,
            editTodo,
            setActiveItem,
            resetActiveItem
        },
        state
        }
}