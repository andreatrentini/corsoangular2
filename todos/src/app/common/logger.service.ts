import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggersService {

  messages: string[] = [];

  sender: Subject<string> = new Subject<string>(); 
  
  constructor() { }

  sendMessage(message: string) {
    this.messages.push(message)
    this.sender.next(message);
  }
}
