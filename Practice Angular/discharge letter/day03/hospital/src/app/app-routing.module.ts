import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DischargeFormComponent } from './discharge-form/discharge-form.component';
import { DischargeLetterComponent } from './discharge-letter/discharge-letter.component';

const routes: Routes = [
  { path: 'discharge-form', component: DischargeFormComponent },
  { path: 'discharge-letter', component: DischargeLetterComponent },
  { path: '', redirectTo: '/discharge-form', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
