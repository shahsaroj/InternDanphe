import { Component } from '@angular/core';

@Component({
  selector: 'app-form-val',
  templateUrl: './form-val.component.html',
  styleUrls: ['./form-val.component.css']
})
export class FormValComponent{

 
  submit(userlogin: any): void {
    console.log("Form Submitted!", userlogin);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
