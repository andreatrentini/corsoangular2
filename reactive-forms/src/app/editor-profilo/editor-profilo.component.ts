import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor-profilo',
  templateUrl: './editor-profilo.component.html',
  styleUrls: ['./editor-profilo.component.css']
})
export class EditorProfiloComponent {
  formProfilo = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    indirizzo: new FormGroup({
      via: new FormControl(''),
      nCivico: new FormControl(''),
      cap: new FormControl('', Validators.required),
      citta: new FormControl('', Validators.required),
      provincia: new FormControl('', Validators.required)
    })
  });

  salva() {
    console.log(this.formProfilo.value);
  }
}
