import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfiloService {

  constructor() { }

  salva(profilo: any) {
    localStorage.setItem('profilo', profilo);
  }

  carica() {
    return localStorage.getItem('profilo');
  }

  azzera() {
    localStorage.removeItem('profilo');
  }
}
