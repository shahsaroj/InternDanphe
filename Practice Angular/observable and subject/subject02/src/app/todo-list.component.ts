import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
// import { map } from "rxjs/operators";

import { Todo, TodoService } from "./todo.service";

@Component({
  selector: "app-todo",
  template: `
    <div *ngFor="let todo of (todos$ | async)">
      {{ todo.id }} {{ todo.value }}
      <button (click)="deleteTodo(todo.id)">x</button>
    </div>
  `
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]> | undefined;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos$ = this.todoService.todos$
      
  }

  deleteTodo(todoId: number) {
    this.todoService.remove(todoId);
  }
}
