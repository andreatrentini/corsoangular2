import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  data!: any[];
  constructor(private dataService: DataService, private logService: LogService) {}

  loadData() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.logService.addMessage('Dati caricati');
    })
  }
}
