import { createReducer, on} from '@ngrx/store';
import {filter} from './filter.actions';

export const initialState:any = 'all';
const _filterReducer = createReducer(
  initialState,
  on(filter, (state, {filter}) => {
    return filter;
  }),
);

// @ts-ignore
export function filterReducer(state, action) {
  // @ts-ignore
  return _filterReducer(state, action);
}


