import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupComponent implements OnInit {
  signupform: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator() // Custom validator for password matching
    });
  }

  // Custom validator function for password matching
  passwordMatchValidator() {
    const password = this.signupform?.get('password')?.value;
    const confirmPassword = this.signupform?.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      this.signupform?.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      this.signupform?.get('confirmPassword')?.setErrors(null);
    }
  }

  onSubmit() {
    if (this.signupform.valid) {
      // Perform signup logic, e.g., send data to backend, etc.
      console.log(this.signupform.value);
    } else {
      // Form is invalid, handle error or display validation messages
      // You can mark the fields as touched to show validation messages
      this.signupform.markAllAsTouched();
    }
  }
}
