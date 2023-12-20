
import { Component, OnDestroy } from '@angular/core';
// import { CommunicationService } from './communication.service';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnDestroy {
   message: string = '';
  receivedMessage: string = '';
  sentMessage: string = '';
  private sentSubscription: Subscription;
  private receivedSubscription: Subscription;
  arrayOfSentMessages = new Array<string>;
  arrayOfReceivedMessages = new Array<string>;
messagesReceived: any;
messagesSent: any;

  constructor(private communicationService: CommunicationService) {
    this.sentSubscription = this.communicationService.currentSenderMessage.subscribe(message => {
      this.sentMessage = message;
      this.arrayOfSentMessages.push(message);
      this.arrayOfReceivedMessages.push(message);
    });
    this.receivedSubscription = this.communicationService.currentReceiverMessage.subscribe(message => {
      this.receivedMessage = message;
    });
  }

  sendToSender() {
    this.communicationService.changeReceiverMessage(this.message);
  }

  ngOnDestroy() {
    this.sentSubscription.unsubscribe();
    this.receivedSubscription.unsubscribe();
  }
}
