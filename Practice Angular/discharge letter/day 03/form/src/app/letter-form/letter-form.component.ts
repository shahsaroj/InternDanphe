import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-letter-form',
  templateUrl: './letter-form.component.html',
  styleUrls: ['./letter-form.component.css']
})
export class LetterFormComponent implements OnInit {
onSubmit() {
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
  formData: any = {};
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
  printButtonDisabled(...args: []): boolean {
    return !this.letterForm.valid;
  }


  printLetter() {
    let printContents = `
      <h1>Letter</h1>
      <p><strong>Name:</strong> ${this.formData.name}</p>
      <p><strong>Address:</strong> ${this.formData.address}</p>
      <p><strong>Content:</strong></p>
      <p>${this.formData.content}</p>
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
