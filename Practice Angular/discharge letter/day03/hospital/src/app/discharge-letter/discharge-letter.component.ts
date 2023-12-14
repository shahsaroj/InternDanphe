import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DischargeModel } from '../models/discharge.model';

@Component({
  selector: 'app-discharge-letter',
  templateUrl: './discharge-letter.component.html',
  styleUrls: ['./discharge-letter.component.css'],
})
export class DischargeLetterComponent {
  dischargeData: DischargeModel = new DischargeModel();
  dischargeLetter: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.dischargeData = Object.assign(this.dischargeData,params );
    });
  }
  printDischargeLetter() {
    let printContents = this.dischargeLetter.nativeElement.innerHTML;
    let popupWin = window.open('', '_blank', 'width=600,height=600');
    if (popupWin) {
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title>Discharge Letter</title>
            <style>
             justify-content: centre;
            </style>
          </head>
          <body onload="window.print();window.close()">
            ${printContents}
          </body>
        </html>`
      );
      popupWin.document.close();
    } else {
      alert('Please allow popups for this website');
    }
  }

  goBack() {
    this.router.navigate(['/discharge-form', this.dischargeData]);
  }
  
}
