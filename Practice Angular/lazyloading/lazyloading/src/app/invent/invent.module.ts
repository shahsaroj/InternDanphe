import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventRoutingModule } from './invent-routing.module';
import { InventComponent } from './invent.component';


@NgModule({
  declarations: [
    InventComponent
  ],
  imports: [
    CommonModule,
    InventRoutingModule
  ]
})
export class InventModule { }
