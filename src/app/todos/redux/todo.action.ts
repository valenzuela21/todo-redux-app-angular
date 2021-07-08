import { createAction, props } from '@ngrx/store';
import {todoComplete, todoEdit, todoID, todoText} from "../../interface/app.interface";
export  const create = createAction('[Todo] Create Todo', props<todoText>());
export  const toggle = createAction('[Todo] Toggle Todo', props<todoID>());
export  const edit = createAction('[Todo] Edit Todo', props<todoEdit>());
export  const erase = createAction('[Todo] Erase Todo', props<todoID>());
export  const complete = createAction('[Todo] Complete Todo', props<todoComplete>())
export  const clean = createAction('[Todo] Clean Todo');

