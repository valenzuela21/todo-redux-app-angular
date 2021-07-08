import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Todo} from "../models/todo.model";
import {AppState} from "../../interface/app.state";
import {validateFilter} from "../../interface/app.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  // @ts-ignore
  filterActual: validateFilter;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //this.store.select('todos').subscribe(todos => this.todos = todos)
    this.store.subscribe(({todos, filter})=>{
      this.todos = todos;
      this.filterActual = filter
    })
  }



}
