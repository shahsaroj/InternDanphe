import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DischargeModel } from '../models/discharge.model';

@Component({
  selector: 'app-discharge-form',
  templateUrl: './discharge-form.component.html',
  styleUrls: ['./discharge-form.component.css'],
})
export class DischargeFormComponent {
  dischargeData: DischargeModel = new DischargeModel();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        this.dischargeData = Object.assign( this.dischargeData,params);
      }
    });
  }

  displayDischargeLetter() {
    this.router.navigate(['/discharge-letter', this.dischargeData]);
  }
}
