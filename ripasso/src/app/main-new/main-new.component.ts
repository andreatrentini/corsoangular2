import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-main-new',
  templateUrl: './main-new.component.html',
  styleUrls: ['./main-new.component.css']
})
export class MainNewComponent {

  data!: any[];

  constructor(private client: HttpClient, private logService: LogService) {}

  loadData() {
    this.client.get<any[]>('/assets/dati.json').subscribe(data => {
      this.data = data;
      this.logService.addMessage('Dati caricati nel componente.');
    })
  }

}
