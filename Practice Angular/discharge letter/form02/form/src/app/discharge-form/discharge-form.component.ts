import { Component } from '@angular/core';
// import { DischargeService } from './discharge.service'; // Import the service
// import { dischargeService } from './dischargeservice/dischargeservice.component';
// import { DischargeService } from '../discharge.service';

@Component({
  selector: 'app-discharge-form',
  templateUrl: './discharge-form.component.html',
  styleUrls: ['./discharge-form.component.css']
})
export class DischargeFormComponent {
// onClick: any;
generateonClick() {
throw new Error('Method not implemented.');
}
  something : string = "someting";
  formData: any; // Object to hold form data
  dischargeLetter: string = ''; // Variable to hold generated discharge letter

  constructor(
    ) {};// Inject the service

  generateDischargeLetter() {
    // Logic to generate the discharge letter using formData
    // this.dischargeLetter = DischargeService.generateDischargeLetter(this.formData);
  }
  onclick(){
    ;
  }
}

