import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Profilo } from '../profilo';

@Component({
  selector: 'app-editor-profilo-fb',
  templateUrl: './editor-profilo-fb.component.html',
  styleUrls: ['./editor-profilo-fb.component.css']
})
export class EditorProfiloFbComponent implements OnInit {

  profilo: Profilo;
  formProfilo!: any;

  constructor(private fb: FormBuilder) {
    this.profilo = new Profilo();
  }

  ngOnInit() {
    this.profilo.carica();

    this.formProfilo = this.profilo.createForm();
    console.log('profilo', this.profilo);
  }

  salva() {
    console.log(this.formProfilo.value);
    this.profilo.salva(this.formProfilo.value);
  }
}
