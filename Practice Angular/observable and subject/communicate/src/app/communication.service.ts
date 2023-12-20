// communication.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  // initalize hold and emit messege by sender and receiver
  private senderSource = new BehaviorSubject<string>('');
  private receiverSource = new BehaviorSubject<string>('');
  

  // create a publicproperty  current senedr message that expose the sender source as an observable
  currentSenderMessage = this.senderSource.asObservable();             
  currentReceiverMessage = this.receiverSource.asObservable();
  changeMessage: string='';

  constructor() { }

  changeSenderMessage(message: string) {
    this.senderSource.next(message);
  }

  changeReceiverMessage(message: string) {
    this.receiverSource.next(message);
  }
}
