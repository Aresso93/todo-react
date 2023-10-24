import { Todo } from "../../model/todo";


export type todoGetSuccess = { type: 'todoGetSuccess', payload: Todo[] };
export type ProductDeleteSuccess = { type: 'todoDeleteSuccess', payload: string };
export type ProductAddSuccess = { type: 'todoAddSuccess', payload: Todo};
export type ProductEditSuccess = { type: 'todoEditSuccess', payload: Todo};
export type todoetActive = { type: 'todoSetActive', payload: Partial<Todo> | null};
export type Error = { type: 'error', payload: string };
export type Pending = { type: 'pending', payload: boolean };

export type todoActions =
  todoGetSuccess |
  ProductDeleteSuccess |
  ProductAddSuccess |
  ProductEditSuccess |
  todoetActive |
  Error |
  Pending ;