import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogService } from '../log.service';
import { Message } from '../message';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  
  message!: Message;
  observer!: Subscription;
  
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.observer = this.logService.logEmitter.subscribe((msg: Message) => {
      this.message = msg;
    })
  }

  ngOnDestroy(): void {
    this.observer.unsubscribe();
  }
}
