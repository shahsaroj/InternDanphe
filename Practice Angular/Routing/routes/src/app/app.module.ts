import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HospitalComponent } from './hospital/hospital.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    InventoryComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
