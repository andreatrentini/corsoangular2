import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { TickService } from '../tick.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit, OnDestroy {
  num: number = 0;
  tickObserver: Subscription = new Subscription();

  constructor(private tickService: TickService) {}

  ngOnInit(): void {
    this.tickObserver = this.tickService.tickEvent.subscribe(num => {
      this.num = num;
    })
  }

  ngOnDestroy(): void {
    this.tickObserver.unsubscribe();
  }

  startTicker() {
    this.tickService.startTick();
  }



}
