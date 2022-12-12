import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ripasso';

  constructor(private logService: LogService) {}

  ngOnInit(): void {    
    this.logService.addMessage('Applicazione avviata');
  }
}
