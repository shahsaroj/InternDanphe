import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-discharge-form',
  templateUrl: './discharge-form.component.html',
  styleUrls: ['./discharge-form.component.css']
})
export class DischargeFormComponent implements OnInit {
  dischargeForm!: FormGroup;
  showDischargeLetter: boolean = false;
  formData: any;
  patientName:any ;
  router: any;
  dischargeData: any;
  

  constructor (private formBuilder: FormBuilder, private route:Router){
    
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
      this.router.navigate(['./dis'], { state: { formData: this.dischargeForm.value } });
    } else {
      // Mark all fields as touched to display validation errors
      Object.values(this.dischargeForm.controls).forEach(control => control.markAsUntouched());

    // localStorage.setItem('formData', JSON.stringify(this.formData));
    }
    // // Navigate to another page
    this.submitForm()
     {
      this.router.navigate(['/discharge-letter', this.dischargeForm]);
    // this.router.navigate(['./discahrge-letter']);
    // alert("SUBMITTE");
    };
  }
  }
