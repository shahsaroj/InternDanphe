// // child.component.ts
// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   template: `
  
//     <h2>Receiver</h2>
//     <p>Received data from Parent: {{ childData }}</p>
//     <button (click)="onclicksendToParent()">Send Data to Parent</button>
//   `,
// })
// export class ChildComponent {
//   @Input() childData: string = '';
//   @Output() childEvent = new EventEmitter<string>();
//   @Output() sendToParent = new EventEmitter<string>();
//   childInput: string = '';

//   onclicksendToParent(): void {
   
//     const dataToSend = 'Data from Child: ' + this.childInput;
//     this.sendToParent.emit(dataToSend);
//   }
// }

// child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: [ './child.component.css' ]
 
})
export class ChildComponent {
  @Input() childData: string = '';
  @Output() parentEvent = new EventEmitter<string>();
  @Output() sendToParent = new EventEmitter<string>();

  childInput: string = '';
  childToParentData: string = '';
receivechildData: any;
dataFromChild:string | undefined;
// parentInput: any;
dataFromParent:string='';

  onclicksendToParent() {
    const dataToSend =  this.childInput;
    this.sendToParent.emit(dataToSend);
    this.childToParentData = this.childInput; 
    
  }
  receiveDataFromParent(data: string) {
    // Handle received data from ChildComponent
    this.dataFromParent = data;
    console.log('Data received in Child from Parent: ', data);
  }
}
