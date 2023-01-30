import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfiloService } from '../profilo.service';

@Component({
  selector: 'app-editor-profilo-fb',
  templateUrl: './editor-profilo-fb.component.html',
  styleUrls: ['./editor-profilo-fb.component.css']
})
export class EditorProfiloFbComponent implements OnInit{

  profilo!: any;
  formProfilo!: any;

  constructor(private fb: FormBuilder, private ps: ProfiloService) {}
  
  ngOnInit() {
    let profiloLetto = this.ps.carica();
    console.log(profiloLetto);

    if (profiloLetto) {
      this.profilo = profiloLetto;
    }
    else {
      this.profilo = {
        nome: '',
        cognome: '',
        email: '',
        indirizzo: {
          via: '',
          nCivico: '',
          cap: '',
          citta: '',
          provincia: ''
        }
      }
    }

    
    this.formProfilo = this.fb.group({
      nome: [this.profilo.nome, Validators.required],
      cognome: [this.profilo.cognome],
      email: [this.profilo.email, [Validators.required, Validators.email]],
      indirizzo: this.fb.group({
        via: [this.profilo.indirizzo.via],
        nCivico: [this.profilo.indirizzo.nCivico],
        cap: [this.profilo.indirizzo.cap, Validators.required],
        citta: [this.profilo.indirizzo.citta, Validators.required],
        provincia: [this.profilo.indirizzo.provincia, Validators.required]
      })
    });
      console.log('profilo', this.profilo);
    }
  
  salva() {
    console.log(this.formProfilo.value);
    this.ps.salva(this.formProfilo.value);
  }
}
