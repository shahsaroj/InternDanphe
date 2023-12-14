import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DischargeFormComponent } from './discharge-form/discharge-form.component';
import { DischargeLetterComponent } from './discharge-letter/discharge-letter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DischargeService } from './dischargeservice/dischargeservice.component';

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
    // FormData,
    FormsModule
  ],
  providers: [DischargeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
