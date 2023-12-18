import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hospital-form',
  templateUrl: './hospital-form.component.html',
  styleUrls: ['./hospital-form.component.css']
})
export class HospitalFormComponent implements OnInit {
  hospitalForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.hospitalForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(6)]],
      address: ['', [Validators.required, Validators.maxLength(10)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]+')]]
      // Add more form controls and validators as needed
    });
  }

  ngOnInit() {
    // Other initialization logic
  }

  onSubmit() {
    if (this.hospitalForm.valid) {
      // Handle form submission logic here
      console.log(this.hospitalForm.value);
      // You can send the form data to a service or perform other actions
    } else {
      // Handle form validation errors or display messages
    }
  }
  generateLetter() {
    if (this.hospitalForm.valid) {
      const formData = this.hospitalForm.value;
      // Logic to generate the letter using form data
      const letterContent = `Hospital Name: ${formData.name}
      \nAddress: ${formData.address}
      \nPhone Number: ${formData.phoneNumber}\n`;
      // For demonstration, you can log the letter content or perform other actions here
      console.log('Generated Letter:', letterContent);
      // You can further process the letter content, such as displaying it in a modal or sending it to an API
    } else {
      // Handle form validation errors or display messages
    }
  }

  printFormData() {
    const formData = this.hospitalForm.value;
    let printContents = '<h1>Hospital Information</h1>';

    Object.entries(formData).forEach(([key, value]) => {
      printContents += `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`;
    });

    const popupWin = window.open('', '_blank', 'width=600,height=600');
    if (popupWin) {
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title>Printed Hospital Information</title>
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
      alert('Popup blocked. Please allow popups for this website.');
    }
  }
}
