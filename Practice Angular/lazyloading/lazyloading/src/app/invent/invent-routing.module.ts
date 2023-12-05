import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventComponent } from './invent.component';

const routes: Routes = [{ path: '', component: InventComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventRoutingModule { }
