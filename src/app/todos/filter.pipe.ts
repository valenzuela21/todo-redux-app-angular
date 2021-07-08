import { Pipe, PipeTransform } from '@angular/core';
import {validateFilter} from "../interface/app.interface";
import {Todo} from "./models/todo.model";

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todo: Todo[], filter: validateFilter): Todo[] {
    switch (filter){
      case "complete":
        return todo.filter(value => value.complete);
      case "pending":
        return todo.filter(value => !value.complete);
      default:
          return todo;
    }
  }

}
