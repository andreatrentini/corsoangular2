import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor-profilo',
  templateUrl: './editor-profilo.component.html',
  styleUrls: ['./editor-profilo.component.css']
})
export class EditorProfiloComponent {
  formProfilo = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl('')
  });
}
