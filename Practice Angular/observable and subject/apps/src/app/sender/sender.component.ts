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
  messagesSent: string[] = [];
  private sentSubscription: Subscription;
  messages: string ='';

  constructor(private communicationService: CommunicationService) {
    this.sentSubscription = this.communicationService.currentSenderMessages.subscribe(messages => {
      this.messagesSent = messages;
    });
  }

  // 
  
  sendMessage() {
    if (this.message.trim() !== '') {
      this.communicationService.changeReceiverMessage(this.message);
      this.messagesSent.push(this.message); // Add own message to display
      this.message = '';
    }
  }

  ngOnDestroy() {
    this.sentSubscription.unsubscribe();
  }
}

