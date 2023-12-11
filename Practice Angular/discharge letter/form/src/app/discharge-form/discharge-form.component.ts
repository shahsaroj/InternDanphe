import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-discharge-form',
  templateUrl: './discharge-form.component.html',
  styleUrls: ['./discharge-form.component.css']
})
export class DischargeFormComponent implements OnInit {
  dischargeForm!: FormGroup;
  showDischargeLetter: boolean = false;
formData: any;
patientName: any;
  router: any;
  

  constructor (private formBuilder: FormBuilder){
    
  }
  ngOnInit() {
    this.dischargeForm = this.formBuilder.group({
      patientName: ['', Validators.required],
      patientAddress: ['', Validators.required],
      patientContact: ['', Validators.required],
      patientDiagonise: ['', Validators.required],
      patientmedication: ['', Validators.required],
      patientdietary: ['', Validators.required],
     
    // Add other form controls with validators as needeD
  
// Add other form controls with validators as needed
});

  }

  isFieldInvalid(field: string) {
    return this.dischargeForm.get(field)?.invalid && this.dischargeForm.get(field)?.touched;
  }

  isFieldTouched(field: string) {
    return this.dischargeForm.get(field)?.touched;
  }

  submitForm() {
    if (this.dischargeForm.valid) {
      // Process the form data here (e.g., generate discharge letter)
      this.showDischargeLetter = true;
      this.router.navigate(['/discharge-letter'], { state: { formData: this.dischargeForm.value } });
    } else {
      // Mark all fields as touched to display validation errors
      // Object.values(this.dischargeForm.controls).forEach(control => control.markAsTouched());
    }
  }
}

