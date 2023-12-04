import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalComponent } from './hospital/hospital.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AppComponent } from './app.component';

const routes: Routes = [
//   {path: '', redirectTo: '', pathMatch: 'full', component: AppComponent},
  { path: 'Hospital', component: HospitalComponent },
  { path: 'Inventory', component: InventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }