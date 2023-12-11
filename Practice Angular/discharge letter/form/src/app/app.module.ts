import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DischargeFormComponent } from './discharge-form/discharge-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DischargeLetterComponent } from './discharge-letter/discharge-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    DischargeFormComponent,
    DischargeLetterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ReactiveFormsModule,
    // FormData
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
