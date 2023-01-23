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

  constructor(private fb: FormBuilder, private ps: ProfiloService) {}

  formProfilo = this.fb.group({
    nome: [this.profilo.nome, Validators.required],
    cognome: [''],
    email: ['', [Validators.required, Validators.email]],
    indirizzo: this.fb.group({
      via: [''],
      nCivico: [''],
      cap: ['', Validators.required],
      citta: ['', Validators.required],
      provincia: ['', Validators.required]
    })
  });

  ngOnInit() {
    this.profilo = this.ps.carica();
  }
  
  salva() {
    console.log(this.formProfilo.value);
  }
}
