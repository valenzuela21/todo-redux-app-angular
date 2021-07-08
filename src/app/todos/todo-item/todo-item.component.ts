import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../models/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import * as actions from "../redux/todo.action";
import {AppState} from "../../interface/app.state";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // @ts-ignore
  @Input() todolist: Todo;

  // @ts-ignore
  @ViewChild('InputText') txtInputText:ElementRef;

  // @ts-ignore
  checkComplete: FormControl;
  // @ts-ignore
  textInput: FormControl;

  edit: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
       this.checkComplete = new FormControl(this.todolist.complete);
       this.textInput =  new FormControl(this.todolist.text, Validators.required);

       this.checkComplete.valueChanges.subscribe(value=>{
         this.store.dispatch(actions.toggle({id: this.todolist.id}))
       })

  }

  editTXT(){
    this.edit = true;
    this.textInput.setValue(this.todolist.text)
    setTimeout(()=>{
      this.txtInputText.nativeElement.select();
    },1000)
  }

  endTXT(){
    this.edit = false;
    if(this.textInput.invalid){
      return;
    }
    if(this.textInput.value === this.todolist.text){
      return;
    }
    this.store.dispatch(
      actions.edit(
        {
          id: this.todolist.id,
          text: this.textInput.value
        }
      )
    )
  }
  eraseTXT(id: number){
    this.store.dispatch(
    actions.erase({
      id,
    }));
  }


}
