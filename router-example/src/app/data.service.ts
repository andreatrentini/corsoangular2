import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  names: string[] = ['Marco', 'Pietro', 'Enrico', 'Giovanni'];

  getName(index: number): string {
    return this.names[index];
  }

  constructor() { }
}
