import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data!: any[];
  dataEmitter = new Subject<any[]>();

  constructor(private client: HttpClient, private logService: LogService) { }

  getData(): Observable<any> {
    return this.client.get('/assets/dati.json');
  }

  loadData() {
    this.client.get<any[]>('/assets/dati.json').subscribe(data => {
      this.data = data;
      this.dataEmitter.next(this.data.slice());
      this.logService.addMessage('Dati caricati nel servizio');
    })
  }
}
