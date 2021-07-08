import { Component, OnInit } from '@angular/core';
import {validateFilter} from "../../interface/app.interface";
import {Store} from "@ngrx/store";
import {AppState} from "../../interface/app.state";
import {filter} from "../../filter/filter.actions";
import {clean} from "../redux/todo.action";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filterState: validateFilter= 'all';
  filters: validateFilter[] = ['all', 'complete', 'pending'];

  pending: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //this.store.select('filter')
      //.subscribe(filter => this.filterState = filter)
    this.store.subscribe(state=>{
      this.filterState = state.filter;
      this.pending = state.todos.filter(todo => !todo.complete).length
    })
  }

  changeFilter(filterSelect:validateFilter){
    this.store.dispatch(filter({filter: filterSelect}))
  }

  cleanTodo(){
    this.store.dispatch(clean());
  }


}
