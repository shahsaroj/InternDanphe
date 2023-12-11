import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discharge-letter',
  templateUrl: './discharge-letter.component.html',
  styleUrls: ['./discharge-letter.component.css']
})
export class DischargeLetterComponent implements OnInit {
  formData: any; // Define variable to store form data

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.formData = history.state.formData; // Get form data from state

    // Log the retrieved form data for verification
    console.log('Form Data:', this.formData);
  }
}
