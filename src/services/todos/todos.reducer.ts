import { Todo } from "../../model/todo";
import { todoActions } from "./todos.actions";

export interface TodosState {
  todos: Todo[];
  activeItem: Partial<Todo> | null;
  pending: boolean;
  error: string | null;
}

export const initialState: TodosState = {
  todos: [],
  activeItem: null,
  pending: false,
  error: null,
};

export function todosReducer(state: TodosState, action: todoActions) {
  const {type, payload} = action;

  switch (type) {
    case 'todoGetSuccess':
      return { ...state, todos: payload, pending: false, error: null }
    case 'todoDeleteSuccess':
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== payload),
        error: null,
        pending: false,
        activeItem: null,
      };
    case 'todoAddSuccess':
      return {
        ...state,
        todos: [...state.todos, payload],
        activeItem: null,
        error: null,
        pending: false
      };
    case 'todoEditSuccess':
      return {
        ...state,
        todos: state.todos.map(item => item.id === payload.id ? payload : item),
        activeItem: null,
        error: null,
        pending: false,
      };
    case 'todoSetActive':
      return { ...state, activeItem: payload }
    case 'pending':
      return { ...state, pending: payload, error: null };
    case 'error':
      return {...state, error: payload, pending: false}
  }
  return state;
}
