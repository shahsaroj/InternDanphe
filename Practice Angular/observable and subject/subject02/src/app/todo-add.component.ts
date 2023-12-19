import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Todo, TodoService } from "./todo.service";

@Component({
  selector: "app-todo-add",
  template: `
    <div>
      <form [formGroup]="todoForm" (submit)="onSubmit()">
        <p>
          <input type="text" id="value" name="value" formControlName="value" />
        </p>

        <button type="submit">Add Item</button><br />
      </form>
    </div>
  `
})
export class TodoAddComponent implements OnInit {
  todos$: Observable<Todo[]> | undefined;
  todoForm: FormGroup;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {
    this.todoForm = this.formBuilder.group({
      id: [""],
      value: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.todos$ = this.todoService.todos$;
  }

  onSubmit() {
    this.todoService.create(this.todoForm.value);
    this.todoForm.get("value")?.setValue("");
  }
}
