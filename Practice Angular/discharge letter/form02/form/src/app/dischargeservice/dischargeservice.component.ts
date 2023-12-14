// import { Component, OnInit } from '@angular/core';


// export class DischargeserviceComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component,
Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-dischargeservice',
  templateUrl: './dischargeservice.component.html',
  styleUrls: ['./dischargeservice.component.css']
})
export class DischargeService {
  constructor() { }
  generateDischargeLetter(formData:any): string {
    // Logic to format discharge letter based on form data

  

    return `
      Discharge Letter
      
      Patient Name: ${formData.firstName} ${formData.lastName}
      Date of Birth: ${formData.dateOfBirth}
      Age: ${formData.age}
      Address: ${formData.address}
      Diagnosed with: ${formData.diagnosedWith}
      Final Report: ${formData.finalReport}
      Doctor Name: ${formData.doctorName}
      Date of Diagnose: ${formData.dateOfDiagnose}
      Date of Release: ${formData.dateOfRelease}
      Medication Provided: ${formData.medicationProvided}
      Dietary Information: ${formData.dietaryInformation}
    `;
  }
  // onclick(){
  //   alert('hi');
  // }
}
