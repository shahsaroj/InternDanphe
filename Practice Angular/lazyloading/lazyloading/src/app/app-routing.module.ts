import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'', component: AppComponent},

  { path: 'orders',
 loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }, 
 
 { path: 'customers', 
 loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },

  { path: 'invent', 
  loadChildren: () => import('./invent/invent.module').then(m => m.InventModule) }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
