import { Component } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private logService: LogService) {}
  
  inviaMessaggio() {
    this.logService.addMessage('Bottone premuto');
  }
  
}