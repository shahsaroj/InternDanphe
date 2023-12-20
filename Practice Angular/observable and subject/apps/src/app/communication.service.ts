// communication.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private senderMessages: string[] = [];
  private receiverMessages: string[] = [];

  private senderSource = new BehaviorSubject<string[]>(this.senderMessages);
  private receiverSource = new BehaviorSubject<string[]>(this.receiverMessages);

  currentSenderMessages = this.senderSource.asObservable();
  currentReceiverMessages = this.receiverSource.asObservable();

  constructor() { }

  changeSenderMessage(message: string) {
    this.senderMessages.push(`Sender: ${message}`);
    this.senderSource.next([...this.senderMessages]);
  }

  changeReceiverMessage(message: string) {
    this.receiverMessages.push(`Receiver: ${message}`);
    this.receiverSource.next([...this.receiverMessages]);
  }
}
