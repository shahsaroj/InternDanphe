import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-discharge-letter',
  templateUrl: './discharge-letter.component.html',
  styleUrls: ['./discharge-letter.component.css']
})
export class DischargeLetterComponent {
 
  @ViewChild('printSection') printSection!: ElementRef;
  formData: any ={
    firstName:"",
    lastName:"",
    dateOfBirth:"",
    age:"",
    address:"",
    diagnosedWith:"",
    finalReport:"",
    doctorName:"",
    dateOfDiagnose:"",
    dateOfRelease:"",
  }; // Object to hold form data
  dateOfBirth: Date;
constructor(){
  this.dateOfBirth = new Date();
}
  print() {
    // let printContents = this.printSection.nativeElement.innerHTML;
    // let originalContents = document.body.innerHTML;
    // document.body.innerHTML = printContents;
    // window.print();
    // document.body.innerHTML = originalContents;
    alert("hello")
  }
}
