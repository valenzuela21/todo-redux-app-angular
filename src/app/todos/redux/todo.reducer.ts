import { Action, createReducer, on} from '@ngrx/store';
import {create, toggle, edit, erase, complete, clean} from "./todo.action";
import {Todo} from "../models/todo.model";


export const initialState:Todo[] = [
  new Todo("Salvar al Mundo"),
  new Todo("Vencer a Thanos"),
  new Todo("Comprar Traje de Iron Man"),
  new Todo("Robar Escudo del Capitán América"),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)]),
  on(erase, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(clean, (state) => state.filter(todo => todo.complete === false)),
  on(toggle, (state, {id}) => {
    // @ts-ignore
    return state.map(todo=>{
      if(todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }else{
        return todo;
      }
    })
  }),
  on(edit, (state, {id, text}) => {
    // @ts-ignore
    return state.map(todo=>{
      if(todo.id === id) {
        return {
          ...todo,
          text,
        }
      }else{
        return todo;
      }
    })
  }),
  on(complete, (state, {complete}) => {
    // @ts-ignore
    return state.map(todo=>{
        return {
          ...todo,
          complete: complete
        }
    })
  }),
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
