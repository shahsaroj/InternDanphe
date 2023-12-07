import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './signupform/signupform.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [
    AppComponent,
    SignupComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
