import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { constructor } from 'jasmine';
@Component({
  selector: 'app-discharge-letter',
  templateUrl: './discharge-letter.component.html',
  styleUrls: ['./discharge-letter.component.css']
})


export class DischargeLetterComponent  {
  dischargeForm!: FormGroup;
submitForm: any;
  alertService: any;
onSubmit() {
throw new Error('Method not implemented.');
}
// valid: any;
// dischargeForm: any;

  GenerateDischargeLetter(): void{
    alert("Generating discharge letter");
  }


  dischargeDate!: string | number | Date;
patientName: any;
patientAge: any;
diagnosis: any;
medication: any;
dietaryInstructions: any;
doctorName: any;
doctorContact: any;
hospitalContact: any;


  constructor(private FormBuilder: FormBuilder) {
    this.dischargeForm = this.FormBuilder.group({
      // Define your form controls with validators
      patientName: ['', Validators.required],
      patientAge: ['', Validators.required],
      // Add more form controls and validators as needed
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitform () {
    if (this.dischargeForm.valid) {
      const { patientName, patientAge } = this.dischargeForm.value;

      // Process the form data further (e.g., generate the discharge letter)
      console.log('Submitted Patient Name:', patientName);
      console.log('Submitted Patient Age:', patientAge);

      // Show an alert on successful form submission
      this.alertService.show('Discharge letter generated successfully!', {
        cssClass: 'alert-success',
        timeout: 3000 // Optional: Time in milliseconds for the alert to disappear
      });

      // Reset the form after submission
      this.dischargeForm.reset();
    } else {
      // Mark all fields as touched to display validation errors
      this.dischargeForm.markAllAsTouched();
    }
  }
}
   
// ngOnInit(): void {
//   // throw new Error('Method not implemented.');
// }

//  submit(){
//   alert("Form has been submitted and will be generating letter soon!!");
//  }



function submitForm() {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

