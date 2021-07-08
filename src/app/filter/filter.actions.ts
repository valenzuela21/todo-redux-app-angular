import {createAction, props} from '@ngrx/store';
import {todoFilter} from "../interface/app.interface";

export const filter = createAction('[Filter] Set Filter', props<todoFilter>());

