import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DischargeLetterComponent } from './discharge-letter/discharge-letter.component';
import { DischargeFormComponent } from './discharge-form/discharge-form.component';

const routes: Routes = [
  // { path: 'discharge-form.html', component:DischargeFormComponent  },
  // { path: './discharge-letter.html', component: DischargeLetterComponent },
  // { path: '', redirectTo: '/discharge-letter', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
