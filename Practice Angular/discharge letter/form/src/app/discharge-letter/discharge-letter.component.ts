import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discharge-letter',
  templateUrl: './discharge-letter.component.html',
  styleUrls: ['./discharge-letter.component.css']
})
export class DischargeLetterComponent implements OnInit {
  formData: any; // Define variable to store form data
showDischargeLetter: any;
  router: any;
patientName: any;
patientAddress: any;
patientContact: any;
patientDiagonise: any;
patientmedication: any;

  constructor() {}

  ngOnInit() {
    // this.formData = history.state.formData; // Get form data from state

    // // Log the retrieved form data for verification
    // console.log('Form Data:', this.formData);

    const storedData = localStorage.getItem('formData');
    if (storedData) {
      this.formData = JSON.parse(storedData);
    this.router.navigate(['./discahrge-letter']);

    }
  }
}
