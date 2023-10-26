import { Todo } from "../../model/todo";


export type TodoGetSuccess = { type: 'todoGetSuccess', payload: Todo[] };
export type TodoDeleteSuccess = { type: 'todoDeleteSuccess', payload: string };
export type TodoAddSuccess = { type: 'todoAddSuccess', payload: Todo};
export type TodoEditSuccess = { type: 'todoEditSuccess', payload: Todo};
export type TodoSetActive = { type: 'todoSetActive', payload: Partial<Todo> | null};
export type ToggleCompletion = {type: 'todoToggleCompletion'}
export type Error = { type: 'error', payload: string };
export type Pending = { type: 'pending', payload: boolean };

export type todoActions =
  TodoGetSuccess |
  TodoDeleteSuccess |
  TodoAddSuccess |
  TodoEditSuccess |
  TodoSetActive |
  ToggleCompletion|
  Error |
  Pending ;