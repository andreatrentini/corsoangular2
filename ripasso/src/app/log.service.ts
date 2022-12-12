import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  messages: Message[];
  logEmitter = new Subject<Message>();

  constructor() { 
    this.messages = [];
  }

  addMessage(text: string) {
    let message = {
      dataora: Date().toString(),
      message: text
    }
    this.messages.push(message);
    this.logEmitter.next(message);
    console.log(this.messages);
  }
}
