import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TodoService } from "./todo.service";
import { TodoAddComponent } from "./todo-add.component";
import { TodoListComponent } from "./todo-list.component";
// import { TodoAddComponent } from "./todo-add.component";
// import { TodoListComponent } from "./todo-list.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
   TodoAddComponent,
    TodoListComponent
  ],
  bootstrap: [AppComponent],
  providers: [TodoService]
})
export class AppModule {}
