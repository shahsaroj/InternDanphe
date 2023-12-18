import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-letter-form',
  templateUrl: './letter-form.component.html',
  styleUrls: ['./letter-form.component.css']
})
export class LetterFormComponent implements OnInit {
onGenerate() {
throw new Error('Method not implemented.');
}
// isFieldInvalid(arg0: string) {
// throw new Error('Method not implemented.');
// }
// isFieldTouched(arg0: string): any {
// throw new Error('Method not implemented.');
// }
  // formData: any = {};
// dischargeForm: any;

  // onSubmit() {
  //   // Your logic here to process the form data or save it
  //   console.log('Form Data:', this.formData);
  // }
  letterForm!: FormGroup;
  formData: any = {
    // name :'',
    // address:'',

  };
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createForm() {
    this.letterForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  get formControls() {
    return this.letterForm.controls;
    
  }
  // printButtonDisabled(): boolean {
  //   return !this.letterForm.valid;
  // }

  onSubmit() {
    if (this.letterForm.valid) {
      this.formData = { ...this.letterForm.value };
      // Your logic here to process the form data or save it
      // console.log('Form Data:', this.formData?.value);
    } else {
      // Mark all fields as touched to display validation errors
      this.letterForm?.markAllAsTouched();
      // this.markFormTouched(this..va); 
      
    }
    
  }
  markFormTouched() {
    Object.values(this.letterForm?.controls).forEach(control => {
      control.markAsTouched();
    });
  }
  printButtonDisabled(): boolean {
    return !this.letterForm.valid;
  }
  
  

  printLetter() {
   
    let printContents = `
    <h1>Letter</h1>
    <p><strong>Name:</strong> ${this.formData?.name.va}</p>
    <p><strong>Address:</strong> ${this.formData?.address}</p>
    <p><strong>Content:</strong></p>
    <p>${this.formData?.content}</p>
    <hr>
    <h2>Form Inputs:</h2>
    <p><strong>Name:</strong> ${this.letterForm.get('name')?.value}</p>
    <p><strong>Email:</strong> ${this.letterForm.get('email')?.value}</p>
    <!-- Add more form fields as needed -->
  `;

    let popupWin = window.open('', '_blank', 'width=600,height=600');
    if (popupWin) {
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title>Printed Letter</title>
            <style>
              /* Your print styles here */
            </style>
          </head>
          <body onload="window.print();window.close()">
            ${printContents}
          </body>
        </html>`
      );
      popupWin.document.close();
    } else {
      alert('plaease fill all the input');
    }
  }
}
