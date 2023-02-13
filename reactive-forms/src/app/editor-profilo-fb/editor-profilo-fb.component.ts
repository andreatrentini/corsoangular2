import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Profilo } from '../common/profilo.class';

@Component({
  selector: 'app-editor-profilo-fb',
  templateUrl: './editor-profilo-fb.component.html',
  styleUrls: ['./editor-profilo-fb.component.css']
})
export class EditorProfiloFbComponent implements OnInit {
  profilo: Profilo = new Profilo();
  fp!: FormGroup;

  ngOnInit() {
    this.profilo.loadFromLocalStorage();
    this.fp = this.profilo.createForm();
  }

  save() {
    console.log(this.fp.value);
    this.profilo.update(this.fp.value);
    this.profilo.saveToLocalStorage();
  }

  get pc() {
    return this.fp.controls;
  }

  get ic() {
    let controlliIndirizzo: FormGroup;
    controlliIndirizzo = <FormGroup>this.fp.get('indirizzo');
    return controlliIndirizzo;
  }


}
