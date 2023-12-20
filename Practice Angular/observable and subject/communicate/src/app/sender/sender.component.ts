
// sender.component.ts
import { Component, OnDestroy } from '@angular/core';
// import { CommunicationService } from './communication.service';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnDestroy {
  message: string = '';
  sentMessage: string = '';
  receivedMessage: string = '';


  
  // stores the messege sent and received
  private sentSubscription: Subscription;
  private receivedSubscription: Subscription;



  // ArrayofReceivedMessages = new Array<string>
  arrayOfSentMessages = new Array<string>;
  arrayOfReceivedMessages = new Array<string>;
  arrayOfMessages= new Array<string>;

  // initialize the component and subscribe the current senter message
  constructor(private communicationService: CommunicationService) {
    this.sentSubscription = this.communicationService.currentSenderMessage.subscribe(message => {
      this.sentMessage = message;
      this.arrayOfSentMessages.push(message);
      this.arrayOfMessages.push(message);
    });


    this.receivedSubscription = this.communicationService.currentReceiverMessage.subscribe(message => {
      this.receivedMessage = message;
    });
  }
    // method that sends the message to the communication service
  sendMessage() {
    this.communicationService.changeSenderMessage(this.message);
  }

  ngOnDestroy() {
    this.sentSubscription.unsubscribe();
    this.receivedSubscription.unsubscribe();
  }

  // listOfMessages = ["hello", "hi", "how are you?", "where are you?"];
  // onMessageChanges($event: any): void{
  //   if($event && this.message){
  //     const isAvailable = this.listOfMessages.find(a => a === this.message);
  //     if(isAvailable){
  //       console.log("Found");
  //     }else{
  //       console.log("Not Found!");
  //     }
  //   }
  // }
}
