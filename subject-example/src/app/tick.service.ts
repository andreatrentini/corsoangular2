import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TickService {

  id: number = 0;

  tickTimer = interval(1000);

  tickEvent: Subject<number> = new Subject<number>();

  constructor() { }

  startTick() {
    this.tickTimer.subscribe(num => {
      this.id = num;
      this.tickEvent.next(this.id);
    })
  }
}
