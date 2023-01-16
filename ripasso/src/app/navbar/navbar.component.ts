import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private logService: LogService, private dataService: DataService) {}
  
  inviaMessaggio() {
    this.logService.addMessage('Bottone premuto');
  }

  loadData() {
    this.dataService.loadData();
  }
  
}