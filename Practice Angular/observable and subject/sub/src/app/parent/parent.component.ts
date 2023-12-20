

// parent.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: [ './parent.component.css' ]
 
})
export class ParentComponent {
  @Input() parentData: string = '';
  @Output() parentEvent = new EventEmitter<string>();
  @Output() sendTochild = new EventEmitter<string>();

  // parentData:String='';
  dataFromParent:string='';
  onclicksend: any;
  parentToChildData: string ='';
  receiveparentData:any;
  // dataFromParent: any;
childData: any;
parentInput: string='';
dataFromChild: string='';
  // parentInput: string ='';

onclicksendTochild() {
    const dataToSend =  this.parentInput;
    this.sendTochild.emit(dataToSend);
    this.parentToChildData = this.parentInput; 
    // console.log ("RECEIVED");
  }

  // receiveData(data: string) {
  
  //   console.log('Data received in Parent: ', this.receiveData);
  // }
  receiveDataFromChild(data: string) {
    // Handle received data from ChildComponent
    this.dataFromChild = data;
    console.log('Data received in Parent from Child: ', data);
  }
}


