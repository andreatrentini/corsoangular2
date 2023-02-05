import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Profilo } from '../profilo.class';

@Component({
  selector: 'app-profilo-edit',
  templateUrl: './profilo-edit.component.html',
  styleUrls: ['./profilo-edit.component.css']
})
export class ProfiloEditComponent implements OnInit {
  profilo = new Profilo();
  formProfilo!: FormGroup;

  ngOnInit() {
    this.profilo.loadFromLocalStorage();
    this.formProfilo = this.profilo.createForm();
    //console.log(this.f);
    //console.log(this.i);
  }

  salva() {
    this.profilo.update(this.formProfilo.value);
    this.profilo.saveToLocalStorage();
  }

  get f() { return this.formProfilo.controls; }

  get i() { 
    let indirizzoGroup: FormGroup;
    indirizzoGroup = <FormGroup>this.formProfilo.get('indirizzo');
    return indirizzoGroup.controls; }

}
