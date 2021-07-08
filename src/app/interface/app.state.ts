import {ActionReducerMap} from "@ngrx/store";

import {Todo} from "../todos/models/todo.model";
import {todoReducer} from "../todos/redux/todo.reducer";

import {validateFilter} from "./app.interface";
import {filterReducer} from "../filter/filter.reduce";

export interface AppState{
  todos: Todo[],
  filter: validateFilter
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
