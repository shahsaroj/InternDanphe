// receiver.component.ts
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
  messagesReceived: string[] = [];
  private receivedSubscription: Subscription;
  messages: string ='';

 
  constructor(private communicationService: CommunicationService) {
    this.receivedSubscription = this.communicationService.currentReceiverMessages.subscribe(messages => {
      this.messagesReceived = messages;
    });
  }

  ngOnDestroy() {
    this.receivedSubscription.unsubscribe();
  }
  sendMessages(){
    if (this.messages.trim() !== '') {
      this.communicationService.changeSenderMessage(this.messages);
      this.messages = '';
    }
  }
}
