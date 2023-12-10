import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Reactive forms';
  contactForm: FormGroup;
  city: any;
  street: any;
  pincode: any;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.maxLength(9),
        Validators.pattern('^[a-zA-Z@.com]+$'),
      ]),
      email: new FormControl('', [Validators.email, Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],),
      gender: new FormControl('', [Validators.required]),
      isMarried: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),

      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        pincode: new FormControl('', [Validators.required]),
      }),
      
    });
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  get country() {
    return this.contactForm.get('country');
  }

  // get city() {
  //   return this.contactForm.get(address).get('city');
  // }

  // get street() {
  //   return (this.contactForm.get("address").get('street'));
  // }

  // get pincode() {
  //   return this.contactForm.get("address").get('pincode');
  // }

  countryList: country[] = [
    new country('0',""),
    new country('1', 'Norway'),
    new country('2', 'USA'),
    new country('3', 'Nepal'),
    new country('4', 'kuwait'),
    new country('5', 'Dubai'),
    new country('6', 'Russia'),
    new country('7', 'China'),
    new country('8', 'Japan'),
    new country('9', 'Bhutan'),
    new country('10', 'Philipines'),
    new country('11', 'Thailand'),
    new country('12', 'Pakistan'),
    new country('13', 'Aganistan'),
    new country('14', 'korea'),
    new country('15', 'finland'),
  ];

  onSubmit() {
    console.log(this.contactForm.value);
  }
}

export class contact {
  firstname: string | undefined;
  lastname: string | undefined;
  gender: string | undefined;
  isMarried: boolean | undefined;
  country: string | undefined;
  address:
    | {
        city: string;
        street: string;
        pincode: string;
      }
    | undefined;
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
