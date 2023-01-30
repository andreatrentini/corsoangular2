import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfiloService {

  constructor() { }

  salva(profilo: any) {
    localStorage.setItem('profilo', JSON.stringify(profilo));
  }

  carica() {
    let profiloLetto = localStorage.getItem('profilo');   
    if (profiloLetto) {
      return JSON.parse(profiloLetto);
    }  
    else {
      return null;
    }
  }

  azzera() {
    localStorage.removeItem('profilo');
  }
}
