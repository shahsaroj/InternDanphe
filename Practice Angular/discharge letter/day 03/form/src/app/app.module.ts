import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterFormComponent } from './letter-form/letter-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LetterFormComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // FormData
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
