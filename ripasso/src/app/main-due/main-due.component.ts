import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-due',
  templateUrl: './main-due.component.html',
  styleUrls: ['./main-due.component.css']
})
export class MainDueComponent implements OnInit {

  data!: any[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.dataEmitter.subscribe(data => {
      this.data = data;
    })
  }
}
